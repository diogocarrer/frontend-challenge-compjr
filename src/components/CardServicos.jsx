import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BotaoSaibaMais from "./BotaoSaibaMais";

//assets
import WebEstatico from "../assets/website_estatico.svg";
import SistemasDinamicos from "../assets/sistemas_dinamicos.svg";
import AplicativosMobile from "../assets/aplicativos_mobile.svg"; // Adicione esta linha para importar a imagem

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
            <h1 className={styles.titulo}>Nossos Serviços</h1>
            <p className={styles.subtitulo}>Como podemos te ajudar?</p>
            <div className={styles.cardContainer}>
                {paginas.slice(2, 5).map((pagina) => (
                    <div key={pagina.id} className={styles.card}>
                        {pagina.id === 3 && (
                            <img src={WebEstatico} alt="pagina Image" className={styles.paginaImage} />
                        )}
                        {pagina.id === 4 && (
                            <img src={SistemasDinamicos} alt="pagina Image" className={styles.paginaImage} />
                        )}
                        {pagina.id === 5 && (
                                <img src={AplicativosMobile} alt="pagina Image" className={styles.paginaImage} />
                        )}
                        <Link to={`/SaibaMais/sobre/${pagina.id}`}>
                            <BotaoSaibaMais />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardServicos;
