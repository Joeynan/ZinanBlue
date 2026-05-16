import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const readSource = (relativePath) => {
  const url = new URL(`../${relativePath}`, import.meta.url);
  return existsSync(url) ? readFileSync(url, 'utf8') : '';
};

const homeSource = readSource('src/pages/Home/Home.tsx');
const handDrawnHeroSource = readSource('src/pages/Home/components/HandDrawnHero/HandDrawnHero.tsx');
const handDrawnTextSource = readSource('src/pages/Home/components/HandDrawnText/HandDrawnText.tsx');
const doodleCanvasSource = readSource('src/pages/Home/components/DoodleCanvas/DoodleCanvas.tsx');
const doodleDecorationsSource = readSource('src/pages/Home/components/DoodleDecorations/DoodleDecorations.tsx');
const handDrawnCtaSource = readSource('src/pages/Home/components/HandDrawnCta/HandDrawnCta.tsx');
const enSource = readSource('src/i18n/translations/en.ts');
const zhSource = readSource('src/i18n/translations/zh.ts');
const packageJson = JSON.parse(readSource('package.json'));

test('Home imports HandDrawnHero instead of LineWaves', () => {
  assert.match(homeSource, /from '\.\/components\/HandDrawnHero\/HandDrawnHero'/);
  assert.match(homeSource, /<HandDrawnHero/);
  assert.doesNotMatch(homeSource, /LineWaves/);
});

test('HandDrawnHero composes text, decorations, canvas, and HandDrawnCta', () => {
  assert.match(handDrawnHeroSource, /HandDrawnText/);
  assert.match(handDrawnHeroSource, /DoodleDecorations/);
  assert.match(handDrawnHeroSource, /DoodleCanvas/);
  assert.match(handDrawnHeroSource, /HandDrawnCta/);
});

test('HandDrawnText uses hardcoded English with clip-path animation', () => {
  assert.match(handDrawnTextSource, /clipPath/);
  assert.match(handDrawnTextSource, /Hello/);
  assert.match(handDrawnTextSource, /welcome to my website/);
  assert.match(handDrawnTextSource, /useReducedMotion/);
  assert.doesNotMatch(handDrawnTextSource, /useLanguage/);
});

test('DoodleCanvas supports interactive drawing and defaults to draw mode on', () => {
  assert.match(doodleCanvasSource, /canvas/);
  assert.match(doodleCanvasSource, /drawMode/);
  assert.match(doodleCanvasSource, /handlePointerDown/);
  assert.match(doodleCanvasSource, /rough/);
  assert.match(doodleCanvasSource, /useState\(true\)/);
});

test('DoodleDecorations renders SVG doodles with rough.js', () => {
  assert.match(doodleDecorationsSource, /rough/);
  assert.match(doodleDecorationsSource, /eye/);
  assert.match(doodleDecorationsSource, /smiley/);
  assert.match(doodleDecorationsSource, /star/);
  assert.match(doodleDecorationsSource, /heart/);
});

test('HandDrawnCta renders a sketch-style button with rough.js border', () => {
  assert.match(handDrawnCtaSource, /rough/);
  assert.match(handDrawnCtaSource, /Link/);
  assert.match(handDrawnCtaSource, /borderPath/);
});

test('roughjs is installed as a dependency', () => {
  assert.ok(packageJson.dependencies.roughjs, 'roughjs should be in dependencies');
});

test('OGL is no longer a dependency', () => {
  assert.equal(packageJson.dependencies.ogl, undefined, 'ogl should not be in dependencies');
});
