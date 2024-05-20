//assets
import ImageHomePage from "../assets/image-homepage.svg";

//styles
import styles from './../styles/HomePage.module.css';

const HomePage = () => {
    return (
        <div className={styles.home_page}>
            <div>
                <h1 className={styles.titulo}>Criatividade jovem, Compromisso profissional.</h1>
                <p className={styles.subtitulo}>Mais do que um produto, desenvolvemos soluções para o seu negócio, por meio da transformação digital e da paixão pelo o que fazemos.</p>
                <button>Solicitar Orçamento</button>
            </div>
            <div>
                <img className={styles.imagem_home_page} src={ImageHomePage} alt="Garota" />
            </div>
        </div>
    )
}

export default HomePage