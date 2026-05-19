import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const readSource = (relativePath) => {
  const url = new URL(`../${relativePath}`, import.meta.url);
  return existsSync(url) ? readFileSync(url, 'utf8') : '';
};

const appSource = readSource('src/App.tsx');
const packageJson = JSON.parse(readSource('package.json'));

test('Vercel Analytics package is installed', () => {
  assert.ok(packageJson.dependencies['@vercel/analytics']);
});

test('App mounts Vercel Analytics for the Vite React SPA', () => {
  assert.match(appSource, /import \{ Analytics \} from '@vercel\/analytics\/react';/);
  assert.match(appSource, /<Analytics \/>/);
  assert.doesNotMatch(appSource, /@vercel\/analytics\/next/);
});
