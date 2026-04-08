import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const readSource = (relativePath) => {
  const url = new URL(`../${relativePath}`, import.meta.url);
  return existsSync(url) ? readFileSync(url, 'utf8') : '';
};

const viteConfigSource = readSource('vite.config.ts');
const appSource = readSource('src/App.tsx');
const vercelConfigSource = readSource('vercel.json');
const gitignoreSource = readSource('.gitignore');

test('App keeps BrowserRouter so deployment needs SPA rewrites', () => {
  assert.match(appSource, /<BrowserRouter>/);
});

test('Vite config no longer contains stale liquid-glass-react optimizeDeps exclusion', () => {
  assert.doesNotMatch(viteConfigSource, /liquid-glass-react/);
  assert.doesNotMatch(viteConfigSource, /optimizeDeps/);
});

test('Vercel config exists and rewrites non-static routes to index.html', () => {
  assert.ok(vercelConfigSource, 'Expected vercel.json to exist');

  const vercelConfig = JSON.parse(vercelConfigSource);
  assert.deepEqual(vercelConfig, {
    rewrites: [
      {
        source: '/((?!assets/|images/|videos/|icons/|fonts/|favicon.ico|.*\\..*).*)',
        destination: '/index.html',
      },
    ],
  });
});

test('Git ignore exists with build, dependency, and local-system exclusions needed for first deployment', () => {
  assert.ok(gitignoreSource, 'Expected .gitignore to exist');
  assert.match(gitignoreSource, /^node_modules\/$/m);
  assert.match(gitignoreSource, /^dist\/$/m);
  assert.match(gitignoreSource, /^\.DS_Store$/m);
  assert.match(gitignoreSource, /^\*\.tsbuildinfo$/m);
  assert.match(gitignoreSource, /^\.vite\/$/m);
  assert.match(gitignoreSource, /^\.vercel\/$/m);
});
