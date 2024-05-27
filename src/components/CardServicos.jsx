import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BotaoSaibaMais from "./BotaoSaibaMais";

//assets
import WebEstatico from "../assets/website_estatico.svg";
import SistemasDinamicos from "../assets/sistemas_dinamicos.svg";
import AplicativosMobile from "../assets/aplicativos_mobile.svg";
import AnaliseDados from "../assets/analise_dados.svg";


//styles
import styles from './../styles/CardServicos.module.css';

const CardServicos = () => {
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
            <hr></hr>
            <h1 className={styles.titulo}>Nossos Serviços</h1>
            <h2 className={styles.subtitulo}>Como podemos te ajudar?</h2>
            <div className={styles.cardContainer}>
                {paginas.slice(1, 5).map((pagina) => (
                    <div key={pagina.id} className={styles.card}>
                        {pagina.id === 2 && (
                            <img src={WebEstatico} alt="pagina Image" />
                        )}
                        {pagina.id === 3 && (
                            <img src={SistemasDinamicos} alt="pagina Image" />
                        )}
                        {pagina.id === 4 && (
                            <img src={AplicativosMobile} alt="pagina Image" />
                        )}
                        {pagina.id === 5 && (
                            <img src={AnaliseDados} alt="pagina Image" />
                        )}
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
