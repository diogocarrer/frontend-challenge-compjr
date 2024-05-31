/* translate */
import { } from './../translate/i18n';
import { useTranslation } from 'react-i18next'
/* styles */
import styles from './../styles/BotaoSaibaMais.module.css';

const BotaoSaibaMais = () => {
  const { t } = useTranslation();

  return (
    <div>
      <button className={styles.saiba_mais}>{t('Saiba Mais')}</button>
    </div>
  )
}

export default BotaoSaibaMais

