import { Category } from '../../../types/work';
import styles from './CategoryFilter.module.css';

interface CategoryFilterProps {
  categories: Category[];
  selected: string;
  onSelect: (categoryId: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selected,
  onSelect,
}) => {
  return (
    <div className={styles.filter}>
      {categories.map((category) => (
        <button
          key={category.id}
          className={`${styles.filterButton} ${selected === category.id ? styles.active : ''}`}
          onClick={() => onSelect(category.id)}
        >
          {category.name}
          <span className={styles.count}>{category.count}</span>
        </button>
      ))}
    </div>
  );
};
