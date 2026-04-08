import { PainPointScenarios as PainPointScenariosType } from '../../../types/work';
import { useLanguage } from '../../../i18n/LanguageContext';
import styles from './PainPointScenarios.module.css';

interface PainPointScenariosProps {
  data: PainPointScenariosType;
}

export const PainPointScenarios: React.FC<PainPointScenariosProps> = ({ data }) => {
  const { t } = useLanguage();
  const { items } = data;

  return (
    <div className={styles.scenariosContainer}>
      {items.map((item, index) => (
        <div key={index} className={styles.scenarioRow}>
          {/* 左侧：绿色标签 + 图片并排 */}
          <div className={styles.leftSection}>
            <div className={styles.labelBar}>
              <span className={styles.sceneNumber}>{item.number}</span>
            </div>
            <div className={styles.imageWrapper}>
              <img
                src={item.image}
                alt={item.imageAlt || `场景 ${item.number}`}
                className={styles.scenarioImage}
              />
            </div>
          </div>

          {/* 右侧：标题 + 描述 */}
          <div className={styles.rightSection}>
            <h3 className={styles.scenarioTitle}>{t(item.title)}</h3>
            <p className={styles.scenarioDescription}>{t(item.description)}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
