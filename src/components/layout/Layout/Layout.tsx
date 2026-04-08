import { Outlet } from 'react-router-dom';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { LanguageToggle } from '../../common/LanguageToggle';
import styles from './Layout.module.css';

export const Layout: React.FC = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>
        <div className={styles.langToggleSticky}>
          <LanguageToggle />
        </div>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
