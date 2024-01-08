import { motion } from "framer-motion";
import styles from '../css/Manifesto.module.css';
import { useTranslation } from 'react-i18next'

const EndManifesto = () => {
    const { t } = useTranslation("global")
    return (
        <div className={styles.end} >
            
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2}} >{t("vision.end1")}</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: .5}} >{t("vision.end2")}</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: 1.5}} >{t("vision.end3")}</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: 1}} >{t("vision.end4")}</motion.span>
            <span >{t("vision.end5")}</span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: .2}} >{t("vision.end6")}</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: .75}} >{t("vision.end7")}</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: .5}} >{t("vision.end8")}</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: 1}} >{t("vision.end9")}</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2}} >{t("vision.end10")}</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: 1.5}} >{t("vision.end11")}</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: 2}} >{t("vision.end12")}</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: .35}} >{t("vision.end13")}</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: 1.75}} >{t("vision.end14")}</motion.span>
            <span >{t("vision.end15")}</span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: .75}} >{t("vision.end16")}</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2}} >{t("vision.end17")}</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: .35}} >{t("vision.end18")}</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: .75}} >{t("vision.end19")}</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: 1.25}} >{t("vision.end20")}</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: .5}} >{t("vision.end21")}</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: 1.5}} >{t("vision.end22")}</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: .25}} >{t("vision.end23")}</motion.span>
            <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration: 2, delay: .2}} >{t("vision.end24")}</motion.span>
            </div>
    )
}

export default EndManifesto;