/* //assets
import WebEstatico from "../assets/web-estatico.svg";

//styles
import styles from './../styles/CardServicos.module.css';

const CardServicos = () => {
    return (
        <div>
            <div className={styles.card}>
                <h2 className={styles.titulo}>Nossos Serviços</h2>
                <p className={styles.subtitulo}>Pequena descrição como subtitulo</p>
                <div className={styles.card_servico}>
                    <img src={WebEstatico} alt="Serviço 1" className={styles.card_imagem} />
                    <img src={WebEstatico} alt="Serviço 2" className={styles.card_imagem} />
                </div>
                <div className={styles.card_servico}>
                    <img src={WebEstatico} alt="Serviço 3" className={styles.card_imagem} />
                </div>
            </div>
        </div>
    )
}

export default CardServicos
 */

//assets
import WebEstatico from "../assets/web-estatico.svg";

//styles
import styles from './../styles/CardServicos.module.css';

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BotaoSaibaMais from "./BotaoSaibaMais";


const CardServicos = () => {


    const url = "http://localhost:3000/products";
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url);
            const data = await res.json();
            setProducts(data);
        }
    
        fetchData();
        
    }, []);

    return (
        <div>
            {products.slice(2, 6).map((product) => (
                <p key={product.id}>
                    <Link to={`/products/${product.id}`}><BotaoSaibaMais /></Link>
                </p>
            ))}
        </div>
    )
}

export default CardServicos