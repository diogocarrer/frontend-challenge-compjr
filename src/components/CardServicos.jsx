//assets
import WebEstatico from "../assets/web-estatico.svg";

//styles
import styles from './../styles/CardServicos.module.css';

const CardServicos = () => {
    return (
        <div>
            <section>
                <h2 className={styles.titulo}>Nossos Serviços</h2>
                <p className={styles.subtitulo}>Pequena descrição como subtitulo</p>
                <div>
                    <div>
                        <img src={WebEstatico} alt="Serviço 1"/>
                        <img src={WebEstatico} alt="Serviço 2"/>
                        <img src={WebEstatico} alt="Serviço 3"/>
                    </div>
                    <div>
                        <img src={WebEstatico} alt="Serviço 1"/>
                        <img src={WebEstatico} alt="Serviço 2"/>
                        <img src={WebEstatico} alt="Serviço 3"/>
                    </div>
                </div>
    </section>
        </div>
    )
}

export default CardServicos