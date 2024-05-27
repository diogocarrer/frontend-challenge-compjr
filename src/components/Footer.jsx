//assets
import LogoBranca from "../assets/logo-branca.svg";

import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

//styles
import styles from './../styles/Footer.module.css';

const Footer = () => {
  
    return (
        <footer className={styles.footer}>
            <div className={styles.secoes}>
                <img src={LogoBranca} alt="Logo" />
                <h3>Criatividade Jovem.</h3>
                <h3>Compromisso Profissional.</h3>
            </div>
            <div className={styles.secoes}>
                <h3>Contato</h3>
                <p>contato@compjunior.com.br</p>
                <h3>Telefone</h3>
                <p>(35) 3829-5188</p>
            </div>
            <div className={styles.secoes}>
                <h3>Endereço</h3>
                <p>UFLA - Universidade Federal de Lavras</p>
                <p>Departamento de Ciência da Computação</p>
                <p>1º Andar, Sala 14</p>
                <p>37200-000</p>
            </div>
            <div className={styles.secoes}>
                <h3>Redes Sociais</h3>
                <div className={styles.social_icons}>
                    <a href="https://www.facebook.com/compjunior" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                        <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com/compjunior/?hl=pt-br" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                        <FaInstagram />
                    </a>
                    <a href="https://www.youtube.com/channel/UCNGSc-QwLbt6zf2S9ui74Kw/featured" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                        <FaYoutube />
                    </a>
                    <a href="https://www.linkedin.com/company/compjunior/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                        <FaLinkedin />
                    </a>
                </div>
            </div>
            
        </footer>
    )
}

export default Footer