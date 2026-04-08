import React from 'react';
import { ResearchInsights as ResearchInsightsType } from '../../../types/work';
import { useLanguage } from '../../../i18n/LanguageContext';
import styles from './ResearchInsights.module.css';

interface ResearchInsightsProps {
  data: ResearchInsightsType;
}

export const ResearchInsights: React.FC<ResearchInsightsProps> = ({ data }) => {
  const { t } = useLanguage();
  return (
    <div className={styles.container}>
      {/* 左侧区域 - 研究洞察分析区 */}
      <div className={styles.leftGrid}>
        {/* 雷达图模块 */}
        <article className={`${styles.insightCard} ${styles.radarCard}`}>
          <div className={styles.visualFrame}>
            <img
              src={data.leftSection.radarChart.image}
              alt={t(data.leftSection.radarChart.title)}
              className={styles.radarImage}
            />
          </div>
          <p className={styles.chartCaption}>
            <span className={styles.captionDot} aria-hidden="true"></span>
            <span>{t(data.leftSection.radarChart.title)}</span>
          </p>
        </article>

        {/* 需求分析模块 */}
        <article className={`${styles.insightCard} ${styles.needsCard}`}>
          <div className={styles.visualFrame}>
            <img
              src={data.leftSection.needsAnalysis.image}
              alt={t(data.leftSection.needsAnalysis.title)}
              className={styles.needsImage}
            />
          </div>
          <p className={styles.chartCaption}>
            <span className={styles.captionDot} aria-hidden="true"></span>
            <span>{t(data.leftSection.needsAnalysis.title)}</span>
          </p>
        </article>
      </div>

      {/* 中间过渡带 - 视觉引导区 */}
      <div className={styles.middleBridge}>
        <div className={styles.bridgeGuide}>
          {/* 箭头引导 */}
          <div className={styles.arrowWrapper} aria-hidden="true">
            <div className={styles.arrowLine}></div>
          </div>

          {/* 关键词列 */}
          <div className={styles.keywordsList}>
            {data.middleSection.keywords.map((keyword, index) => (
              <div key={index} className={styles.keywordRow}>
                <span className={styles.keywordDot}></span>
                <span className={styles.keywordLabel}>{t(keyword)}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 竖排标题 */}
        <div className={styles.verticalLabel}>{t('common.designGoal')}</div>
      </div>

      {/* 右侧区域 - 设计目标总结区 */}
      <div className={styles.rightSummary}>
        <div className={styles.summaryHeader}>
          {/* 黄色标题条 */}
          <div className={styles.titleBanner}>{t(data.rightSection.title)}</div>
        </div>

        {/* 描述文字区 */}
        <div className={styles.descriptionArea}>
          {data.rightSection.paragraphs.map((para, index) => (
            <p key={index} className={styles.descriptionPara}>{t(para)}</p>
          ))}
        </div>
      </div>
    </div>
  );
};
