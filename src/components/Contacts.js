import { motion } from "framer-motion";
import styles from './css/Contacts.module.css';
const Contacts = () => {
return (
    <div id="contacts">
        <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} exit={{ opacity: 0}} transition={{duration: 1, delay: .5}} className={styles.titleContacts}>Our Channels</motion.h1>
        <div className={styles.container}>
            <div className={styles.contacts}>
                <div className={styles.collaborators}>
                    <ul>
                        <li><p>ANGELO CAROLI</p></li>
                        <li><p>+393487704170</p></li>
                        <li><p>a.angelo@angelo.it</p></li>
                    </ul>
                </div>
                <div className={styles.collaborators}>
                    <ul>
                        <li><p>MAURIZIO DONADI</p></li>
                        <li><p>+19173495255</p></li>
                        <li><p>Mail</p></li>
                    </ul>
                </div>
                <div className={styles.collaborators}>
                    <ul>
                        <li><p>ANDREA MAFFEI</p></li>
                        <li><p>+393934385554</p></li>
                        <li><p>sembrandreamaffei@gmail.com</p></li>
                    </ul>
                </div>
                <div className={styles.collaborators}>
                    <ul>
                        <li><p>ANTONIO MASTROROCCO</p></li>
                        <li><p>+393483608366</p></li>
                        <li><p>antonio.oneoff@gmail.com</p></li>
                    </ul>
                </div>
            </div>
            <div className={styles.developer}>
                <p>Sviluppato da: <a href="https://mastroroccodegrandis.com/">MMDG</a></p>
            </div>
            
        </div>
    </div>
)
};

export default Contacts;