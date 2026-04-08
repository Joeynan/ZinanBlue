import { Work, Category } from '../types/work';
import { worksData } from '../data/works/index';

const categories: Category[] = [
  { id: 'all', name: 'All', slug: 'all', count: worksData.length },
  ...Array.from(
    worksData.reduce((categoryMap, work) => {
      const count = categoryMap.get(work.categoryType) || 0;
      categoryMap.set(work.categoryType, count + 1);
      return categoryMap;
    }, new Map<string, number>()).entries()
  ).map(([categoryType, count]) => ({
    id: categoryType,
    name: categoryType,
    slug: categoryType,
    count,
  })),
];

const featuredWorks = worksData.filter((work) => work.featured);

export const getWorkById = (id: string): Work | undefined => {
  return worksData.find((work) => work.id === id);
};

export const getRelatedWorks = (currentId: string, limit: number = 3): Work[] => {
  const currentWork = getWorkById(currentId);
  if (!currentWork) return [];

  const sameCategory = worksData.filter(
    (work) => work.id !== currentId && work.categoryType === currentWork.categoryType
  );

  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  const others = worksData.filter(
    (work) => work.id !== currentId && work.categoryType !== currentWork.categoryType
  );

  return [...sameCategory, ...others].slice(0, limit);
};

export const useWorks = () => {
  return {
    works: worksData,
    categories,
    featuredWorks,
    loading: false,
  };
};
