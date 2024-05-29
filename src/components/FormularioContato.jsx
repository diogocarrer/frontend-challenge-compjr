import styles from './../styles/FormularioContato.module.css';
import { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaComment } from 'react-icons/fa';

const FormularioContato = () => {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
    });

    const [errors, setErrors] = useState({
        nome: '',
        email: '',
        telefone: '',
        mensagem: ''
    });

    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let formIsValid = true;
        const newErrors = { nome: '', email: '', telefone: '', mensagem: '' };

        // Check if each field is empty
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                formIsValid = false;
                newErrors[key] = 'Este campo é obrigatório';
            }
        });

        // Validate telefone format only if it's not empty
        if (formData.telefone && !/^(\d{10}|\d{11})$/.test(formData.telefone)) {
            formIsValid = false;
            newErrors['telefone'] = 'Telefone inválido';
        }

        // Validate email format only if it's not empty
        if (formData.email && !validateEmail(formData.email)) {
            formIsValid = false;
            newErrors['email'] = 'E-mail inválido';
        }

        // If form is invalid, set errors
        if (!formIsValid) {
            setErrors(newErrors);
            setErrorMessage('Por favor, corrija os erros no formulário.');
            setSuccessMessage('');

            // Clear errors message after 3 seconds
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
        } else {
            // Form is valid, submit it
            console.log("Form submitted:", formData);
            setFormData({
                nome: '',
                email: '',
                telefone: '',
                mensagem: ''
            });
            // Clear errors and set success message
            setErrors({ nome: '', email: '', telefone: '', mensagem: '' });
            setSuccessMessage('Formulário enviado com sucesso!');
            setErrorMessage('');

            // Clear success message after 3 seconds
            setTimeout(() => {
                setSuccessMessage('');
            }, 3000);
        }
    };

    return (
        <div>
            <hr></hr>
            <h1 className={styles.titulo}>Precisando de algo específico?</h1>
            <h2 className={styles.subtitulo}>Vamos discutir o seu próximo projeto!</h2>

            <form onSubmit={handleSubmit}>
                <h1 className={styles.titulo_formulario}>Entrar em contato</h1>
                <p className={styles.subtitulo_formulario}>Temos uma equipe pronta para conversar com você e esclarecer quaisquer dúvidas sobre a nossa empresa, nossos serviços e processos.</p>
                <label>
                    <span><FaUser className={styles.icon} /> Nome: </span>
                    <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder="Seu nome" />
                    {errors.nome && <h4 className={styles.error}>{errors.nome}</h4>}
                </label>
                <label>
                    <span><FaEnvelope className={styles.icon} /> E-mail: </span>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Seu melhor e-mail" />
                    {errors.email && <h4 className={styles.error}>{errors.email}</h4>}
                </label>
                <label>
                    <span><FaPhone className={styles.icon} /> Telefone: </span>
                    <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} placeholder="Seu melhor número de telefone" />
                    {errors.telefone && <h4 className={styles.error}>{errors.telefone}</h4>}
                </label>
                <label>
                    <span><FaComment className={styles.icon} /> Mensagem: </span>
                    <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} placeholder="Nos conte um pouco sobre seu projeto"></textarea>
                    {errors.mensagem && <h4 className={styles.error}>{errors.mensagem}</h4>}
                </label>
                <button type="submit" className={styles.botao}>Enviar</button>
                {successMessage && <h4 className={styles.successMessage}>{successMessage}</h4>}
                {errorMessage && <h4 className={styles.errorMessage}>{errorMessage}</h4>}
            </form>
        </div>
    );
};

export default FormularioContato;
