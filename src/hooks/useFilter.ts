import { useState, useMemo } from 'react';
import { Work } from '../types/work';

export const useFilter = (works: Work[]) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') {
      return works;
    }
    return works.filter((work) => {
      const categorySlug = work.category.toLowerCase().replace(/\s+/g, '-');
      return categorySlug === selectedCategory || work.category === selectedCategory;
    });
  }, [works, selectedCategory]);

  return {
    selectedCategory,
    setSelectedCategory,
    filteredItems,
  };
};
