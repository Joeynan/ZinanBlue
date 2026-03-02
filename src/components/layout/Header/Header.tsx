import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GeometricShape } from '../../common/GeometricShape';
import { useTheme } from '../../../hooks/useTheme';
import styles from './Header.module.css';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/works', label: 'Works' },
    { path: '/about', label: 'About' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={styles.header}>
      {/* Left Capsule - Logo */}
      <div className={styles.leftCapsule}>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoShapes}>
            <GeometricShape type="circle" color="red" size="xs" />
            <GeometricShape type="square" color="yellow" size="xs" />
            <GeometricShape type="triangle" color="blue" size="xs" />
          </div>
          <span className={styles.logoText}>JOEYNAN</span>
        </Link>
      </div>

      {/* Right Capsule - Navigation + Theme Toggle */}
      <div className={styles.rightCapsule}>
        <nav className={styles.desktopNav}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${styles.navLink} ${isActive(item.path) ? styles.active : ''}`}
            >
              {item.label}
              {isActive(item.path) && (
                <motion.div
                  className={styles.activeIndicator}
                  layoutId="activeIndicator"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* Theme Toggle Switch */}
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          
          <motion.div
            className={styles.toggleTrack}
            animate={{ backgroundColor: isDark ? '#1a1a2e' : '#e8e8e8' }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className={styles.toggleThumb}
              animate={{ x: isDark ? 20 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            >
              <motion.span
                className={styles.toggleIcon}
                animate={{ rotate: isDark ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isDark ? '🌙' : '☀️'}
              </motion.span>
            </motion.div>
          </motion.div>
        </button>

        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.menuLine} ${isMenuOpen ? styles.open : ''}`} />
          <span className={`${styles.menuLine} ${isMenuOpen ? styles.open : ''}`} />
          <span className={`${styles.menuLine} ${isMenuOpen ? styles.open : ''}`} />
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              className={styles.mobileNav}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`${styles.mobileNavLink} ${isActive(item.path) ? styles.active : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <GeometricShape
                      type={isActive(item.path) ? 'circle' : 'square'}
                      color={isActive(item.path) ? 'red' : 'black'}
                      size="xs"
                    />
                    <span>{item.label}</span>
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Theme Toggle */}
              <div className={styles.mobileThemeToggle}>
                <button
                  className={styles.themeToggle}
                  onClick={toggleTheme}
                  aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                  <motion.div
                    className={styles.toggleTrack}
                    animate={{ backgroundColor: isDark ? '#1a1a2e' : '#e8e8e8' }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div
                      className={styles.toggleThumb}
                      animate={{ x: isDark ? 20 : 0 }}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    >
                      <motion.span
                        className={styles.toggleIcon}
                        animate={{ rotate: isDark ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {isDark ? '🌙' : '☀️'}
                      </motion.span>
                    </motion.div>
                  </motion.div>
                </button>
                <span className={styles.themeLabel}>{isDark ? 'Dark Mode' : 'Light Mode'}</span>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
