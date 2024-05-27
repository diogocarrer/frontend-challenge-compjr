/* //assets
import LogoBranca from "../assets/logo-branca.svg";

//react router
import { NavLink } from "react-router-dom";

//styles
import styles from './../styles/Navbar.module.css';

// React Icons
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    setDarkMode(!darkMode);
  };

  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src={LogoBranca} alt="Comp Júnior Logo" />
      <ul className={styles.navbar_links}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/#servicos">Serviços</NavLink>
        </li>
        <li>
          <NavLink to="/">Cases</NavLink>
        </li>
        <li>
          <NavLink to="/">Contato</NavLink>
        </li>
        <li>
          <button onClick={toggleDarkMode} className={styles.toggle_button}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
 */

import LogoBranca from "../assets/logo-branca.svg";
import { FaSun, FaMoon } from 'react-icons/fa';
import { useState } from 'react';
import styles from './../styles/Navbar.module.css';

// Navbar.jsx

import { HashLink } from 'react-router-hash-link'; // Importa o HashLink para lidar com âncoras

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
    setDarkMode(!darkMode);
  };

  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src={LogoBranca} alt="Comp Júnior Logo" />
      <div className={styles.navbar_links}>
        <div>
          <HashLink to="#home" className={styles.navlink} smooth>Home</HashLink>
        </div>
        <div>
          <HashLink to="#servicos" className={styles.navlink} smooth>Serviços</HashLink>
        </div>
        <div>
          <HashLink to="#cases" className={styles.navlink} smooth>Cases</HashLink>
        </div>
        <div>
          <HashLink to="#contato" className={styles.navlink} smooth>Contato</HashLink>
        </div>
        <div>
          <button onClick={toggleDarkMode} className={styles.toggle_button}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
