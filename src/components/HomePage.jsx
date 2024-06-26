// components/HomePage.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BotaoSaibaMais from "./BotaoSaibaMais";
import styles from "../styles/HomePage.module.css";
import ImagemApresentacao from "../assets/imagem_apresentacao.svg";
import ImagemQuemSomos from "../assets/imagem_quemsomos.svg";
import ImagemMissao from "../assets/imagem_missao.svg";
import { fetchPages } from "../services/api";

const HomePage = () => {
    const { t } = useTranslation();
    const [paginas, setPaginas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchPages();
                setPaginas(data);
            } catch (error) {
                console.error("Error fetching pages:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className={styles.apresentacao}>
                <div>
                    <h1 className={styles.titulo}>{t('Criatividade Jovem, Compromisso Profissional.')}</h1>
                    <p className={styles.subtitulo}>{t('Mais do que um produto, desenvolvemos soluções para o seu negócio, por meio da transformação digital e da paixão pelo o que fazemos.')}</p>
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
                    <h1 className={styles.titulo}>{t('Quem Somos?')}</h1>
                    <p className={styles.subtitulo}>{t('A Comp Júnior é uma empresa sem fins lucrativos que atua no mercado de tecnologia há mais de 20 anos em Lavras e região, prestando serviço de desenvolvimento web, mobile e multiplataforma.')}</p>
                    <p className={styles.subtitulo}>{t('A Comp Júnior também faz parte do Movimento Empresa Júnior e visa acolher e desenvolver seus membros, oferecendo a primeira oportunidade profissional e contato com o mercado de trabalho, suas metodologias e estruturas.')}</p>
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
                    <h1 className={styles.titulo}>{t('Nossa Missão')}</h1>
                    <p className={styles.subtitulo}>{t('Formar profissionais completos, através da VIVÊNCIA EMPRESARIAL e projetos de transformação digital, que DESENVOLVEM MEMBROS e IMPACTAM a nossa SOCIEDADE.')}</p>
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
};

export default HomePage;
