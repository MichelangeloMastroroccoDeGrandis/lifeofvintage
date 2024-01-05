import { useTranslation } from 'react-i18next'
import styles from './css/LanguageSelector.module.css'
const LanguageSelector = () => {
    const { t, i18n } = useTranslation("global")

    return <div className={styles.container}>
            <button className={styles.button} onClick={() => i18n.changeLanguage("it")}>It</button>
            <button className={styles.button} onClick={() => i18n.changeLanguage("en")}>En</button>
    </div>
}

export default LanguageSelector;