import { motion } from "framer-motion";
import styles from './css/Services.module.css';
import { useTranslation } from 'react-i18next'
const Services = ()=> {
    const { t } = useTranslation("global")
return (
    <div id="services" className={styles.services}>

        <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} exit={{ opacity: 0}} transition={{duration: 1, delay: .5}}>What We Do</motion.h1>

        <div className={styles.container}>
            <motion.div id="aziende" initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{duration: 2}} viewport={{ once: true }}>

                <h2 className={styles.serviceListTitle}>{t("servizi.titleBrand")}</h2>
                <ul className={styles.serviceList}>
                    <li><p>{t("servizi.b1")}</p></li>
                    <li><p>{t("servizi.b2")}</p></li>
                    <li><p>{t("servizi.b3")}</p></li>
                    <li><p>{t("servizi.b4")}</p></li>
                    <li><p>{t("servizi.b5")}</p></li>
                    <li><p>{t("servizi.b6")}</p></li>
                    <li><p>{t("servizi.b7")}</p></li>
                </ul>
            </motion.div>
            <motion.div id="retail" initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{duration: 2}} viewport={{ once: true }}>
           
                <h2 className={styles.serviceListTitle}>{t("servizi.titleRetail")}</h2>
                <ul className={styles.serviceList}>
                    <li><p>{t("servizi.r1")}</p></li>
                    <li><p>{t("servizi.r2")}</p></li>
                    <li><p>{t("servizi.r3")}</p></li>
                    <li><p>{t("servizi.r4")}</p></li>
                    <li><p>{t("servizi.r5")}</p></li>
                    <li><p>{t("servizi.r6")}</p></li>
                    
                </ul>
            </motion.div>
            <motion.div id="designer" initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{duration: 2}} viewport={{ once: true }}>
               
                <h2 className={styles.serviceListTitle}>{t("servizi.titleDesigner")}</h2>
                <ul className={styles.serviceList}>
                    <li><p>{t("servizi.d1")}</p></li>
                    <li><p>{t("servizi.d2")}</p></li>
                    <li><p>{t("servizi.d3")}</p></li>
                    <li><p>{t("servizi.d4")}</p></li>
                    <li><p>{t("servizi.d5")}</p></li>
                    <li><p>{t("servizi.d6")}</p></li>
                    <li><p>{t("servizi.d7")}</p></li>
                    <li><p>{t("servizi.d8")}</p></li>
                
                </ul>
            </motion.div>
        </div>
    </div>
)
};

export default Services;
