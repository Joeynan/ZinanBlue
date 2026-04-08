import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const readSource = (relativePath) => {
  const url = new URL(`../${relativePath}`, import.meta.url);
  return existsSync(url) ? readFileSync(url, 'utf8') : '';
};

const richTextSource = readSource('src/utils/richText.tsx');
const workDetailSource = readSource('src/pages/WorkDetail/WorkDetail.tsx');
const collageGallerySource = readSource('src/components/common/CollageGallery/CollageGallery.tsx');
const detail12Source = readSource('src/components/common/Detail12ImageSection/Detail12ImageSection.tsx');
const useWorksSource = readSource('src/hooks/useWorks.ts');
const useThemeSource = readSource('src/hooks/useTheme.ts');

test('rich text parsing lives in a shared utility and detail modules consume it', () => {
  assert.match(richTextSource, /export const renderBoldText = \(text: string\)/);
  assert.match(richTextSource, /const parts = text\.split/);
  assert.match(richTextSource, /part\.startsWith\('\*\*'\) && part\.endsWith\('\*\*'\)/);

  assert.match(workDetailSource, /from ['"]..\/..\/utils\/richText['"]/);
  assert.match(collageGallerySource, /from ['"]..\/..\/..\/utils\/richText['"]/);
  assert.match(detail12Source, /from ['"]..\/..\/..\/utils\/richText['"]/);

  assert.doesNotMatch(workDetailSource, /const parseBoldText =/);
  assert.doesNotMatch(collageGallerySource, /const parseBoldText =/);
  assert.doesNotMatch(detail12Source, /const parseBoldText =/);
});

test('useWorks returns static derived data without async state wrappers', () => {
  assert.doesNotMatch(useWorksSource, /useState/);
  assert.doesNotMatch(useWorksSource, /useEffect/);
  assert.match(useWorksSource, /const featuredWorks = worksData\.filter\(\(work\) => work\.featured\);/);
  assert.match(useWorksSource, /loading:\s*false,/);
});

test('useTheme restores persisted theme, falls back to system preference, and persists updates', () => {
  assert.match(useThemeSource, /localStorage\.getItem\('theme'\)/);
  assert.match(useThemeSource, /window\.matchMedia\('\(prefers-color-scheme: dark\)'\)\.matches/);
  assert.match(useThemeSource, /localStorage\.setItem\('theme', isDark \? 'dark' : 'light'\)/);
  assert.match(useThemeSource, /document\.documentElement\.setAttribute\('data-theme', isDark \? 'dark' : 'light'\)/);
});
