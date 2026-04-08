import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const readSource = (relativePath) => {
  const url = new URL(`../${relativePath}`, import.meta.url);
  return existsSync(url) ? readFileSync(url, 'utf8') : '';
};

const homeSource = readSource('src/pages/Home/Home.tsx');
const homeStyleSource = readSource('src/pages/Home/Home.module.css');
const lineWavesSource = readSource('src/pages/Home/components/LineWaves.tsx');
const lineWavesStyleSource = readSource('src/pages/Home/components/LineWaves.module.css');
const zhSource = readSource('src/i18n/translations/zh.ts');
const enSource = readSource('src/i18n/translations/en.ts');
const packageJson = JSON.parse(readSource('package.json'));

test('Home hero uses LineWaves, mounts the outlined hero CTA, and removes decorative shapes', () => {
  assert.match(homeSource, /from '\.\/components\/LineWaves'/);
  assert.match(homeSource, /from '\.\/components\/HomeHeroCta'/);
  assert.match(homeSource, /<LineWaves/);
  assert.match(homeSource, /home\.heroEyebrow/);
  assert.match(homeSource, /<HomeHeroCta/);
  assert.doesNotMatch(homeSource, /HomeLiquidCta/);
  assert.doesNotMatch(homeSource, /heroShapes/);
});

test('Home hero styles define layered stage treatment for waves, glow, centered content, and actions', () => {
  assert.match(homeStyleSource, /\.heroOverlay/);
  assert.match(homeStyleSource, /\.heroWaves/);
  assert.doesNotMatch(homeStyleSource, /\.heroShapes/);
  assert.doesNotMatch(homeStyleSource, /\.heroShapeCircle/);
  assert.doesNotMatch(homeStyleSource, /\.heroShapeSquare/);
  assert.doesNotMatch(homeStyleSource, /\.heroShapeTriangle/);
  assert.match(homeStyleSource, /\.heroGlow/);
  assert.match(homeStyleSource, /\.heroEyebrow/);
  assert.match(homeStyleSource, /\.heroInner/);
  assert.match(homeStyleSource, /\.heroActions/);
  assert.doesNotMatch(homeStyleSource, /\.heroActions::before/);
});

test('LineWaves component exists with OGL-based cleanup and reduced-motion or failure fallback', () => {
  assert.equal(packageJson.dependencies.ogl, '^1.0.11');
  assert.match(lineWavesSource, /from 'ogl'/);
  assert.match(lineWavesSource, /requestAnimationFrame/);
  assert.match(lineWavesSource, /cancelAnimationFrame/);
  assert.match(lineWavesSource, /WEBGL_lose_context/);
  assert.match(lineWavesSource, /prefers-reduced-motion|matchMedia/);
  assert.match(lineWavesSource, /try \{/);
  assert.match(lineWavesSource, /catch/);
  assert.match(lineWavesStyleSource, /\.lineWavesContainer/);
});

test('Home hero translations include the new eyebrow copy key in both languages', () => {
  assert.match(zhSource, /'home\.heroEyebrow':/);
  assert.match(enSource, /'home\.heroEyebrow':/);
});
