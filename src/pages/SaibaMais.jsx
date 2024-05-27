
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

//assets
import Servicos from "../assets/servicos.svg";
//styles
import styles from './../styles/SaibaMais.module.css';

const SaibaMais = () => {

  const url = "http://localhost:3000/sobre";
  const [pagina, setPagina] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url);
      const data = await res.json();
      const selectedPagina = data.find(pagina => pagina.id === parseInt(id));
      setPagina(selectedPagina);
    }

    fetchData();

  }, [id]);

  return (
    <div className={styles.pagina_saiba_mais}>
      <img src={Servicos} alt="pagina Image" className={styles.imagem_saiba_mais}/>
      {pagina && (
        <div>
            <h1 className={styles.titulo}>{pagina.titulo}</h1>
            <h2 className={styles.subtitulo}>{pagina.subtitulo}</h2>
            {pagina.descricao.map((paragraph, index) => (
                <p className={styles.paragrafo_saiba_mais} key={index}>{paragraph} </p>
            ))}
        </div>
      )}
    </div>
  )
}

export default SaibaMais;



