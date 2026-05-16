import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const readSource = (relativePath) => {
  const url = new URL(`../${relativePath}`, import.meta.url);
  return existsSync(url) ? readFileSync(url, 'utf8') : '';
};

const workGallerySource = readSource('src/components/portfolio/WorkGallery/WorkGallery.tsx');
const workGalleryStyles = readSource('src/components/portfolio/WorkGallery/WorkGallery.module.css');
const workCardStyles = readSource('src/components/portfolio/WorkCard/WorkCard.module.css');
const homeSource = readSource('src/pages/Home/Home.tsx');
const featuredWorksCtaSource = readSource('src/pages/Home/components/FeaturedWorksCta/FeaturedWorksCta.tsx');
const featuredWorksCtaStyles = readSource('src/pages/Home/components/FeaturedWorksCta/FeaturedWorksCta.module.css');
const zhSource = readSource('src/i18n/translations/zh.ts');
const enSource = readSource('src/i18n/translations/en.ts');

test('featured gallery keeps the first work as a featured card', () => {
  assert.match(workGallerySource, /layout === 'featured' && index === 0 \? 'featured' : 'default'/);
  assert.match(workGalleryStyles, /\.featured > \*:first-child\s*\{[^}]*grid-row:\s*span 2;/s);
});

test('featured card fills its two-row height instead of leaving empty space', () => {
  assert.match(workCardStyles, /\.featured \.link\s*\{[^}]*display:\s*flex;[^}]*flex-direction:\s*column;/s);
  assert.match(workCardStyles, /\.featured \.mediaContainer\s*\{[^}]*flex:\s*1;[^}]*min-height:\s*0;/s);
});

test('featured gallery supports a trailing slot for the more-works CTA', () => {
  assert.match(workGallerySource, /trailingItem\?: React\.ReactNode;/);
  assert.match(workGallerySource, /\{trailingItem\}/);
  assert.match(homeSource, /<FeaturedWorksCta/);
  assert.match(homeSource, /trailingItem=\{<FeaturedWorksCta/);
});

test('featured more-works CTA links to the works page and matches the small-card slot', () => {
  assert.match(featuredWorksCtaSource, /to="\/works"/);
  assert.match(featuredWorksCtaSource, /home\.viewMoreWorks/);
  assert.match(featuredWorksCtaStyles, /\.cta\s*\{[^}]*width:\s*clamp\([^}]*aspect-ratio:\s*1;/s);
  assert.match(featuredWorksCtaStyles, /\.slot\s*\{[^}]*display:\s*flex;[^}]*align-items:\s*center;[^}]*justify-content:\s*center;/s);
  assert.match(zhSource, /'home\.viewMoreWorks': '查看更多作品'/);
  assert.match(enSource, /'home\.viewMoreWorks': 'View More Works'/);
});
