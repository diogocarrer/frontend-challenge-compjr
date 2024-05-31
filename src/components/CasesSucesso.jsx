import { useState, useEffect } from 'react';
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import styles from './../styles/CasesSucesso.module.css';
import { useTranslation } from 'react-i18next';
import { fetchCases } from "../services/api";

register();

const CasesSucesso = () => {
    const { t } = useTranslation();
    const [cases, setCases] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetchCases();
                setCases(data);
            } catch (error) {
                console.error("Error fetching cases:", error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <hr></hr>
            <h1 className={styles.titulo}>{t('Cases de Sucesso')}</h1>
            <h2 className={styles.subtitulo}>{t('Alguns dos projetos que já fizemos')}</h2>
            {cases.length > 0 && <p className={styles.titulo_case}>{t(cases[activeIndex].titulo_case)}</p>}
            <Swiper
                slidesPerGroupSkip={1}
                pagination={{ clickable: true }}
                navigation
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className={styles.swiperContainer}
            >
                {cases.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className={styles.slide_cases}>
                            <img src={item.image} alt={item.titulo} className={styles.imagem_case} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {cases.length > 0 && <p className={styles.descricao_case}>{t(cases[activeIndex].descricao_case)}</p>}
        </div>
    );
};

export default CasesSucesso;
