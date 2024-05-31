/* assets */
import Servicos from "../assets/servicos.svg";
import Sobre from "../assets/compjunior.jpg";
/* react */
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
/* translate */
import { } from './../translate/i18n';
import { useTranslation } from 'react-i18next'
/* styles */
import styles from './../styles/SaibaMais.module.css';

const SaibaMais = () => {
  const { t } = useTranslation();
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

    window.scrollTo(0, 0);
  }, [id]);

  const renderImage = (id) => {
    switch (id) {
      case 1:
        return <img src={Sobre} alt="Sobre" className={styles.imagem_sobre} />;
      default:
        return <img src={Servicos} alt="Serviços" className={styles.imagem_service} />;
    }
  };

  return (
    <div className={styles.pagina_sobre}>
      {pagina && renderImage(pagina.id)}
      {pagina && (
        <div>
          <h1 className={styles.titulo_sobre}>{t(pagina.titulo_sobre)}</h1>
          <h2 className={styles.subtitulo_sobre}>{t(pagina.subtitulo_sobre)}</h2>
          {pagina.descricao_sobre.map((paragraph, index) => (
            <p className={styles.paragrafo_sobre} key={index}>{t(paragraph)} </p>
          ))}
        </div>
      )}
    </div>
  )
}

export default SaibaMais;
