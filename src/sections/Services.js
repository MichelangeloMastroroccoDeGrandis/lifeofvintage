import { motion } from "framer-motion";
import styles from '../css/Services.module.css';
import { useTranslation } from 'react-i18next';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import carousel1 from '../media/carousel/1.jpeg';
import carousel2 from '../media/carousel/2.jpeg';
import carousel3 from '../media/carousel/3.jpeg';
import carousel4 from '../media/carousel/4.jpeg';
import carousel5 from '../media/carousel/5.jpeg';
import carousel6 from '../media/carousel/6.jpeg';
import carousel7 from '../media/carousel/7.jpeg';

const Services = ()=> {
    const { t } = useTranslation("global")
return (
    <div id="services" className={styles.services}>

        <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} exit={{ opacity: 0}} transition={{duration: 1, delay: .5}}>Projects</motion.h1>

        <div className={styles.container}>
            <motion.div id="aziende" initial={{ opacity: 0, y: 200 }} whileInView={{ opacity: 1, y: 0 }} transition={{duration: 2}} viewport={{ once: true }}>

                    <p>{t("servizi.b1")}</p>

                    <Carousel dynamicHeight="true">
                <div className={styles.imageResize}>
                    <img src={carousel1} alt="" />
                </div>
                <div className={styles.imageResize}>
                    <img src={carousel2} alt="" />
                </div>
                <div className={styles.imageResize}>
                    <img src={carousel3} alt="" />
                </div>
                <div className={styles.imageResize}>
                    <img src={carousel4} alt="" />
                </div>
                <div className={styles.imageResize}>
                    <img src={carousel5} alt="" />
                </div>
                <div className={styles.imageResize}>
                    <img src={carousel6} alt="" />
                </div>
                <div className={styles.imageResize}>
                    <img src={carousel7} alt="" />
                </div>
                
            </Carousel>

            </motion.div>
        </div>
    </div>
)
};

export default Services;
