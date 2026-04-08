import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';

const readSource = (relativePath) => {
  const url = new URL(`../${relativePath}`, import.meta.url);
  return existsSync(url) ? readFileSync(url, 'utf8') : '';
};

const workDetailSource = readSource('src/pages/WorkDetail/WorkDetail.tsx');
const overviewSectionSource = readSource('src/features/work-detail/components/OverviewSection.tsx');
const projectVideoSectionSource = readSource('src/features/work-detail/components/ProjectVideoSection.tsx');
const contentSectionsSource = readSource('src/features/work-detail/components/ContentSections.tsx');
const detailMediaBlockSource = readSource('src/features/work-detail/components/DetailMediaBlock.tsx');
const videoGroupSource = readSource('src/features/work-detail/components/VideoGroup.tsx');
const verticalVideoSectionSource = readSource('src/features/work-detail/components/VerticalVideoSection.tsx');
const detailRenderItemsSource = readSource('src/features/work-detail/utils/detailRenderItems.ts');
const detailModuleRegistrySource = readSource('src/features/work-detail/utils/detailModuleRegistry.tsx');

test('WorkDetail imports extracted presentation components and detail protocol helpers', () => {
  assert.match(workDetailSource, /from ['"]..\/..\/features\/work-detail\/components\/OverviewSection['"]/);
  assert.match(workDetailSource, /from ['"]..\/..\/features\/work-detail\/components\/ProjectVideoSection['"]/);
  assert.match(workDetailSource, /from ['"]..\/..\/features\/work-detail\/components\/ContentSections['"]/);
  assert.match(workDetailSource, /from ['"]..\/..\/features\/work-detail\/components\/DetailsIntro['"]/);
  assert.match(workDetailSource, /from ['"]..\/..\/features\/work-detail\/components\/DetailMediaBlock['"]/);
  assert.match(workDetailSource, /from ['"]..\/..\/features\/work-detail\/utils\/detailRenderItems['"]/);
  assert.match(workDetailSource, /from ['"]..\/..\/features\/work-detail\/utils\/detailModuleRegistry['"]/);

  assert.doesNotMatch(workDetailSource, /const VideoGroup:/);
  assert.doesNotMatch(workDetailSource, /const VerticalVideoSection:/);
  assert.doesNotMatch(workDetailSource, /imageIndex ===/);
  assert.doesNotMatch(workDetailSource, /beforeImageElements/);
  assert.doesNotMatch(workDetailSource, /videoGroupElements/);
  assert.match(workDetailSource, /buildDetailRenderItems\(work\)/);
  assert.match(workDetailSource, /detailModuleRegistry/);
});

test('Step 2 presentation components exist and keep shared rich text rendering', () => {
  assert.match(overviewSectionSource, /renderBoldText/);
  assert.match(detailMediaBlockSource, /renderBoldText/);

  assert.match(projectVideoSectionSource, /styles\.videoContainer/);
  assert.match(contentSectionsSource, /styles\.sectionContent/);
  assert.match(videoGroupSource, /IntersectionObserver/);
  assert.match(verticalVideoSectionSource, /IntersectionObserver/);
  assert.match(detailRenderItemsSource, /images\[position\]/);
  assert.match(detailModuleRegistrySource, /styles\.detailItem/);
});
