import styles from '../css/Biographies.module.css';
import { useTranslation } from 'react-i18next'

const Biographies = ({arr, img, name, surname,  link}) => {
    const { t } = useTranslation("global")

return (<div className={styles.container} >
            <div  className={styles.backgroundImage} style={{backgroundImage: `url("${img}")`}}></div>
                <div className={styles.bio}>
                    <h2>{name}</h2>
                    <h2>{surname}</h2>
                    <p>{arr}</p>
                    <a href={link} rel="noreferrer" target="_blank">{t("biografie.link")}</a>
                </div>
            
        </div>)
};

export default Biographies;
