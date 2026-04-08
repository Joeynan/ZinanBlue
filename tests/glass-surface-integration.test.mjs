import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const readSource = (relativePath) => {
  const url = new URL(`../${relativePath}`, import.meta.url);
  return existsSync(url) ? readFileSync(url, 'utf8') : '';
};

const glassSurfaceSource = readSource('src/components/common/GlassSurface/GlassSurface.tsx');
const glassSurfaceStyleSource = readSource('src/components/common/GlassSurface/GlassSurface.module.css');
const homeHeroCtaSource = readSource('src/pages/Home/components/HomeHeroCta.tsx');
const languageToggleSource = readSource('src/components/common/LanguageToggle/LanguageToggle.tsx');
const buttonSource = readSource('src/components/common/Button/Button.tsx');
const workDetailSource = readSource('src/pages/WorkDetail/WorkDetail.tsx');
const headerSource = readSource('src/components/layout/Header/Header.tsx');
const packageJson = JSON.parse(readSource('package.json'));

test('shared GlassSurface component keeps the stable local wrapper interface without third-party liquid runtime', () => {
  assert.match(glassSurfaceSource, /export const GlassSurface: React\.FC<GlassSurfaceProps>/);
  assert.match(glassSurfaceSource, /variant\?: 'button' \| 'capsule' \| 'toggle'/);
  assert.match(glassSurfaceSource, /interactive\?: boolean/);
  assert.doesNotMatch(glassSurfaceSource, /from 'liquid-glass-react'/);
  assert.equal(packageJson.dependencies['liquid-glass-react'], undefined);
  assert.doesNotMatch(homeHeroCtaSource, /liquid-glass-react/);
});

test('GlassSurface is still used by floating controls, header capsules, and glass buttons', () => {
  assert.match(languageToggleSource, /GlassSurface/);
  assert.match(buttonSource, /GlassSurface/);
  assert.match(workDetailSource, /GlassSurface/);
  assert.match(headerSource, /GlassSurface/);

  assert.match(headerSource, /variant="capsule"/);
  assert.match(headerSource, /variant="toggle"/);
  assert.doesNotMatch(headerSource, /☀️|🌙/);
});

test('GlassSurface hotfix removes unstable liquid mount structure and keeps stable frosted glass styles', () => {
  assert.doesNotMatch(glassSurfaceSource, /LiquidGlass/);
  assert.doesNotMatch(glassSurfaceSource, /measureSurface|liquidMount|liquidSurface/);
  assert.match(glassSurfaceStyleSource, /\.glassSurface\s*\{[^}]*border:\s*1px solid var\(--glass-surface-border\);/);
  assert.match(glassSurfaceStyleSource, /\.fallbackSurface/);
  assert.match(glassSurfaceStyleSource, /\.content/);
  assert.match(glassSurfaceStyleSource, /\.interactive:hover\s*\{[^}]*transform:\s*none;/);
  assert.doesNotMatch(glassSurfaceStyleSource, /\.liquidFrame|\.measureSurface|\.liquidMount|\.liquidSurface/);
  assert.doesNotMatch(glassSurfaceStyleSource, /:global\(\.glass\)|:global\(\.glass__warp\)/);
  assert.doesNotMatch(glassSurfaceStyleSource, /--glass-surface-border:\s*rgba\(255,\s*255,\s*255,\s*0\.[1-9]\d*\);/);
});
