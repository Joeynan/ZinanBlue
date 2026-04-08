import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const readSource = (relativePath) => {
  const url = new URL(`../${relativePath}`, import.meta.url);
  return existsSync(url) ? readFileSync(url, 'utf8') : '';
};

const workDetailSource = readSource('src/pages/WorkDetail/WorkDetail.tsx');
const workDetailStyles = readSource('src/pages/WorkDetail/WorkDetail.module.css');
const layoutStyles = readSource('src/components/layout/Layout/Layout.module.css');
const languageToggleStyles = readSource('src/components/common/LanguageToggle/LanguageToggle.module.css');

test('layout defines shared floating control variables and positions the language toggle with them', () => {
  assert.match(
    layoutStyles,
    /\.main\s*\{[^}]*--floating-control-top:\s*96px;[^}]*--floating-control-inline-offset:\s*var\(--grid-margin\);[^}]*--floating-control-min-height:\s*56px;[^}]*--floating-control-min-width:\s*128px;[^}]*--floating-control-padding-inline:\s*22px;[^}]*--floating-control-icon-size:\s*28px;[^}]*--floating-control-z-index:\s*100;/s
  );
  assert.match(
    layoutStyles,
    /\.langToggleSticky\s*\{[^}]*position:\s*fixed;[^}]*top:\s*var\(--floating-control-top\);[^}]*right:\s*var\(--floating-control-inline-offset\);[^}]*z-index:\s*var\(--floating-control-z-index\);/s
  );
  assert.match(
    layoutStyles,
    /@media\s*\(max-width:\s*768px\)\s*\{[^}]*\.main\s*\{[^}]*--floating-control-top:\s*80px;[^}]*--floating-control-min-height:\s*52px;[^}]*--floating-control-min-width:\s*112px;[^}]*--floating-control-padding-inline:\s*18px;[^}]*--floating-control-icon-size:\s*24px;/s
  );
  assert.match(
    layoutStyles,
    /@media\s*\(max-width:\s*600px\)\s*\{[^}]*\.main\s*\{[^}]*--floating-control-top:\s*74px;[^}]*--floating-control-min-height:\s*48px;[^}]*--floating-control-min-width:\s*96px;[^}]*--floating-control-padding-inline:\s*16px;[^}]*--floating-control-icon-size:\s*22px;/s
  );
});

test('work detail back control uses the same floating capsule contract instead of the old sticky container', () => {
  assert.match(
    workDetailSource,
    /<div className=\{styles\.backButtonContainer\}>\s*<Link to="\/works" className=\{styles\.backButton\}>/s
  );
  assert.doesNotMatch(workDetailStyles, /\.backButtonContainer\s*>\s*\.container/);
  assert.doesNotMatch(workDetailStyles, /\.backButtonContainer\s*\{[^}]*position:\s*sticky;/s);
  assert.match(
    workDetailStyles,
    /\.backButtonContainer\s*\{[^}]*position:\s*fixed;[^}]*top:\s*var\(--floating-control-top\);[^}]*left:\s*var\(--floating-control-inline-offset\);[^}]*z-index:\s*var\(--floating-control-z-index\);/s
  );
  assert.match(
    workDetailStyles,
    /\.backButton\s*\{[^}]*min-height:\s*var\(--floating-control-min-height\);[^}]*min-width:\s*var\(--floating-control-min-width\);[^}]*padding:\s*0\s+var\(--floating-control-padding-inline\);[^}]*font-size:\s*var\(--floating-control-font-size,\s*var\(--font-size-sm\)\);[^}]*letter-spacing:\s*var\(--floating-control-letter-spacing,\s*0\.05em\);/s
  );
  assert.match(
    workDetailStyles,
    /\.backArrow\s*\{[^}]*font-size:\s*var\(--floating-control-icon-size\);/s
  );
});

test('language toggle matches the shared floating capsule size contract', () => {
  assert.match(
    languageToggleStyles,
    /\.toggle\s*\{[^}]*min-height:\s*var\(--floating-control-min-height\);[^}]*min-width:\s*var\(--floating-control-min-width\);[^}]*padding:\s*0\s+var\(--floating-control-padding-inline\);/s
  );
  assert.match(
    languageToggleStyles,
    /\.label\s*\{[^}]*font-size:\s*var\(--floating-control-font-size,\s*var\(--font-size-sm,\s*14px\)\);[^}]*letter-spacing:\s*var\(--floating-control-letter-spacing,\s*0\.05em\);/s
  );
});
