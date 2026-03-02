import { useState, useEffect } from 'react';
import { Work, Category } from '../types/work';
import { worksData } from '../data/works';

// 根据 ID 获取单个作品
export const getWorkById = (id: string): Work | undefined => {
  return worksData.find((work) => work.id === id);
};

// 获取相关作品（同分类或随机）
export const getRelatedWorks = (currentId: string, limit: number = 3): Work[] => {
  const currentWork = getWorkById(currentId);
  if (!currentWork) return [];

  // 同分类的作品
  const sameCategory = worksData.filter(
    (work) => work.id !== currentId && work.category === currentWork.category
  );

  // 如果同分类不够，补充其他作品
  if (sameCategory.length >= limit) {
    return sameCategory.slice(0, limit);
  }

  const others = worksData.filter(
    (work) => work.id !== currentId && work.category !== currentWork.category
  );

  return [...sameCategory, ...others].slice(0, limit);
};

export const useWorks = () => {
  const [works, setWorks] = useState<Work[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      setWorks(worksData);

      const categoryMap = new Map<string, number>();
      worksData.forEach((work) => {
        const count = categoryMap.get(work.category) || 0;
        categoryMap.set(work.category, count + 1);
      });

      const categoryList: Category[] = [
        { id: 'all', name: 'All', slug: 'all', count: worksData.length },
        ...Array.from(categoryMap.entries()).map(([name, count], index) => ({
          id: `cat-${index}`,
          name,
          slug: name.toLowerCase().replace(/\s+/g, '-'),
          count,
        })),
      ];

      setCategories(categoryList);
      setLoading(false);
    };

    loadData();
  }, []);

  const featuredWorks = works.filter((work) => work.featured);

  return {
    works,
    categories,
    featuredWorks,
    loading,
  };
};
