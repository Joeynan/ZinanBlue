import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const componentSource = readFileSync(
  new URL('../src/components/common/CollageGallery/CollageGallery.tsx', import.meta.url),
  'utf8',
);

const styleSource = readFileSync(
  new URL('../src/components/common/CollageGallery/CollageGallery.module.css', import.meta.url),
  'utf8',
);

test('interactive collage keeps the floating card mounted and toggles visibility with a class', () => {
  assert.match(
    componentSource,
    /className=\{`\$\{styles\.interactiveFloatingCard\} \$\{hoveredIndex !== null \? styles\.visible : ''\}`\}/,
  );
});

test('interactive collage styles animate floating card entrance with opacity and scale', () => {
  assert.match(styleSource, /\.interactiveFloatingCard\s*\{[^}]*transform:\s*translateY\(14px\)\s*scale\(0\.96\);/);
  assert.match(styleSource, /\.interactiveFloatingCard\s*\{[^}]*filter:\s*blur\(10px\);/);
  assert.match(styleSource, /\.interactiveFloatingCard\.visible\s*\{[^}]*transform:\s*translateY\(0\)\s*scale\(1\);/);
  assert.match(styleSource, /\.interactiveFloatingCard\.visible\s*\{[^}]*filter:\s*blur\(0\);/);
});
