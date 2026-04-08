import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const componentSource = readFileSync(
  new URL('../src/pages/About/About.tsx', import.meta.url),
  'utf8',
);

const styleSource = readFileSync(
  new URL('../src/pages/About/About.module.css', import.meta.url),
  'utf8',
);

const zhSource = readFileSync(
  new URL('../src/i18n/translations/zh.ts', import.meta.url),
  'utf8',
);

const enSource = readFileSync(
  new URL('../src/i18n/translations/en.ts', import.meta.url),
  'utf8',
);

test('About intro uses an image-left content-right layout with dedicated image and intro regions', () => {
  assert.match(componentSource, /className=\{styles\.introSection\}/);
  assert.match(componentSource, /className=\{styles\.profileColumn\}/);
  assert.match(componentSource, /className=\{styles\.bioColumn\}/);
  assert.match(componentSource, /className=\{styles\.portraitImage\}/);
  assert.match(componentSource, /className=\{styles\.profileName\}/);
  assert.match(componentSource, /className=\{styles\.profileRole\}/);
  assert.doesNotMatch(componentSource, /worksData/);
  assert.doesNotMatch(componentSource, /className=\{styles\.skillsSection\}/);
  assert.doesNotMatch(componentSource, /className=\{styles\.statsGrid\}/);
  assert.doesNotMatch(componentSource, /className=\{styles\.philosophy\}/);
  assert.doesNotMatch(componentSource, /className=\{styles\.awards\}/);
});

test('About intro styles center the image panel on the left and self introduction on the right', () => {
  assert.match(styleSource, /\.container\s*\{[^}]*--about-profile-column-width:\s*clamp\(220px,\s*24vw,\s*280px\);/);
  assert.match(styleSource, /\.container\s*\{[^}]*--about-column-gap:\s*clamp\(36px,\s*6vw,\s*92px\);/);
  assert.match(styleSource, /\.container\s*\{[^}]*--about-bio-max-width:\s*900px;/);
  assert.match(styleSource, /\.introSection\s*\{[^}]*grid-template-columns:\s*var\(--about-profile-column-width\)\s*minmax\(0,\s*1fr\);/);
  assert.match(styleSource, /\.portraitCard\s*\{[^}]*width:\s*clamp\(160px,\s*18vw,\s*220px\);/);
  assert.match(styleSource, /\.portraitCard\s*\{[^}]*border-radius:\s*999px;/);
  assert.match(styleSource, /\.portraitImage\s*\{[^}]*object-fit:\s*cover;/);
  assert.match(styleSource, /\.bioColumn\s*\{[^}]*display:\s*flex;[^}]*flex-direction:\s*column;[^}]*max-width:\s*var\(--about-bio-max-width\);/);
  assert.match(styleSource, /\.bioDivider\s*\{[^}]*height:\s*1px;/);
});

test('About translations provide intro copy and image caption placeholders for later editing', () => {
  assert.match(zhSource, /'about\.profileName':/);
  assert.match(zhSource, /'about\.profileNameEn':/);
  assert.match(zhSource, /'about\.profileRole':/);
  assert.match(zhSource, /'about\.bioTitle':/);
  assert.match(zhSource, /'about\.bioParagraph1':/);
  assert.match(enSource, /'about\.profileName':/);
  assert.match(enSource, /'about\.profileNameEn':/);
  assert.match(enSource, /'about\.profileRole':/);
  assert.match(enSource, /'about\.bioTitle':/);
  assert.match(enSource, /'about\.bioParagraph1':/);
});

test('About awards use a full-width single-column list without category groups or header icon', () => {
  assert.match(componentSource, /const awardKeys = \[/);
  assert.doesNotMatch(componentSource, /const designAwardKeys = \[/);
  assert.doesNotMatch(componentSource, /const projectAwardKeys = \[/);
  assert.match(componentSource, /className=\{styles\.awardsSection\}/);
  assert.match(componentSource, /className=\{styles\.awardsTitle\}/);
  assert.match(componentSource, /className=\{styles\.awardList\}/);
  assert.match(componentSource, /className=\{styles\.awardItem\}/);
  assert.match(componentSource, /className=\{styles\.awardItemIcon\}/);
  assert.doesNotMatch(componentSource, /className=\{styles\.awardsIcon\}/);
  assert.doesNotMatch(componentSource, /className=\{styles\.awardsGrid\}/);
  assert.doesNotMatch(componentSource, /className=\{styles\.awardGroup\}/);
  assert.doesNotMatch(componentSource, /awardCategoryDesign/);
  assert.doesNotMatch(componentSource, /awardCategoryProject/);
});

test('About awards styles use a clean single-column row layout', () => {
  assert.match(styleSource, /\.awardsSection\s*\{[^}]*margin-left:\s*calc\(var\(--about-profile-column-width\)\s*\+\s*var\(--about-column-gap\)\);/);
  assert.match(styleSource, /\.awardsSection\s*\{[^}]*width:\s*min\(var\(--about-bio-max-width\),\s*calc\(100%\s*-\s*var\(--about-profile-column-width\)\s*-\s*var\(--about-column-gap\)\)\);/);
  assert.match(styleSource, /\.awardList\s*\{[^}]*display:\s*flex;[^}]*flex-direction:\s*column;/);
  assert.match(styleSource, /\.awardItem\s*\{[^}]*display:\s*flex;[^}]*justify-content:\s*flex-start;[^}]*align-items:\s*center;/);
  assert.match(styleSource, /\.awardItem\s*\{[^}]*gap:\s*12px;/);
  assert.match(styleSource, /\.awardItem\s*\{[^}]*padding:\s*10px 0;/);
  assert.doesNotMatch(styleSource, /\.awardItem\s*\{[^}]*border-bottom:/);
  assert.match(styleSource, /\.awardItemIcon\s*\{[^}]*width:\s*16px;/);
  assert.doesNotMatch(styleSource, /\.awardsGrid\s*\{/);
  assert.doesNotMatch(styleSource, /\.awardGroup\s*\{/);
  assert.doesNotMatch(styleSource, /\.awardGroupTitle\s*\{/);
  assert.doesNotMatch(styleSource, /\.awardDot\s*\{/);
  assert.match(styleSource, /@media \(max-width:\s*900px\)\s*\{[\s\S]*?\.awardsSection\s*\{[\s\S]*?margin-left:\s*0;[\s\S]*?width:\s*100%;/);
});
