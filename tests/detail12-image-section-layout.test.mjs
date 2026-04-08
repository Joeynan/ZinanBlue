import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const componentSource = readFileSync(
  new URL('../src/components/common/Detail12ImageSection/Detail12ImageSection.tsx', import.meta.url),
  'utf8',
);

const styleSource = readFileSync(
  new URL('../src/components/common/Detail12ImageSection/Detail12ImageSection.module.css', import.meta.url),
  'utf8',
);

const workDetailSource = readFileSync(
  new URL('../src/pages/WorkDetail/WorkDetail.tsx', import.meta.url),
  'utf8',
);

test('detail12 renders each image inside its own framed card', () => {
  assert.match(componentSource, /className=\{styles\.imageButton\}/);
  assert.match(componentSource, /className=\{styles\.imageWrapper\}/);
  assert.match(styleSource, /\.imageButton\s*\{[^}]*background:\s*transparent;/);
  assert.match(styleSource, /\.imageButton\s*\{[^}]*border:\s*0;/);
  assert.match(styleSource, /\.imageWrapper\s*\{[^}]*padding:\s*clamp\(14px,\s*1\.8vw,\s*20px\);/);
  assert.match(styleSource, /\.imageWrapper\s*\{[^}]*background:\s*#fff;/);
  assert.match(styleSource, /\.imageWrapper\s*\{[^}]*box-shadow:\s*0 14px 30px rgba\(0,\s*0,\s*0,\s*0\.08\);/);
  assert.match(styleSource, /\.image\s*\{[^}]*background:\s*#fff;/);
});

test('detail12 no longer uses a single outer panel around both images', () => {
  assert.doesNotMatch(styleSource, /\.container\s*\{[^}]*background:/);
  assert.doesNotMatch(styleSource, /\.container\s*\{[^}]*padding:/);
  assert.doesNotMatch(styleSource, /\.container\s*\{[^}]*box-shadow:/);
});

test('detail12 description aligns with the page text style from the parent layout', () => {
  assert.match(componentSource, /textSmallClassName \|\| styles\.description/);
  assert.match(workDetailSource, /<Detail12ImageSection data=\{work\.detail12ImageSection\} textSmallClassName=\{styles\.textSmall\} \/>/);
  assert.match(styleSource, /\.description\s*\{[^}]*text-align:\s*left;/);
  assert.match(styleSource, /\.description\s*\{[^}]*width:\s*100%;/);
});

test('detail12 hover zoom is intentionally stronger and click opens a full-image preview', () => {
  assert.match(componentSource, /useState/);
  assert.match(componentSource, /ImageLightbox/);
  assert.match(componentSource, /setLightboxIndex\(0\)/);
  assert.match(componentSource, /setLightboxIndex\(1\)/);
  assert.match(componentSource, /lightboxIndex !== null/);
  assert.match(styleSource, /\.imageWrapper\s*\{[^}]*transition:\s*transform 0\.24s ease;/);
  assert.match(styleSource, /\.imageButton:hover\s+\.imageWrapper\s*\{[^}]*transform:\s*scale\(1\.4\);/);
  assert.doesNotMatch(styleSource, /\.imageWrapper:hover\s*\{/);
});
