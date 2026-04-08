import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const readSource = (relativePath) => {
  const url = new URL(`../${relativePath}`, import.meta.url);
  return existsSync(url) ? readFileSync(url, 'utf8') : '';
};

const headerSource = readSource('src/components/layout/Header/Header.tsx');
const headerStyleSource = readSource('src/components/layout/Header/Header.module.css');
const hookSource = readSource('src/components/layout/Header/useProximityNav.ts');

test('Header desktop nav uses a dedicated proximity hook with desktop and reduced-motion guards', () => {
  assert.match(hookSource, /export const useProximityNav/);
  assert.match(hookSource, /useReducedMotion/);
  assert.match(hookSource, /window\.matchMedia\('\(min-width:\s*769px\)'\)/);
  assert.match(hookSource, /handleNavPointerMove/);
  assert.match(hookSource, /handleNavPointerLeave/);
});

test('Header wires pointer tracking without removing active route indication', () => {
  assert.match(headerSource, /useProximityNav/);
  assert.match(headerSource, /onPointerMove=\{handleNavPointerMove\}/);
  assert.match(headerSource, /onPointerLeave=\{handleNavPointerLeave\}/);
  assert.match(headerSource, /activeIndicator/);
  assert.doesNotMatch(headerSource, /navGlowStyle/);
});

test('Header styles keep reduced-motion fallback without geometric halo backgrounds', () => {
  assert.doesNotMatch(headerStyleSource, /\.desktopNav::before/);
  assert.doesNotMatch(headerStyleSource, /\.navLink::before/);
  assert.match(headerStyleSource, /@media\s*\(prefers-reduced-motion:\s*reduce\)/);
});
