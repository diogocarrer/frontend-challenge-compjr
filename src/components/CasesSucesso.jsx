import { useState, /* useEffect */ } from 'react';
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from './../styles/CasesSucesso.module.css';

// Importe os estilos do Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

register();


const CasesSucesso = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    /* const [cases, setCase] = useState([]); */
    /* const url = "http://localhost:3000/cases" */

    const cases = [
        { id: "1", titulo: "a", descricao: "Descrição para o slide 1", image: "https://api.dinamico.compjunior.com.br/files/images/screenshot20210415-se7i.png" },
        { id: "2", titulo: "b", descricao: "Descrição para o slide 2", image: "https://api.dinamico.compjunior.com.br/files/images/screenshot20210415-juridica-jr1.png" },
        { id: "3", titulo: "c", descricao: "Descrição para o slide 3", image: "https://api.dinamico.compjunior.com.br/files/images/screenshot20210415-lar-e-vida1.png" }
    ]


    /* useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setCase(data))
        .catch(error => console.error('Error fetching the cases data:', error));
    }, []); */

    return (
        <div>
            <h1 className={styles.titulo}>Cases de Sucesso</h1>
            <h2 className={styles.subtitulo}>Alguns dos projetos que já fizemos</h2>
            {cases && <p className={styles.titulo_case}>{cases[activeIndex].titulo}</p>}
            <Swiper slidesPerGroupSkip={1} pagination={{ clickable: true }} navigation onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} className={styles.swiperContainer}>
                
                {cases.map((item) => (
                <SwiperSlide key={item.id}>
                    <div className={styles.slide_cases}>
                    <img src={item.image} alt="Cases de Sucesso" className={styles.imagem_case} />
                    </div>
                </SwiperSlide>
                ))}

            </Swiper>
            {cases && <p className={styles.descricao_case}>{cases[activeIndex].descricao}</p>}
        </div>
    )
}

export default CasesSucesso