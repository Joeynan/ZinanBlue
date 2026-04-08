export type Locale = 'zh' | 'en';

export interface LocalizedString {
  zh: string;
  en: string;
}

// 类型守卫：判断一个值是否为 LocalizedString
export function isLocalizedString(value: unknown): value is LocalizedString {
  return (
    typeof value === 'object' &&
    value !== null &&
    'zh' in value &&
    'en' in value &&
    typeof (value as LocalizedString).zh === 'string' &&
    typeof (value as LocalizedString).en === 'string'
  );
}
