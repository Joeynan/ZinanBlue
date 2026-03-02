import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getWorkById } from '../../hooks/useWorks';
import { GeometricShape } from '../../components/common/GeometricShape';
import styles from './WorkDetail.module.css';

export const WorkDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const work = getWorkById(id || '');

  if (!work) {
    return (
      <div className={styles.notFound}>
        <div className={styles.notFoundContent}>
          <GeometricShape type="triangle" color="red" size="xl" />
          <h1>作品未找到</h1>
          <p>抱歉，该作品不存在或已被删除。</p>
          <Link to="/works" className={styles.backLink}>
            返回作品列表
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className={styles.detail}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Back Button Container - sticky 跟随页面滚动 */}
      <div className={styles.backButtonContainer}>
        <div className={styles.container}>
          <Link to="/works" className={styles.backButton}>
            <span className={styles.backArrow}>←</span>
            返回
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <img
          src={work.images[0] || work.thumbnail}
          alt={work.title}
          className={styles.heroImage}
        />
        <div className={styles.heroDecor}>
          <GeometricShape
            type={work.shapeType || 'circle'}
            color={work.accentColor || 'red'}
            size="lg"
          />
        </div>
      </motion.div>

      {/* Header - 标题区域 */}
      <div className={styles.header}>
        <div className={styles.container}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {work.title}
          </motion.h1>
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.main}>
            {/* Description - 项目简介 + 信息框 */}
            <motion.section
              className={styles.sectionWithInfo}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className={styles.descriptionWrapper}>
                <h2 className={styles.sectionTitle}>
                  <span className={styles.decorLine} />
                  项目简介
                </h2>
                <p className={styles.description}>{work.description}</p>
              </div>

              {/* 项目信息框 - 在项目简介右侧 */}
              <div className={styles.infoBox}>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Year</span>
                  <span className={styles.infoValue}>{work.year}</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Role</span>
                  <span className={styles.infoValue}>{work.role || '-'}</span>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Tags</span>
                  <div className={styles.tagsList}>
                    {work.tags.map((tag, index) => (
                      <span key={index} className={styles.tagItem}>{tag}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.infoRow}>
                  <span className={styles.infoLabel}>Award</span>
                  <span className={styles.infoValue}>-</span>
                </div>
              </div>
            </motion.section>

            {/* Project Video - 项目视频 */}
            {work.videoUrl && (
              <motion.section
                className={styles.section}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h2 className={styles.sectionTitle}>
                  <span className={styles.decorLine} />
                  项目视频
                </h2>
                <div className={styles.videoContainer}>
                  <iframe
                    className={styles.videoIframe}
                    src={work.videoUrl}
                    title={`${work.title} 项目视频`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </motion.section>
            )}

            {/* Project Details - 项目介绍（图片+文字） */}
            <motion.section
              className={styles.section}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className={styles.sectionTitle}>
                <span className={styles.decorLine} />
                项目介绍
              </h2>
              <div className={styles.projectDetails}>
                {/* 从 work.images[1] 开始遍历（images[0] 用于 Hero 大图） */}
                {work.images.slice(1).map((image, index) => (
                  <div key={index} className={styles.detailItem}>
                    <div className={styles.detailImage}>
                      <img
                        src={image}
                        alt={`${work.title} 展示 ${index + 2}`}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>
                    <p className={styles.detailDescription}>
                      {/* 占位文字，用户可以后续自定义 */}
                      {index === 0 && '在项目的初始阶段，我们深入研究了用户需求和市场趋势。通过大量的用户访谈和数据分析，我们确定了设计的核心方向。'}
                      {index === 1 && '设计草图阶段，我们探索了多种视觉方案。每一个概念都经过反复推敲，从色彩搭配到版式布局。'}
                      {index === 2 && '在原型设计阶段，我们创建了高保真的交互原型。通过不断的用户测试和迭代优化，我们逐步完善了用户体验。'}
                      {index === 3 && '视觉设计阶段，我们将品牌理念融入到每一个设计元素中，创造出既现代又经典的视觉效果。'}
                      {index === 4 && '开发阶段，我们采用模块化的方式，确保代码的可维护性和可扩展性。'}
                      {index === 5 && '响应式设计是项目的重点之一。我们确保产品在各种设备上都能完美呈现。'}
                      {index === 6 && '性能优化是项目成功的关键。通过技术手段，我们将页面加载时间控制在理想范围内。'}
                      {index >= 7 && '项目最终呈现出令人满意的成果。感谢您的浏览！'}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
