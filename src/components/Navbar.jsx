/* assets */
import LogoBranca from "../assets/logo-branca.svg";
/* react */
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
/* styles */
import styles from './../styles/Navbar.module.css';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src={LogoBranca} alt="Comp Júnior Logo" />
      <div className={`${styles.navbar_links} ${showMenu ? styles.show : ''}`}>
        <div onClick={closeMenu}>
          <HashLink to="/#home" className={styles.link} smooth>Home</HashLink>
        </div>
        <div onClick={closeMenu}>
          <HashLink to="/#servicos" className={styles.link} smooth>Serviços</HashLink>
        </div>
        <div onClick={closeMenu}>
          <HashLink to="/#cases" className={styles.link} smooth>Cases</HashLink>
        </div>
        <div onClick={closeMenu}>
          <HashLink to="/#contato" className={styles.link} smooth>Contato</HashLink>
        </div>
        <div>
          <button onClick={toggleDarkMode} className={styles.toggle_button}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
      {windowWidth <= 800 && (
        <button className={styles.toggle_button} onClick={toggleMenu}>
          <FaBars />
        </button>
      )}
    </nav>
  );
};

export default Navbar;
