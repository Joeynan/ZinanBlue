import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const readSource = (relativePath) => {
  const url = new URL(`../${relativePath}`, import.meta.url);
  return existsSync(url) ? readFileSync(url, 'utf8') : '';
};

const componentSource = readSource('src/components/common/PainToFeatureSection/PainToFeatureSection.tsx');
const styleSource = readSource('src/components/common/PainToFeatureSection/PainToFeatureSection.module.css');
const workTypeSource = readSource('src/types/work.ts');
const workDetailSource = readSource('src/pages/WorkDetail/WorkDetail.tsx');
const flowwalkSource = readSource('src/data/works/flowwalk.ts');
const painToFeatureSource = flowwalkSource.match(/painToFeatureSection:\s*\{([\s\S]*?)\n  \},\n\};/)?.[1] ?? '';

test('pain-to-feature section is wired into work types and work detail rendering', () => {
  assert.match(workTypeSource, /export interface PainToFeatureItem/);
  assert.match(workTypeSource, /featureIcon:\s*'route'\s*\|\s*'breath'\s*\|\s*'agent'/);
  assert.match(workTypeSource, /export interface PainToFeatureSection/);
  assert.match(workTypeSource, /painHeadingDescription\?: string;/);
  assert.match(workTypeSource, /painToFeatureSection\?: PainToFeatureSection;/);
  assert.match(workDetailSource, /import\s+\{\s*PainToFeatureSection\s*\}\s+from\s+'..\/..\/components\/common\/PainToFeatureSection\/PainToFeatureSection'/);
  assert.match(workDetailSource, /work\.painToFeatureSection && work\.painToFeatureSection\.position === imageIndex/);
  assert.match(flowwalkSource, /painHeadingDescription:\s*'【在此填写痛点总结补充说明】'/);
});

test('pain-to-feature section renders three pain cards, three arrows, and three feature cards', () => {
  assert.equal((painToFeatureSource.match(/painLabel:/g) || []).length, 3);
  assert.equal((painToFeatureSource.match(/featureTitle:/g) || []).length, 3);
  assert.match(componentSource, /data\.items\.map/);
  assert.match(componentSource, /data\.painHeadingDescription/);
  assert.match(componentSource, /styles\.painCard/);
  assert.match(componentSource, /styles\.featureCard/);
  assert.match(componentSource, /styles\.arrowIcon/);
  assert.match(componentSource, /styles\.headingDescription/);
  assert.match(componentSource, /getFeatureIcon/);
  assert.match(componentSource, /src="\/images\/flowwalk\/icon1\.svg"/);
  assert.match(componentSource, /src="\/images\/flowwalk\/icon2\.svg"/);
  assert.match(componentSource, /src="\/images\/flowwalk\/icon3\.svg"/);
});

test('pain-to-feature section keeps the figma-inspired desktop layout and mobile grouping', () => {
  assert.match(styleSource, /\.painGrid\s*\{[^}]*grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\);/);
  assert.match(styleSource, /\.featureGrid\s*\{[^}]*grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\);/);
  assert.match(styleSource, /\.mobileMappings\s*\{[^}]*display:\s*none;/);
  assert.match(styleSource, /@media\s*\(max-width:\s*900px\)\s*\{[\s\S]*\.desktopMappings\s*\{[^}]*display:\s*none;/);
  assert.match(styleSource, /@media\s*\(max-width:\s*900px\)\s*\{[\s\S]*\.mobileMappings\s*\{[^}]*display:\s*grid;/);
  assert.match(styleSource, /\.painCard\s*\{[^}]*backdrop-filter:\s*blur\(/);
  assert.match(styleSource, /\.featureCard\s*\{[^}]*backdrop-filter:\s*blur\(/);
  assert.match(styleSource, /\.painCard:hover\s*\{[^}]*transform:\s*translateY\(-8px\);/);
  assert.match(styleSource, /\.featureCard:hover\s*\{[^}]*transform:\s*translateY\(-6px\);/);
  assert.match(styleSource, /\.arrowIcon\s*\{[^}]*animation:\s*arrowPulse/);
});

test('pain-to-feature section includes dark mode and reduced motion fallbacks', () => {
  assert.match(styleSource, /\[data-theme="dark"\]\s+\.painCard\s*\{/);
  assert.match(styleSource, /\[data-theme="dark"\]\s+\.featureCard\s*\{/);
  assert.match(styleSource, /\[data-theme="dark"\]\s+\.sectionHeading/);
  assert.match(styleSource, /\.sectionHeading\s*\{[^}]*font-size:\s*var\(--font-size-2xl\);[^}]*line-height:\s*1\.7;[^}]*color:\s*var\(--theme-text-primary\);[^}]*font-weight:\s*var\(--font-weight-medium\);/);
  assert.match(styleSource, /\.headingDescription\s*\{[^}]*font-size:\s*var\(--font-size-base\);[^}]*line-height:\s*1\.7;[^}]*color:\s*var\(--theme-text-secondary/);
  assert.match(styleSource, /@media\s*\(prefers-reduced-motion:\s*reduce\)\s*\{[\s\S]*\.painCard,\s*\n\s*\.featureCard,\s*\n\s*\.painImage,\s*\n\s*\.featureIconBadge,\s*\n\s*\.arrowIcon/);
});
