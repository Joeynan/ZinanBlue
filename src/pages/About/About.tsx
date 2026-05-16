import { motion } from 'framer-motion';
import { useLanguage } from '../../i18n/LanguageContext';
import { renderBoldText } from '../../utils/richText';
import styles from './About.module.css';

const aboutPortraitSrc = '/images/about/toux.png';

const bioParagraphKeys = [
  'about.bioParagraph1',
  'about.bioParagraph2',
  'about.bioParagraph3',
];

const awardKeys = [
  // 2025
  'about.award.rokidGold',
  'about.award.spatialJoy',
  'about.award.redDot',
  'about.award.dia',
  'about.award.diaBronze',
  // 2024
  'about.award.epda',
  'about.award.idea',
  'about.award.dia2024',
  'about.award.goldenReed',
  'about.award.youthDesigner',
  // 2023
  'about.award.uxdaDev',
  'about.award.uxda',
] as const;

const exhibitionKeys = [
  'about.exhibition.1',
  'about.exhibition.2',
  'about.exhibition.3',
] as const;

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.about}>
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>{t('about.title')}</h1>
      </motion.header>

      <div className={styles.container}>
        <section className={styles.introSection}>
          <motion.aside
            className={styles.profileColumn}
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className={styles.portraitCard}>
              <img
                src={aboutPortraitSrc}
                alt={t('about.portraitCaption')}
                className={styles.portraitImage}
              />
            </div>

            <div className={styles.profileMeta}>
              <h2 className={styles.profileName}>{t('about.profileName')}</h2>
              <p className={styles.profileEducation}>{t('about.profileEducation')}</p>
              <p className={styles.profileRole}>{t('about.profileRole')}</p>
            </div>
          </motion.aside>

          <motion.div
            className={styles.bioColumn}
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
          >
            <h2 className={styles.bioTitle}>{t('about.bioTitle')}</h2>
            <div className={styles.bioDivider} />

            {bioParagraphKeys.map((key) => (
              <p key={key} className={styles.bioParagraph}>
                {renderBoldText(t(key))}
              </p>
            ))}
          </motion.div>
        </section>

        <motion.section
          className={styles.awardsSection}
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className={styles.awardsHeader}>
            <h2 className={styles.awardsTitle}>{t('about.awardsTitle')}</h2>
          </div>

          <ul className={styles.awardList}>
            {awardKeys.map((key) => (
              <li key={key} className={styles.awardItem}>
                <img
                  src="/icons/trophy.svg"
                  alt=""
                  aria-hidden="true"
                  className={styles.awardItemIcon}
                />
                <span className={styles.awardText}>{t(key)}</span>
              </li>
            ))}
          </ul>
        </motion.section>
      </div>
    </div>
  );
};
