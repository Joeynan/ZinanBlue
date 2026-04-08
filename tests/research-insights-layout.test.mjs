import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const componentSource = readFileSync(
  new URL('../src/components/common/ResearchInsights/ResearchInsights.tsx', import.meta.url),
  'utf8',
);

const styleSource = readFileSync(
  new URL('../src/components/common/ResearchInsights/ResearchInsights.module.css', import.meta.url),
  'utf8',
);

test('ResearchInsights renders a compact bridge layout structure', () => {
  assert.match(componentSource, /className=\{styles\.leftGrid\}/);
  assert.match(componentSource, /className=\{styles\.bridgeGuide\}/);
  assert.match(componentSource, /className=\{styles\.summaryHeader\}/);
});

test('ResearchInsights styles define a three-zone editorial grid', () => {
  assert.match(styleSource, /\.container\s*\{[\s\S]*grid-template-columns:/);
  assert.match(styleSource, /\.leftGrid\s*\{/);
  assert.match(styleSource, /\.bridgeGuide\s*\{/);
  assert.match(styleSource, /\.summaryHeader\s*\{/);
});

test('ResearchInsights styles align captions and vertical label in their columns', () => {
  assert.match(styleSource, /\.leftGrid\s*\{[\s\S]*align-items:\s*stretch;/);
  assert.match(styleSource, /\.insightCard\s*\{[\s\S]*grid-template-rows:\s*minmax\(180px,\s*1fr\)\s+auto;/);
  assert.match(styleSource, /\.middleBridge\s*\{[\s\S]*align-self:\s*stretch;/);
});

test('ResearchInsights styles tune label position and fixed title sizing', () => {
  assert.match(styleSource, /\.chartCaption\s*\{[^}]*margin-top:\s*12px;/);
  assert.match(styleSource, /\.chartCaption\s*\{[^}]*white-space:\s*nowrap;/);
  assert.match(styleSource, /\.verticalLabel\s*\{[^}]*font-size:\s*28px;/);
  assert.match(styleSource, /\.verticalLabel\s*\{[^}]*transform:\s*translateX\(-12px\);/);
  assert.match(styleSource, /\.titleBanner\s*\{[^}]*font-size:\s*28px;/);
});

test('ResearchInsights styles keep both insight visuals at the same desktop size', () => {
  assert.match(styleSource, /\.leftGrid\s*\{[^}]*grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\);/);
  assert.match(styleSource, /\.radarImage\s*\{[^}]*max-width:\s*360px;/);
  assert.match(styleSource, /\.needsImage\s*\{[^}]*max-width:\s*360px;/);
});
