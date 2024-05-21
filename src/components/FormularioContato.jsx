//styles
import styles from './../styles/FormularioContato.module.css';

const FormularioContato = () => {
  return (
    <div>
        <h1 className={styles.titulo}>Precisando de algo em específico?</h1>
        <h2 className={styles.subtitulo}>Vamos discutir seu próximo projeto!</h2>
        <form>
            <h1 className={styles.titulo_formulario}>Entrar em contato</h1>
            <p className={styles.subtitulo_formulario}>Temos uma equipe pronta para conversar com você e esclarecer quaisquer dúvidas sobre a nossa empresa, nossos serviços e processos.</p>
            <label>
                <span>Nome: </span>
                <input type="text" name="nome" required placeholder="Seu nome"/>
            </label>
            <label>
                <span>E-mail: </span>
                <input type="email" name="email" required placeholder="Seu melhor e-mail"/>
            </label>
            <label>
                <span>Telefone: </span>
                <input type="tel" name="telefone" required placeholder="Seu melhor número de telefone"/>
            </label>
            <label>
                <span>Mensagem: </span>
                <input type="text" name="mensagem" required placeholder="Nos conte um pouco sobre seu projeto"/>
            </label>
            <button className={styles.botao}>Enviar</button>
        </form>
    </div>
  )
}

export default FormularioContato