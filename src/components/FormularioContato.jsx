/* react */
import { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaComment } from 'react-icons/fa';
import { postContato } from '../services/api';
/* styles */
import styles from './../styles/FormularioContato.module.css';
/* translate */
import { } from './../translate/i18n';
import { useTranslation } from 'react-i18next'

const FormularioContato = () => {
    const { t } = useTranslation();
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

        if (name === 'telefone') {
            setFormData({ ...formData, [name]: formatPhoneNumber(value) });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const formatPhoneNumber = (value) => {
        const phoneNumber = value.replace(/\D/g, '');
        const phoneNumberLength = phoneNumber.length;

        if (phoneNumberLength < 3) {
            return phoneNumber;
        } else if (phoneNumberLength < 7) {
            return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
        } else if (phoneNumberLength < 11) {
            return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 6)}-${phoneNumber.slice(6, 10)}`;
        } else {
            return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let formIsValid = true;
        const newErrors = { nome: '', email: '', telefone: '', mensagem: '' };

        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                formIsValid = false;
                newErrors[key] = t('Este campo é obrigatório');
            }
        });

        if (formData.telefone && !/^(\(\d{2}\) \d{4,5}-\d{4}|\(\d{2}\) \d{5}-\d{4})$/.test(formData.telefone)) {
            formIsValid = false;
            newErrors['telefone'] = t('Telefone inválido');
        }

        if (formData.email && !validateEmail(formData.email)) {
            formIsValid = false;
            newErrors['email'] = t('E-mail inválido');
        }

        if (!formIsValid) {
            setErrors(newErrors);
            setErrorMessage(t('Por favor, corrija os erros no formulário.'));
            setSuccessMessage('');
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
        } else {
            try {
                await postContato(formData);
                setFormData({
                    nome: '',
                    email: '',
                    telefone: '',
                    mensagem: ''
                });
                setErrors({ nome: '', email: '', telefone: '', mensagem: '' });
                setSuccessMessage(t('Formulário enviado com sucesso!'));
                setErrorMessage('');
                setTimeout(() => {
                    setSuccessMessage('');
                }, 3000);
            } catch (error) {
                console.error("There was an error submitting the form!", error);
                setErrorMessage(t('Ocorreu um erro ao enviar o formulário.'));
                setTimeout(() => {
                    setErrorMessage('');
                }, 3000);
            }
        }
    };

    return (
        <div>
            <hr></hr>
            <h1 className={styles.titulo}>{t('Precisando de algo específico?')}</h1>
            <h2 className={styles.subtitulo}>{t('Vamos discutir o seu próximo projeto!')}</h2>

            <form onSubmit={handleSubmit}>
                <h1 className={styles.titulo_formulario}>Entrar em contato</h1>
                <p className={styles.subtitulo_formulario}>Temos uma equipe pronta para conversar com você e esclarecer quaisquer dúvidas sobre a nossa empresa, nossos serviços e processos.</p>
                <label>
                    <span><FaUser className={styles.icon} /></span>
                    <input type="text" name="nome" value={formData.nome} onChange={handleChange} placeholder={t('Seu nome')} />
                    {errors.nome && <h4 className={styles.error}>{errors.nome}</h4>}
                </label>
                <label>
                    <span><FaEnvelope className={styles.icon} /></span>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder={t('Seu melhor e-mail')} />
                    {errors.email && <h4 className={styles.error}>{errors.email}</h4>}
                </label>
                <label>
                    <span><FaPhone className={styles.icon} /></span>
                    <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} placeholder={t('Seu melhor número de telefone')} />
                    {errors.telefone && <h4 className={styles.error}>{errors.telefone}</h4>}
                </label>
                <label>
                    <span><FaComment className={styles.icon} /></span>
                    <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} placeholder={t('Nos conte um pouco sobre seu projeto')}></textarea>
                    {errors.mensagem && <h4 className={styles.error}>{errors.mensagem}</h4>}
                </label>
                <button type="submit" className={styles.botao}>{t('Enviar')}</button>
                {successMessage && <h4 className={styles.successMessage}>{successMessage}</h4>}
                {errorMessage && <h4 className={styles.errorMessage}>{errorMessage}</h4>}
            </form>
        </div>
    );
};

export default FormularioContato;
