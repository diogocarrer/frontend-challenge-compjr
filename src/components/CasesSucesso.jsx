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
        { id: "1", titulo: "SE7I", descricao: "A SE7I, Semana de Tecnologia da Informação - Universidade Federal de Lavras estava indo para sua quarta edição. É um evento que reúne grandes nomes da tecnologia para palestrar para os membros da comunidade. Em 2020, a necessidade de reorganização global afetou todos, incluindo a SE7I, que precisou adaptar suas palestras e workshops para um formato remoto. Para enfrentar esse desafio, a Comp Júnior desenvolveu um sistema de organização de eventos que permitiu aos membros da comunidade explorar as palestras disponíveis, inscrever-se e, ao final do evento, receber seus certificados.", image: "https://api.dinamico.compjunior.com.br/files/images/screenshot20210415-se7i.png" },
        { id: "2", titulo: "Jurídica Jr", descricao: "A Jurídica Júnior, empresa júnior de Direito da Universidade Federal de Lavras, formada por alunos de graduação, atua fornecendo serviços como: elaboração de contratos, consultoria jurídica, pareceres jurídicos, estatuto social, regimento interno, recurso administrativo, registro de marca e termo de uso. A empresa tinha problemas para divulgar sua carta de serviços e estabelecer uma presença digital marcante. Para resolver isso, criamos uma página web com um design moderno e intuitivo. Nela, apresentamos a história da empresa, os serviços oferecidos, os parceiros, os depoimentos e a estrutura organizacional da empresa.", image: "https://api.dinamico.compjunior.com.br/files/images/screenshot20210415-juridica-jr1.png" },
        { id: "3", titulo: "Lar e Vida", descricao: "O Lar Esperança e Vida é uma entidade civil de direito privado, sem fins lucrativos, dedicada a oferecer apoio às pessoas em tratamento de câncer, que enfrentam dificuldades devido aos altos custos e à doença. Para esclarecer sua missão e facilitar o processo de doação, desenvolvemos uma Landing Page clara e simples. Nela, destacamos os propósitos, missão, visão e valores da instituição, bem como os serviços oferecidos, formas de contribuir e como contatar a entidade. Essa iniciativa melhorou significativamente a visibilidade digital do Lar Esperança e Vida, evitando confusões na comunidade e tornando mais acessível o apoio aos que mais precisam.", image: "https://api.dinamico.compjunior.com.br/files/images/screenshot20210415-lar-e-vida1.png" }
    ]


    /* useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setCase(data))
        .catch(error => console.error('Error fetching the cases data:', error));
    }, []); */

    return (
        <div>
            <hr></hr>
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