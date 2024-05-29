/* assets */
import ImagemApresentacao from "../assets/imagem_apresentacao.svg";
import ImagemQuemSomos from "../assets/imagem_quemsomos.svg";
import ImagemMissao from "../assets/imagem_missao.svg";
/* components */
import BotaoSaibaMais from "./BotaoSaibaMais";
/* styles */
import styles from './../styles/HomePage.module.css';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const HomePage = () => {

    const url = "http://localhost:3000/sobre";
    const [paginas, setPaginas] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url);
            const data = await res.json();
            setPaginas(data);
        }

        fetchData();

    }, []);

    return (
        <div>
            <div className={styles.apresentacao}>
                <div>
                    <h1 className={styles.titulo}>Criatividade Jovem, Compromisso Profissional.</h1>
                    <p className={styles.subtitulo}>Mais do que um produto, desenvolvemos soluções para o seu negócio, por meio da transformação digital e da paixão pelo o que fazemos.</p>
                    {paginas.filter(sobre => sobre.id === 1).map(sobre => (
                        <div key={sobre.id} className={styles.botao}>
                            <Link to={`/${sobre.id}`}><BotaoSaibaMais /></Link>
                        </div>
                    ))}
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
                    {paginas.filter(sobre => sobre.id === 1).map(sobre => (
                        <div key={sobre.id} className={styles.botao}>
                            <Link to={`/${sobre.id}`}><BotaoSaibaMais /></Link>
                        </div>
                    ))}
                </div>
            </div>

            <hr></hr>

            <div className={styles.home_page}>
                <div>
                    <h1 className={styles.titulo}>Nossa Missão</h1>
                    <p className={styles.subtitulo}>Formar profissionais completos, através da VIVÊNCIA EMPRESARIAL e projetos de transformação digital, que DESENVOLVEM MEMBROS e IMPACTAM a nossa SOCIEDADE.</p>
                    {paginas.filter(sobre => sobre.id === 1).map(sobre => (
                        <div key={sobre.id} className={styles.botao}>
                            <Link to={`/${sobre.id}`}><BotaoSaibaMais /></Link>
                        </div>
                    ))}
                </div>
                <div>
                    <img className={styles.imagem_missao} src={ImagemMissao} alt="Missão" />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
