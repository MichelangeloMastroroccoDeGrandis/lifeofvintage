import { motion } from "framer-motion";
import styles from './css/Contacts.module.css';
const Contacts = () => {
return (
    <div id="contacts">
        <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} exit={{ opacity: 0}} transition={{duration: 1, delay: .5}} >Contatti</motion.h1>
        <div className={styles.container}>
            <p>Email</p>
            <p>Sviluppato da: Michelangelo</p>
            <p>Lascia qui la tua email</p>
        </div>
    </div>
)
};

export default Contacts;