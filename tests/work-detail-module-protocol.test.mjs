import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const readSource = (relativePath) => {
  const url = new URL(`../${relativePath}`, import.meta.url);
  return existsSync(url) ? readFileSync(url, 'utf8') : '';
};

const workTypesSource = readSource('src/types/work.ts');

test('Work detail protocol types define normalized detail media and module contracts', () => {
  assert.match(workTypesSource, /export interface DetailMediaConfig/);
  assert.match(workTypesSource, /position:\s*number;/);
  assert.match(workTypesSource, /variant\?: 'default' \| 'withText' \| 'singleImage';/);

  assert.match(workTypesSource, /export type DetailModulePlacement = 'beforeMedia' \| 'betweenTextAndMedia' \| 'afterMedia';/);
  assert.match(workTypesSource, /export type DetailModuleType =/);
  assert.match(workTypesSource, /'stepsSection'/);
  assert.match(workTypesSource, /'detail12ImageSection'/);
  assert.match(workTypesSource, /export type DetailModule =/);

  assert.match(workTypesSource, /detailMedia\?: DetailMediaConfig\[];/);
  assert.match(workTypesSource, /detailModules\?: DetailModule\[];/);
});
