//assets
import ImageQuemSomos from "../assets/image-quemsomos.svg";

//styles
import styles from './../styles/QuemSomos.module.css';

const QuemSomos = () => {
    return (
        <div className={styles.home_page}>
            <div>
                <img className={styles.imagem_home_page} src={ImageQuemSomos} alt="Garota" />
            </div>
            <div>
                <h1 className={styles.titulo}>Quem Somos?</h1>
                <p className={styles.subtitulo}>A Comp Júnior é uma empresa sem fins lucrativos que atua no mercado de tecnologia há mais de 20 anos em Lavras e região, prestando serviço de desenvolvimento web, mobile e multiplataforma.</p>
                <p className={styles.subtitulo}>A Comp Júnior também faz parte do Movimento Empresa Júnior e visa por acolher e desenvolver seus membros, oferecendo a primeira oportunidade profissional e contato com o mercado de trabalho, suas metodologias e estruturas.</p>
                <button>Saiba Mais</button>
            </div>
        </div>
    )
}

export default QuemSomos