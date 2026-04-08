import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const readSource = (relativePath) => {
  const url = new URL(`../${relativePath}`, import.meta.url);
  return existsSync(url) ? readFileSync(url, 'utf8') : '';
};

const componentSource = readSource('src/components/common/DesignPositioningSection/DesignPositioningSection.tsx');
const styleSource = readSource('src/components/common/DesignPositioningSection/DesignPositioningSection.module.css');
const workDetailSource = readSource('src/pages/WorkDetail/WorkDetail.tsx');
const workTypeSource = readSource('src/types/work.ts');
const flowwalkSource = readSource('src/data/works/flowwalk.ts');
const designPositioningSource = flowwalkSource.match(/designPositioningSection:\s*\{([\s\S]*?)\n  \},\n\};/)?.[1] ?? '';

test('design positioning section is wired into work detail rendering and work types', () => {
  assert.match(workTypeSource, /export interface DesignPositioningMapItem/);
  assert.match(workTypeSource, /export interface DesignPositioningAttribute/);
  assert.match(workTypeSource, /export interface DesignPositioningSection/);
  assert.match(workTypeSource, /headingDescription\?: string;/);
  assert.match(workTypeSource, /designPositioningSection\?: DesignPositioningSection;/);
  assert.match(workDetailSource, /DesignPositioningSection/);
  assert.match(workDetailSource, /work\.designPositioningSection && work\.designPositioningSection\.position === imageIndex/);
  assert.match(flowwalkSource, /designPositioningSection:\s*\{/);
  assert.match(flowwalkSource, /heading:\s*'设计定位理念'/);
  assert.match(flowwalkSource, /headingDescription:\s*'【在此填写设计定位理念补充说明】'/);
});

test('design positioning section renders a left map with floating cards and a right vision panel', () => {
  assert.match(componentSource, /data\.mapItems\.map/);
  assert.match(componentSource, /item\.variant/);
  assert.match(componentSource, /data\.attributes\.map/);
  assert.match(componentSource, /styles\.mapCard/);
  assert.match(componentSource, /styles\.visionCard/);
  assert.match(componentSource, /styles\.attributesCard/);
  assert.match(componentSource, /data\.headingDescription/);
  assert.match(componentSource, /styles\.headingDescription/);
});

test('design positioning section keeps the figma-inspired split layout and connector styling', () => {
  assert.equal((designPositioningSource.match(/\bx:\s*\d+/g) || []).length, 6);
  assert.match(styleSource, /\.layout\s*\{[^}]*grid-template-columns:\s*minmax\(0,\s*1fr\)\s+clamp\(36px,\s*4vw,\s*64px\)\s+minmax\(300px,\s*360px\);[^}]*align-items:\s*stretch;/);
  assert.match(styleSource, /\.mapPanel\s*\{[^}]*min-height:\s*600px;[^}]*display:\s*flex;[^}]*align-items:\s*center;[^}]*justify-content:\s*center;/);
  assert.match(styleSource, /\.mapInner\s*\{[^}]*width:\s*84%;/);
  assert.match(styleSource, /\.verticalAxis\s*\{[^}]*left:\s*50%;/);
  assert.match(styleSource, /\.verticalAxisLabel\s*\{[^}]*left:\s*50%;/);
  assert.match(styleSource, /\.mapCardPortrait\s*\{/);
  assert.match(styleSource, /\.mapCardLandscape\s*\{/);
  assert.match(styleSource, /\.mapCardWide\s*\{/);
  assert.match(styleSource, /\.mapCard\s*\{[^}]*animation:\s*floatCard 8s ease-in-out infinite;/);
  assert.match(styleSource, /\.connectorDot\s*\{[^}]*left:\s*-42px;[^}]*animation:\s*connectorPulse 3\.2s ease-in-out infinite;/);
  assert.match(styleSource, /\.connectorLine\s*\{[^}]*border-top:\s*4px dashed/);
  assert.match(styleSource, /\.aside\s*\{[^}]*min-height:\s*600px;/);
  assert.match(styleSource, /\.attributesCard\s*\{[^}]*margin-top:\s*auto;/);
  assert.match(styleSource, /\.visionCard\s*\{[^}]*background:\s*linear-gradient\(135deg,\s*#6e3bd8,\s*#7e4bff\);/);
  assert.match(styleSource, /\.attributesCard\s*\{[^}]*background:\s*rgba\(255,\s*255,\s*255,\s*0\.92\);/);
});

test('design positioning section includes dark mode styling for the map and vision panels', () => {
  assert.match(styleSource, /\[data-theme="dark"\]\s+\.heading\s*\{/);
  assert.match(styleSource, /\.heading\s*\{[^}]*font-size:\s*var\(--font-size-2xl\);[^}]*line-height:\s*1\.7;[^}]*color:\s*var\(--theme-text-primary\);[^}]*font-weight:\s*var\(--font-weight-medium\);/);
  assert.match(styleSource, /\.headingDescription\s*\{[^}]*font-size:\s*var\(--font-size-base\);[^}]*line-height:\s*1\.7;[^}]*color:\s*var\(--theme-text-secondary/);
  assert.match(styleSource, /\[data-theme="dark"\]\s+\.mapPanel\s*\{[^}]*linear-gradient\(180deg,\s*rgba\(27,\s*25,\s*36,\s*0\.96\),\s*rgba\(20,\s*19,\s*29,\s*0\.98\)\s*100%\);/);
  assert.match(styleSource, /\[data-theme="dark"\]\s+\.mapCard\s*\{[^}]*background:\s*rgba\(40,\s*36,\s*56,\s*0\.82\);/);
  assert.match(styleSource, /\[data-theme="dark"\]\s+\.mapCardTitle,\s*\n\[data-theme="dark"\]\s+\.visionTitle,\s*\n\[data-theme="dark"\]\s+\.attributeTitle\s*\{[^}]*color:\s*rgba\(255,\s*255,\s*255,\s*0\.94\);/);
  assert.match(styleSource, /\[data-theme="dark"\]\s+\.visionParagraph,\s*\n\[data-theme="dark"\]\s+\.attributeDescription\s*\{[^}]*color:\s*rgba\(255,\s*255,\s*255,\s*0\.72\);/);
  assert.match(styleSource, /\[data-theme="dark"\]\s+\.attributesCard\s*\{[^}]*background:\s*rgba\(30,\s*27,\s*42,\s*0\.9\);/);
});
