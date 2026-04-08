import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const componentSource = readFileSync(
  new URL('../src/components/common/StepsSection/StepsSection.tsx', import.meta.url),
  'utf8',
);

const styleSource = readFileSync(
  new URL('../src/components/common/StepsSection/StepsSection.module.css', import.meta.url),
  'utf8',
);

test('steps section uses a framed surface and class-based stagger instead of inline offsets', () => {
  assert.match(componentSource, /className=\{styles\.stepsSectionSurface\}/);
  assert.match(componentSource, /className=\{`\$\{styles\.stepShell\} \$\{index % 2 === 1 \? styles\.stepShellShifted : ''\}`\}/);
  assert.doesNotMatch(componentSource, /style=\{\{/);
});

test('steps section defines a soft lavender editorial background and glass cards', () => {
  assert.match(styleSource, /\.stepsSectionSurface\s*\{[^}]*background:\s*linear-gradient\(135deg,\s*rgba\(244,\s*237,\s*255,\s*0\.92\),\s*rgba\(250,\s*247,\s*255,\s*0\.98\)\);/);
  assert.match(styleSource, /\.stepsSectionSurface::before\s*\{[^}]*radial-gradient/);
  assert.match(styleSource, /\.stepCard\s*\{[^}]*min-height:\s*304px;/);
  assert.match(styleSource, /\.stepCard\s*\{[^}]*border-radius:\s*24px;/);
  assert.match(styleSource, /\.iconContainer\s*\{[^}]*width:\s*48px;/);
  assert.match(styleSource, /\.iconContainer\s*\{[^}]*height:\s*48px;/);
  assert.match(styleSource, /\.icon\s*\{[^}]*width:\s*22px;/);
  assert.match(styleSource, /\.icon\s*\{[^}]*height:\s*22px;/);
});

test('steps section keeps only steps 2 and 4 lowered on desktop and resets on smaller screens', () => {
  assert.match(styleSource, /\.stepShellShifted\s*\{[^}]*padding-top:\s*72px;/);
  assert.match(styleSource, /@media \(max-width:\s*1200px\)\s*\{[\s\S]*?\.stepShellShifted\s*\{[^}]*padding-top:\s*0;/);
});
