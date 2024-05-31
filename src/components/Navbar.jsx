/* assets */
import LogoBranca from "../assets/logo_branca.svg";
/* react */
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
/* translate */
import i18n from './../translate/i18n';
import { useTranslation } from 'react-i18next'
/* styles */
import styles from './../styles/Navbar.module.css';

const Navbar = () => {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [language, setLanguage] = useState('pt');

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    setDarkMode(!darkMode);
    if (windowWidth <= 800) {
      setShowMenu(false);
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
    closeMenu();
  };

  return (
    <nav className={styles.navbar}>
      <HashLink to="/#home" className={styles.logo_link} smooth>
        <img className={styles.logo} src={LogoBranca} alt="Comp Júnior Logo" />
      </HashLink>
      <div className={`${styles.navbar_links} ${showMenu ? styles.show : ''}`}>
        <div onClick={closeMenu}>
          <HashLink to="/#home" className={styles.link} smooth>{t('Home')}</HashLink>
        </div>
        <div onClick={closeMenu}>
          <HashLink to="/#servicos" className={styles.link} smooth>{t('Serviços')}</HashLink>
        </div>
        <div onClick={closeMenu}>
          <HashLink to="/#cases" className={styles.link} smooth>{t('Cases')}</HashLink>
        </div>
        <div onClick={closeMenu}>
          <HashLink to="/#contato" className={styles.link} smooth>{t('Contato')}</HashLink>
        </div>
        <div>
          <button onClick={toggleDarkMode} className={styles.toggle_button}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        <div>
          {language === 'pt' ? (
            <button onClick={() => changeLanguage('en')} className={`${styles.language_button} ${styles.en}`}>
              <span className={styles.flag_icon}>EN</span>
            </button>
          ) : (
            <button onClick={() => changeLanguage('pt')} className={`${styles.language_button} ${styles.pt}`}>
              <span className={styles.flag_icon}>PT</span>
            </button>
          )}
        </div>
      </div>
      {windowWidth <= 900 && (
        <button className={styles.toggle_button} onClick={toggleMenu}>
          <FaBars />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
