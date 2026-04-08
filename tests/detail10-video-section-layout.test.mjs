import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const componentSource = readFileSync(
  new URL('../src/components/common/Detail10VideoSection/Detail10VideoSection.tsx', import.meta.url),
  'utf8',
);

const styleSource = readFileSync(
  new URL('../src/components/common/Detail10VideoSection/Detail10VideoSection.module.css', import.meta.url),
  'utf8',
);

test('detail10 video section prioritizes the main image width and caps gif column width', () => {
  assert.match(componentSource, /className=\{styles\.imageFrame\}/);
  assert.match(componentSource, /className=\{styles\.videoFrame\}/);
  assert.match(styleSource, /\.container\s*\{[^}]*display:\s*flex;/);
  assert.match(styleSource, /\.container\s*\{[^}]*flex-direction:\s*column;/);
});

test('detail10 video section stacks earlier on medium screens to avoid overlap', () => {
  assert.match(styleSource, /\.videoColumn\s*\{[^}]*display:\s*grid;/);
  assert.match(styleSource, /\.videoColumn\s*\{[^}]*grid-template-columns:\s*repeat\(2,\s*minmax\(0,\s*1fr\)\);/);
});

test('detail10 main image preserves the full composition instead of cropping', () => {
  assert.match(styleSource, /\.container\s*\{[^}]*align-items:\s*stretch;/);
  assert.match(styleSource, /\.image\s*\{[^}]*height:\s*auto;/);
  assert.match(styleSource, /\.image\s*\{[^}]*object-fit:\s*contain;/);
});

test('detail10 gif cards are visually subordinate to the main image', () => {
  assert.match(styleSource, /\.videoColumn\s*\{[^}]*width:\s*100%;/);
  assert.match(styleSource, /\.videoFrame\s*\{[^}]*aspect-ratio:\s*16\s*\/\s*10;/);
  assert.match(styleSource, /\.videoFrame\s*\{[^}]*max-height:\s*320px;/);
  assert.match(styleSource, /\.videoFrame\s*\{[^}]*width:\s*min\(100%,\s*420px\);/);
  assert.match(styleSource, /\.videoFrame:first-child\s*\{[^}]*justify-self:\s*start;/);
  assert.match(styleSource, /\.videoFrame:last-child\s*\{[^}]*justify-self:\s*end;/);
});
