import { motion } from "framer-motion";
import styles from './css/Manifesto.module.css';

const Manifesto = () => {
 return (
    <div id="vision">
        <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} exit={{ opacity: 0}} transition={{duration: 1, delay: .5}}>Vision</motion.h1>
        <div className={styles.container}>
            <div>
                <div className={styles.lineTop}></div>
                    <p className={styles.textLeft}>
                    Esteti pensatori (dallo sguardo pensoso?) frugano nel vintage 
                    alla ricerca di un storia che rifiuta di farsi da parte.
                    </p>
                    <div className={styles.eye}>
                        <span>Nulla sfugge ai loro occhi.</span>
                        <div>
                            
                        </div>
                    </div>
                <div className={styles.lineRightEye}></div>
            </div>
            <div className={styles.textRight}>
                <p className={styles.margin}>
                    Nelle mode e nei costumi del passato si 
                nasconde un’inestimabile collezione di linguaggi.
                </p>
            </div>
        </div>
        <div className={styles.container}>
        <div className={styles.lineLeft}></div>
            <p className={styles.margin}>
                Tessuti e materia pronti ad evocare nobili salotti, 
            campi di battaglia e vite bagnate di duro lavoro.</p>
                <div className={styles.lineRight}></div>
            <p className={styles.margin}>
            Dettagli e fogge a schiudere universi di simboli e 
            segni da ricomporre ed unificare.
            </p>
        </div>
        <div className={styles.container}>
            <p className={styles.margin}>
                Tra riviste consumate e libri polverosi, 
            menti inquiete si agitano febbrilmente.
            </p>
        </div>
        <div className={styles.lineCentre}></div>
        <p className={styles.filo}>Un filo esiste.</p>
    <div className={styles.lineCentre}></div>
        <div className={styles.container}>
            <p className={styles.margin}>
            Un filo arcano, occulto, lega le modernità senza 
            tempo di ciò che fu al firmamento del nostro futuro.
            </p>
            <div className={styles.end}>
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