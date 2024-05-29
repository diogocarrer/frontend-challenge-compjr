/* assets */
import Sobre from "../assets/saiba_mais.svg";
/* react */
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
/* styles */
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
    <div className={styles.pagina_sobre}>
      <img src={Sobre} alt="Sobre" className={styles.imagem_sobre} />
      {pagina && (
        <div>
          <h1 className={styles.titulo_sobre}>{pagina.titulo_sobre}</h1>
          <h2 className={styles.subtitulo_sobre}>{pagina.subtitulo_sobre}</h2>
          {pagina.descricao_sobre.map((paragraph, index) => (
            <p className={styles.paragrafo_sobre} key={index}>{paragraph} </p>
          ))}
        </div>
      )}
    </div>
  )
}

export default SaibaMais;