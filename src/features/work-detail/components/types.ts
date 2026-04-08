import { LocalizedString } from '../../../i18n/types';

export type TranslateFn = (keyOrLocalized: string | LocalizedString) => string;
