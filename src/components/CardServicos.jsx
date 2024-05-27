/* import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BotaoSaibaMais from "./BotaoSaibaMais";

//assets
import WebEstatico from "../assets/website_estatico.svg";
import SistemasDinamicos from "../assets/sistemas_dinamicos.svg";
import AplicativosMobile from "../assets/aplicativos_mobile.svg";
import AnaliseDados from "../assets/analise_dados.svg";
import Teste from "../assets/teste2.svg";


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
            <div>
                <img src={Teste} alt="Serviço 1" />
                <img src={Teste} alt="Serviço 2" />
            </div>
            <div>
                <img src={Teste} alt="Serviço 3" />
                <img src={Teste} alt="Serviço 4"/>
            </div>
        </div>
    );
}

export default CardServicos;
 */




 import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BotaoSaibaMais from "./BotaoSaibaMais";

//assets
import WebEstatico from "../assets/website_estatico.svg";
import SistemasDinamicos from "../assets/sistemas_dinamicos.svg";
import AplicativosMobile from "../assets/aplicativos_mobile.svg";
import AnaliseDados from "../assets/analise_dados.svg";
import Teste from "../assets/teste2.svg";


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
            <p className={styles.subtitulo}>Como podemos te ajudar?</p>
            <div className={styles.cardContainer}>
                {paginas.slice(1, 5).map((pagina) => (
                    <div key={pagina.id} className={styles.card}>
                        {pagina.id === 2 && (
                            <img src={Teste} alt="pagina Image"/>
                        )}
                        {pagina.id === 3 && (
                            <img src={Teste} alt="pagina Image"/>
                        )}
                        {pagina.id === 4 && (
                                <img src={Teste} alt="pagina Image"/>
                        )}
                        {pagina.id === 5 && (
                            <img src={Teste} alt="pagina Image"/>
                        )}
                        <Link to={`/SaibaMais/${pagina.id}`}>
                            <BotaoSaibaMais />
                        </Link>
    
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardServicos;
