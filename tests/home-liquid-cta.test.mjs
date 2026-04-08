import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const readSource = (relativePath) => {
  const url = new URL(`../${relativePath}`, import.meta.url);
  return existsSync(url) ? readFileSync(url, 'utf8') : '';
};

const homeSource = readSource('src/pages/Home/Home.tsx');
const homeHeroCtaSource = readSource('src/pages/Home/components/HomeHeroCta.tsx');
const homeHeroCtaStyleSource = readSource('src/pages/Home/components/HomeHeroCta.module.css');
const glassSurfaceSource = readSource('src/components/common/GlassSurface/GlassSurface.tsx');
const packageJson = JSON.parse(readSource('package.json'));

test('Home page mounts the hero CTA for the works action', () => {
  assert.match(homeSource, /HomeHeroCta/);
  assert.match(homeSource, /to="\/works"/);
  assert.doesNotMatch(homeSource, /variant="glass"/);
  assert.doesNotMatch(homeSource, /HomeLiquidCta/);
});

test('HomeHeroCta removes liquid-glass dependency and keeps magnetic pointer handling', () => {
  assert.doesNotMatch(homeHeroCtaSource, /liquid-glass-react/);
  assert.match(homeHeroCtaSource, /onPointerMove/);
  assert.match(homeHeroCtaSource, /onPointerEnter/);
  assert.match(homeHeroCtaSource, /onPointerLeave/);
  assert.match(homeHeroCtaSource, /prefers-reduced-motion/);
  assert.match(homeHeroCtaSource, /min-width: 769px/);
  assert.match(homeHeroCtaSource, /viewBox="0 0 18 18"/);
  assert.doesNotMatch(glassSurfaceSource, /liquid-glass-react/);
  assert.equal(packageJson.dependencies['liquid-glass-react'], undefined);
});

test('HomeHeroCta styles implement outlined magnetic button with RGB edge glow and no bottom border line', () => {
  assert.match(homeHeroCtaStyleSource, /\.ctaLink/);
  assert.match(homeHeroCtaStyleSource, /border:\s*1\.5px solid/);
  assert.match(homeHeroCtaStyleSource, /\.ctaEdgeGlow/);
  assert.match(homeHeroCtaStyleSource, /conic-gradient/);
  assert.match(homeHeroCtaStyleSource, /mask-composite:\s*exclude/);
  assert.match(homeHeroCtaStyleSource, /translate3d\(/);
  assert.match(homeHeroCtaStyleSource, /scale\(calc\(1 \+ 0\.04 \* var\(--hover\)\)\)/);
  assert.match(homeHeroCtaStyleSource, /@media \(max-width: 768px\)/);
  assert.match(homeHeroCtaStyleSource, /@media \(prefers-reduced-motion: reduce\)/);
  assert.doesNotMatch(homeHeroCtaStyleSource, /border-bottom/);
  assert.doesNotMatch(homeHeroCtaStyleSource, /liquid/);
});
