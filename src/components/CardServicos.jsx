/* components */
import BotaoSaibaMais from "./BotaoSaibaMais";
/* assets */
import WebsiteEstatico_pt from "../assets/website_estatico.svg";
import SistemasDinamicos_pt from "../assets/sistemas_dinamicos.svg";
import AplicativosMobile_pt from "../assets/aplicativos_mobile.svg";
import AnaliseDados_pt from "../assets/analise_dados.svg";
import WebsiteEstatico_en from "../assets/static_website.svg";
import SistemasDinamicos_en from "../assets/dynamic_systems.svg";
import AplicativosMobile_en from "../assets/mobile_applications.svg";
import AnaliseDados_en from "../assets/data_analysis.svg";
/* react */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
/* translate */
import { } from './../translate/i18n';
import { useTranslation } from 'react-i18next'
/* styles */
import styles from './../styles/CardServicos.module.css';

const CardServicos = () => {
    const { t, i18n } = useTranslation();
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

    const getImage = (id) => {
        const lang = i18n.language;
        switch (id) {
            case 2:
                return lang === 'en' ? WebsiteEstatico_en : WebsiteEstatico_pt;
            case 3:
                return lang === 'en' ? SistemasDinamicos_en : SistemasDinamicos_pt;
            case 4:
                return lang === 'en' ? AplicativosMobile_en : AplicativosMobile_pt;
            case 5:
                return lang === 'en' ? AnaliseDados_en : AnaliseDados_pt;
            default:
                return null;
        }
    };

    return (
        <div>
            <hr></hr>
            <h1 className={styles.titulo}>{t('Nossos Serviços')}</h1>
            <h2 className={styles.subtitulo}>{t('Como podemos te ajudar?')}</h2>
            <div className={styles.cardContainer}>
                {paginas.slice(1, 5).map((pagina) => (
                    <div key={pagina.id} className={styles.card}>
                        <img src={getImage(pagina.id)} alt={t(pagina.alt)} className={styles.imagem_servico} />
                        <Link to={`/${pagina.id}`}>
                            <BotaoSaibaMais />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardServicos;