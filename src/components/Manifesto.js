import { motion } from "framer-motion";
import styles from './css/Manifesto.module.css';
import { useTranslation } from 'react-i18next'


    
const Manifesto = () => {
    const { t } = useTranslation("global")

 return (
    <div id="vision">
        <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} exit={{ opacity: 0}} transition={{duration: 1, delay: .5}}>Vision</motion.h1>
        <div className={styles.container}>
            <div>
                <div className={styles.lineTop}></div>
                    <p className={styles.textLeft}>
                    {t("vision.v1")}
                    </p>
                    <div className={styles.eye}>
                        <span>{t("vision.v2")}</span>
                        <div>
                            
                        </div>
                    </div>
                <div className={styles.lineRightEye}></div>
            </div>
            <div className={styles.textRight}>
                <p className={styles.margin}>{t("vision.v3")}</p>
            </div>
        </div>
        <div className={styles.container}>
        <div className={styles.lineLeft}></div>
            <p className={styles.margin}>{t("vision.v4")}</p>
                <div className={styles.lineRight}></div>
            <p className={styles.margin}>{t("vision.v5")}</p>
        </div>
        <div className={styles.container}>
            <p className={styles.margin}>{t("vision.v6")}</p>
        </div>
        <div className={styles.lineCentre}></div>
        <p className={styles.filo}>{t("vision.v7")}</p>
    <div className={styles.lineCentre}></div>
        <div className={styles.container}>
            <p className={styles.margin}>{t("vision.v8")}</p>

            <div className={styles.end} >
            
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2}} >S</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: .5}} >a</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: 1.5}} >r</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: 1}} >à</motion.span>
            <span > </span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: .2}} >p</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: .75}} >o</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: .5}} >s</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: 1}} >s</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2}} >i</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: 1.5}} >b</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: 2}} >i</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: .35}} >l</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: 1.75}} >e</motion.span>
            <span > </span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: .75}} >s</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2}} >v</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: .35}} >e</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: .75}} >l</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: 1.25}} >a</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: .5}} >r</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: 1.5}} >l</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: .25}} >o</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: .2}} >?</motion.span>
            </div>
        </div>
    </div>
 )
};

export default Manifesto;