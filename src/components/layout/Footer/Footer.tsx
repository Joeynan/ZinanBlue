import { Link } from 'react-router-dom';
import { GeometricShape } from '../../common/GeometricShape';
import styles from './Footer.module.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <div className={styles.logoShapes}>
                <GeometricShape type="circle" color="red" size="xs" />
                <GeometricShape type="square" color="yellow" size="xs" />
                <GeometricShape type="triangle" color="blue" size="xs" />
              </div>
              <span className={styles.logoText}>BAUHAUS</span>
            </Link>
            <p className={styles.tagline}>Form Follows Function</p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>Navigation</h4>
              <Link to="/">Home</Link>
              <Link to="/works">Works</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className={styles.linkGroup}>
              <h4>Social</h4>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">Dribbble</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {currentYear} Bauhaus Portfolio. All rights reserved.</p>
          <div className={styles.decorShapes}>
            <GeometricShape type="circle" color="red" size="xs" />
            <GeometricShape type="square" color="yellow" size="xs" />
            <GeometricShape type="triangle" color="blue" size="xs" />
          </div>
        </div>
      </div>
    </footer>
  );
};
