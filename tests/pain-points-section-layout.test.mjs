import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const componentSource = readFileSync(
  new URL('../src/components/common/PainPointsSection/PainPointsSection.tsx', import.meta.url),
  'utf8',
);

const styleSource = readFileSync(
  new URL('../src/components/common/PainPointsSection/PainPointsSection.module.css', import.meta.url),
  'utf8',
);

const workDetailSource = readFileSync(
  new URL('../src/pages/WorkDetail/WorkDetail.tsx', import.meta.url),
  'utf8',
);

const workTypeSource = readFileSync(
  new URL('../src/types/work.ts', import.meta.url),
  'utf8',
);

const flowwalkSource = readFileSync(
  new URL('../src/data/works/flowwalk.ts', import.meta.url),
  'utf8',
);

test('pain points section is wired into work detail rendering and work types', () => {
  assert.match(workTypeSource, /export interface PainPointCard/);
  assert.match(workTypeSource, /export interface PainPointsSection/);
  assert.match(workTypeSource, /painPointsSection\?: PainPointsSection;/);
  assert.match(workDetailSource, /PainPointsSection/);
  assert.match(workDetailSource, /work\.painPointsSection && work\.painPointsSection\.position === imageIndex/);
  assert.match(flowwalkSource, /painPointsSection:\s*\{/);
  assert.match(flowwalkSource, /position:\s*1/);
});

test('pain points section renders two cards with optional image fallback placeholders', () => {
  assert.match(componentSource, /data\.items\.map/);
  assert.match(componentSource, /item\.image \?/);
  assert.match(componentSource, /styles\.imagePlaceholder/);
  assert.match(componentSource, /item\.placeholderLabel \|\| `0\$\{index \+ 1\}`/);
});

test('pain points section uses a two-column glass card layout close to figma', () => {
  assert.match(styleSource, /\.sectionSurface\s*\{[^}]*margin:\s*8px 0 56px;/);
  assert.doesNotMatch(styleSource, /\.sectionSurface\s*\{[^}]*background:/);
  assert.doesNotMatch(styleSource, /\.sectionSurface\s*\{[^}]*box-shadow:/);
  assert.doesNotMatch(styleSource, /\.sectionSurface::before/);
  assert.doesNotMatch(styleSource, /\[data-theme="dark"\]\s*\.sectionSurface/);
  assert.match(styleSource, /\.cardsGrid\s*\{[^}]*grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\);/);
  assert.match(styleSource, /\.card\s*\{[^}]*backdrop-filter:\s*blur\(12px\);/);
  assert.match(styleSource, /\.imageFrame\s*\{[^}]*min-height:\s*320px;/);
  assert.match(styleSource, /\.eyebrowLine\s*\{[^}]*width:\s*32px;/);
});
