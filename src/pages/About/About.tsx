import { motion } from 'framer-motion';
import { GeometricShape } from '../../components/common/GeometricShape';
import styles from './About.module.css';

export const About: React.FC = () => {
  const skills = [
    'UI/UX Design',
    'Brand Identity',
    'Typography',
    'Web Design',
    'Motion Design',
    '3D Visualization',
  ];

  return (
    <div className={styles.about}>
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>About</h1>
      </motion.header>

      <div className={styles.container}>
        <div className={styles.content}>
          <motion.div
            className={styles.main}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.decorLine} />

            <h2 className={styles.subtitle}>Design Philosophy</h2>

            <p className={styles.description}>
              Inspired by the Bauhaus movement, I believe in the harmony between
              form and function. Every design element should serve a purpose,
              stripped of unnecessary decoration.
            </p>

            <p className={styles.description}>
              My work combines geometric precision with bold primary colors,
              creating designs that are both visually striking and functionally
              superior. I strive to create work that stands the test of time,
              just as the Bauhaus masters envisioned.
            </p>

            <h3 className={styles.skillsTitle}>Skills</h3>
            <ul className={styles.skills}>
              {skills.map((skill, index) => (
                <motion.li
                  key={skill}
                  className={styles.skill}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <GeometricShape type="square" color="red" size="xs" />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className={styles.visual}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className={styles.shapes}>
              <GeometricShape type="circle" color="red" size={180} className={styles.shape1} />
              <GeometricShape type="square" color="yellow" size={120} className={styles.shape2} />
              <GeometricShape type="triangle" color="blue" size={100} className={styles.shape3} />
            </div>

            <div className={styles.info}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Experience</span>
                <span className={styles.infoValue}>5+ Years</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Projects</span>
                <span className={styles.infoValue}>50+</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>Clients</span>
                <span className={styles.infoValue}>30+</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.section
          className={styles.philosophy}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className={styles.philosophyTitle}>The Bauhaus Principles</h2>
          <div className={styles.principles}>
            <div className={styles.principle}>
              <GeometricShape type="circle" color="red" size="md" />
              <h4>Form Follows Function</h4>
              <p>Design should prioritize functionality over decoration.</p>
            </div>
            <div className={styles.principle}>
              <GeometricShape type="square" color="yellow" size="md" />
              <h4>Geometric Simplicity</h4>
              <p>Use basic shapes to create powerful visual compositions.</p>
            </div>
            <div className={styles.principle}>
              <GeometricShape type="triangle" color="blue" size="md" />
              <h4>Unity of Art & Craft</h4>
              <p>Combine artistic vision with technical craftsmanship.</p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};
