import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { GeometricShape } from '../../common/GeometricShape';
import { GlassSurface } from '../../common/GlassSurface';
import { useTheme } from '../../../hooks/useTheme';
import { useLanguage } from '../../../i18n/LanguageContext';
import { useProximityNav } from './useProximityNav';
import styles from './Header.module.css';

const MotionLink = motion(Link);
const navSpring = { type: 'spring', stiffness: 380, damping: 28, mass: 0.42 } as const;

const SunIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className={styles.themeIconSvg} aria-hidden="true">
    <circle cx="12" cy="12" r="4.5" fill="currentColor" />
    <path
      d="M12 2.75v2.1M12 19.15v2.1M4.75 12h2.1M17.15 12h2.1M5.95 5.95l1.48 1.48M16.57 16.57l1.48 1.48M18.05 5.95l-1.48 1.48M7.43 16.57l-1.48 1.48"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const MoonIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" className={styles.themeIconSvg} aria-hidden="true">
    <path
      d="M16.65 3.55a8.8 8.8 0 1 0 3.8 12.2 8.35 8.35 0 0 1-3.08.58 8.78 8.78 0 0 1-8.78-8.78 8.35 8.35 0 0 1 .58-3.08 8.77 8.77 0 0 0 7.48-.92Z"
      fill="currentColor"
    />
  </svg>
);

const ThemeToggleControl: React.FC<{
  isDark: boolean;
  toggleTheme: () => void;
  ariaLabel: string;
}> = ({ isDark, toggleTheme, ariaLabel }) => (
  <button
    className={styles.themeToggle}
    onClick={toggleTheme}
    aria-label={ariaLabel}
  >
    <GlassSurface
      variant="toggle"
      interactive
      className={styles.toggleTrackSurface}
      contentClassName={styles.toggleTrackSurfaceContent}
      width={48}
      height={26}
      borderRadius={13}
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
          {isDark ? <MoonIcon /> : <SunIcon />}
        </motion.span>
      </motion.div>
    </GlassSurface>
  </button>
);

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/works', label: t('nav.works') },
    { path: '/about', label: t('nav.about') },
  ];
  const {
    navRef,
    isProximityEnabled,
    setItemRef,
    getItemMotion,
    handleNavPointerEnter,
    handleNavPointerMove,
    handleNavPointerLeave,
  } = useProximityNav(navItems.length);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={styles.header}>
      {/* Left Capsule - Logo */}
      <div className={styles.leftCapsule}>
        <GlassSurface
          variant="capsule"
          interactive
          className={styles.capsuleSurface}
          contentClassName={styles.leftCapsuleContent}
        >
          <Link to="/" className={styles.logo}>
            <div className={styles.logoShapes}>
              <GeometricShape type="circle" color="red" size="xs" />
              <GeometricShape type="square" color="yellow" size="xs" />
              <GeometricShape type="triangle" color="blue" size="xs" />
            </div>
            <span className={styles.logoText}>JOEYNAN</span>
          </Link>
        </GlassSurface>
      </div>

      {/* Right Capsule - Navigation + Language + Theme Toggle */}
      <div className={styles.rightCapsule}>
        <GlassSurface
          variant="capsule"
          interactive
          className={styles.capsuleSurface}
          contentClassName={styles.rightCapsuleContent}
        >
          <nav
            ref={navRef}
            className={`${styles.desktopNav} ${isProximityEnabled ? styles.desktopNavInteractive : ''}`}
            onPointerEnter={handleNavPointerEnter}
            onPointerMove={handleNavPointerMove}
            onPointerLeave={handleNavPointerLeave}
          >
            {navItems.map((item, index) => {
              const motionState = getItemMotion(index);

              return (
                <MotionLink
                  ref={setItemRef(index)}
                  key={item.path}
                  to={item.path}
                  className={`${styles.navLink} ${isActive(item.path) ? styles.active : ''}`}
                  style={motionState.style}
                  animate={motionState.animate}
                  transition={navSpring}
                >
                  <span className={styles.navLinkLabel}>{item.label}</span>
                  {isActive(item.path) && (
                    <motion.div
                      className={styles.activeIndicator}
                      layoutId="activeIndicator"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </MotionLink>
              );
            })}
          </nav>

          <ThemeToggleControl
            isDark={isDark}
            toggleTheme={toggleTheme}
            ariaLabel={isDark ? t('theme.switchToLight') : t('theme.switchToDark')}
          />

          <button
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={t('nav.toggleMenu')}
          >
            <span className={`${styles.menuLine} ${isMenuOpen ? styles.open : ''}`} />
            <span className={`${styles.menuLine} ${isMenuOpen ? styles.open : ''}`} />
            <span className={`${styles.menuLine} ${isMenuOpen ? styles.open : ''}`} />
          </button>
        </GlassSurface>

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
                <ThemeToggleControl
                  isDark={isDark}
                  toggleTheme={toggleTheme}
                  ariaLabel={isDark ? t('theme.switchToLight') : t('theme.switchToDark')}
                />
                <span className={styles.themeLabel}>{isDark ? t('theme.dark') : t('theme.light')}</span>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
