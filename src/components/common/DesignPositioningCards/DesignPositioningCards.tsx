import { DesignPositioningCards as DesignPositioningCardsType } from '../../../types/work';
import { useLanguage } from '../../../i18n/LanguageContext';
import styles from './DesignPositioningCards.module.css';

interface DesignPositioningCardsProps {
  data: DesignPositioningCardsType;
}

// SVG 图标组件
const GlassesIcon = () => (
  <svg viewBox="0 0 100 100" className={styles.svgIcon} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* 眼镜框架 */}
    <rect x="8" y="35" width="32" height="28" rx="6" stroke="currentColor" strokeWidth="3" fill="none"/>
    <rect x="60" y="35" width="32" height="28" rx="6" stroke="currentColor" strokeWidth="3" fill="none"/>
    {/* 鼻梁 */}
    <path d="M40 48C42 45 46 45 48 48" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
    {/* 镜片反光 */}
    <path d="M14 42L28 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    <path d="M66 42L80 42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    {/* 信号波 */}
    <path d="M50 62C50 62 44 68 44 74" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
    <path d="M50 62C50 62 50 70 50 78" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M50 62C50 62 56 68 56 74" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
  </svg>
);

const StudentIcon = () => (
  <svg viewBox="0 0 100 100" className={styles.svgIcon} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* 用户头像 */}
    <circle cx="35" cy="35" r="16" stroke="currentColor" strokeWidth="3" fill="none"/>
    {/* 用户身体 */}
    <path d="M12 78C12 62 22 52 35 52C48 52 58 62 58 78" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round"/>
    {/* 数据列表 */}
    <rect x="65" y="25" width="25" height="5" rx="2" fill="currentColor" opacity="0.8"/>
    <rect x="65" y="36" width="20" height="5" rx="2" fill="currentColor" opacity="0.6"/>
    <rect x="65" y="47" width="25" height="5" rx="2" fill="currentColor" opacity="0.8"/>
    <rect x="65" y="58" width="18" height="5" rx="2" fill="currentColor" opacity="0.6"/>
    {/* 数据点 */}
    <circle cx="75" cy="72" r="4" fill="currentColor" opacity="0.9"/>
    <circle cx="85" cy="72" r="4" fill="currentColor" opacity="0.5"/>
  </svg>
);

const AIIcon = () => (
  <svg viewBox="0 0 100 100" className={styles.svgIcon} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* 大脑轮廓 */}
    <path
      d="M50 20C35 20 25 30 25 45C25 50 27 55 30 58C27 62 25 67 25 72C25 82 35 90 50 90C65 90 75 82 75 72C75 67 73 62 70 58C73 55 75 50 75 45C75 30 65 20 50 20Z"
      stroke="currentColor"
      strokeWidth="3"
      fill="none"
    />
    {/* 大脑纹理 */}
    <path d="M38 35C38 35 42 40 50 40C58 40 62 35 62 35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    <path d="M35 50C35 50 42 55 50 55C58 55 65 50 65 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    <path d="M38 65C38 65 42 70 50 70C58 70 62 65 62 65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    {/* 数据节点 */}
    <circle cx="20" cy="30" r="5" fill="currentColor" opacity="0.8"/>
    <circle cx="80" cy="30" r="5" fill="currentColor" opacity="0.8"/>
    <circle cx="15" cy="60" r="4" fill="currentColor" opacity="0.6"/>
    <circle cx="85" cy="60" r="4" fill="currentColor" opacity="0.6"/>
    {/* 连接线 */}
    <line x1="25" y1="32" x2="35" y2="38" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
    <line x1="75" y1="32" x2="65" y2="38" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
    <line x1="19" y1="56" x2="28" y2="58" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
    <line x1="81" y1="56" x2="72" y2="58" stroke="currentColor" strokeWidth="1.5" opacity="0.4"/>
  </svg>
);

// 图标映射
const iconMap: Record<string, React.FC> = {
  glasses: GlassesIcon,
  student: StudentIcon,
  ai: AIIcon,
};

export const DesignPositioningCards: React.FC<DesignPositioningCardsProps> = ({ data }) => {
  const { t } = useLanguage();
  const { title, items } = data;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{t(title)}</h2>

      <div className={styles.cardsGrid}>
        {items.map((item, index) => {
          const IconComponent = item.iconType ? iconMap[item.iconType] : null;

          return (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                {IconComponent ? (
                  <IconComponent />
                ) : item.image ? (
                  <img
                    src={item.image}
                    alt={item.imageAlt || `设计定位 ${item.number}`}
                    className={styles.icon}
                  />
                ) : null}
                <div className={styles.numberOverlay}>
                  <span className={styles.number}>{item.number}</span>
                </div>
              </div>
              <h3 className={styles.cardTitle}>{t(item.title)}</h3>
              <p className={styles.cardDescription}>{t(item.description)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
