import styles from './css/Header.module.css'
import AnchorLink from "react-anchor-link-smooth-scroll";
import React, { useState } from 'react';
import { motion } from "framer-motion";

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    }

    return (<header className={styles.header}>
            <div className={styles.container}>
                <motion.h1 initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 3 }} className={styles.logo}>life of vintage</motion.h1>
                <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 3 }} className={styles.hamburger} onClick={toggleNav}>
                    <div className={`${styles.hamburgerLine} ${isOpen ? styles.cross1 : ''}`}></div>
                    <div className={`${styles.hamburgerLine} ${isOpen ? styles.cross2 : ''}`}></div>
                </motion.div>
            </div>
                <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
                    <ul>
                        <li><span>1</span><AnchorLink offset='100' href="#manifesto"><button>Manifesto</button></AnchorLink></li>
                        <li><span>2</span><AnchorLink offset='100' href="#services"><button>Servizi</button></AnchorLink></li>
                        <li><span>3</span><AnchorLink offset='100' href="#biographies"><button>Biografie</button></AnchorLink></li>
                        <li><span>4</span><AnchorLink offset='100' href="#contacts"><button>Contatti</button></AnchorLink></li>
                    </ul> 
                </nav>

                
                <div className={styles.payoff}>
                    <ul>
                        <motion.li whileHover={{ scale: .95 }} ><p className={styles.p1}>Archives</p></motion.li>
                        <motion.li whileHover={{ scale: .95 }}><p  className={styles.p2}>Artisan</p></motion.li>
                        <motion.li whileHover={{ scale: .95 }}><p className={styles.p3}>Artistic Upcycling</p></motion.li>
                    </ul>
               
                </div>
            </header>)

};


export default Header;