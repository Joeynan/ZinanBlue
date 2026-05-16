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

test('featured gallery keeps the first work as a featured card', () => {
  assert.match(workGallerySource, /layout === 'featured' && index === 0 \? 'featured' : 'default'/);
  assert.match(workGalleryStyles, /\.featured > \*:first-child\s*\{[^}]*grid-row:\s*span 2;/s);
});

test('featured card fills its two-row height instead of leaving empty space', () => {
  assert.match(workCardStyles, /\.featured \.link\s*\{[^}]*display:\s*flex;[^}]*flex-direction:\s*column;/s);
  assert.match(workCardStyles, /\.featured \.mediaContainer\s*\{[^}]*flex:\s*1;[^}]*min-height:\s*0;/s);
});
