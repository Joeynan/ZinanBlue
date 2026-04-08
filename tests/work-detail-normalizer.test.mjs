import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const readSource = (relativePath) => {
  const url = new URL(`../${relativePath}`, import.meta.url);
  return existsSync(url) ? readFileSync(url, 'utf8') : '';
};

const normalizerSource = readSource('src/features/work-detail/utils/detailRenderItems.ts');
const registrySource = readSource('src/features/work-detail/utils/detailModuleRegistry.tsx');
const flowwalkSource = readSource('src/data/works/flowwalk.ts');
const runTouchSource = readSource('src/data/works/run-touch.ts');
const legacyProjectSource = readSource('src/data/works/flapping-wing-aircraft.ts');

test('detail normalizer exports build and legacy normalization helpers', () => {
  assert.match(normalizerSource, /export const normalizeLegacyDetailConfig =/);
  assert.match(normalizerSource, /export const buildDetailRenderItems =/);
  assert.match(normalizerSource, /detailTexts/);
  assert.match(normalizerSource, /imageDescriptions/);
  assert.match(normalizerSource, /detailText4Large/);
  assert.match(normalizerSource, /detailText15Large/);
  assert.match(normalizerSource, /beforeMedia/);
  assert.match(normalizerSource, /betweenTextAndMedia/);
  assert.match(normalizerSource, /afterMedia/);
});

test('detail module registry centralizes module rendering instead of page-level branching', () => {
  assert.match(registrySource, /export const detailModuleRegistry/);
  assert.match(registrySource, /designPositioningCards/);
  assert.match(registrySource, /researchInsights/);
  assert.match(registrySource, /detail12ImageSection/);
});

test('FlowWalk and RunTouch define the new detail protocol while legacy projects remain on fallback fields', () => {
  assert.match(flowwalkSource, /detailMedia:/);
  assert.match(flowwalkSource, /detailModules:/);
  assert.match(runTouchSource, /detailMedia:/);
  assert.match(runTouchSource, /detailModules:/);

  assert.match(legacyProjectSource, /detailText4Large/);
  assert.doesNotMatch(legacyProjectSource, /detailMedia:/);
});
