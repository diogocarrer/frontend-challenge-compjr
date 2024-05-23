//assets
import LogoAzul from "../assets/logo-azul.svg";

//react router
import { NavLink } from "react-router-dom"

//styles
import styles from './../styles/Navbar.module.css';

const Navbar = () => {
  
    return (
        <nav className={styles.navbar}>
            <NavLink to="/"><img className={styles.logo} src={LogoAzul} alt="Comp Júnior Logo" /></NavLink>
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
            </ul>
        </nav>
    )
}

export default Navbar
