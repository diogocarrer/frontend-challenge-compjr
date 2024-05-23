/* assets */
import ImagemApresentacao from "../assets/imagem_apresentacao.svg";
import ImagemQuemSomos from "../assets/imagem_quemsomos.svg";
import ImagemMissao from "../assets/imagem_missao.svg";
/* components */
import BotaoSaibaMais from "./BotaoSaibaMais";
/* styles */
import styles from './../styles/HomePage.module.css';

const HomePage = () => {
    return (
        <div>
            <div className={styles.home_page}>
                <div>
                    <h1 className={styles.titulo}>Criatividade jovem, Compromisso profissional.</h1>
                    <p className={styles.subtitulo}>Mais do que um produto, desenvolvemos soluções para o seu negócio, por meio da transformação digital e da paixão pelo o que fazemos.</p>
                    <BotaoSaibaMais />
                    {/* {products.filter(product => product.id === 1).map(product => (
                        <p key={product.id}>
                            <Link to={`/products/${product.id}`}><BotaoSaibaMais /></Link>
                        </p>
                    ))} */}
                </div>
                <div>
                    <img className={styles.imagem_homepage} src={ImagemApresentacao} alt="Apresentação" />
                </div>
            </div>

            <hr></hr>

            <div className={styles.home_page}>
                <div>
                    <img className={styles.imagem_quemsomos} src={ImagemQuemSomos} alt="Quem Somos" />
                </div>
                <div>
                    <h1 className={styles.titulo}>Quem Somos?</h1>
                    <p className={styles.subtitulo}>A Comp Júnior é uma empresa sem fins lucrativos que atua no mercado de tecnologia há mais de 20 anos em Lavras e região, prestando serviço de desenvolvimento web, mobile e multiplataforma.</p>
                    <p className={styles.subtitulo}>A Comp Júnior também faz parte do Movimento Empresa Júnior e visa por acolher e desenvolver seus membros, oferecendo a primeira oportunidade profissional e contato com o mercado de trabalho, suas metodologias e estruturas.</p>
                    <BotaoSaibaMais />
                </div>
            </div>

            <hr></hr>

            <div className={styles.home_page}>
                <div>
                    <h1 className={styles.titulo}>Nossa Missão</h1>
                    <p className={styles.subtitulo}>Formar profissionais completos, através da VIVÊNCIA EMPRESARIAL e projetos de transformação digital, que DESENVOLVEM MEMBROS e IMPACTAM A SOCIEDADE.</p>
                    <BotaoSaibaMais />
                </div>
                <div>
                    <img className={styles.imagem_missao} src={ImagemMissao} alt="Missão" />
                </div>
            </div>
        </div>
    )
}

export default HomePage