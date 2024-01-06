import React from 'react';
import './components/css/App.css';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Manifesto from './components/Manifesto';
import Services from './components/Services';
import Biographies from './components/Biographies';
import Contacts from './components/Contacts';
import amPic from './components/images/am.jpeg';
import mdPic from './components/images/md.jpeg';
import acPic from './components/images/ac.jpg';
import am2Pic from './components/images/am2.jpg';
import Socials from './components/Socials';
import { useTranslation } from 'react-i18next'

const App = () => {
  const { t } = useTranslation("global")

  

    const angeloCaroli = t("biografie.acar");
    const maurizioDonadi = t("biografie.mdon");
    const antonioMastrorocco = t("biografie.amas");
    const andreaMaffei = t("biografie.amaf");

    const am_link = "https://antoniomastrorocco.com/";
    const am2_link = "https://antoniomastrorocco.com/";
    const md_link = "https://www.transnomadica.com/";
    const ac_link = "https://www.angelovintage.com/";

    
    return (

      <div className="App">
      <Header />
      <Socials />
      <Manifesto />
      <Services />
      <div id="biographies">
        <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} exit={{ opacity: 0}} transition={{duration: 1, delay: .5}}>Portraits</motion.h1>
        <Biographies arr={angeloCaroli} img={acPic} name="Angelo" surname="Caroli" link={ac_link} />
        <Biographies arr={maurizioDonadi} img={mdPic} name="Maurizio" surname="Donadi" link={md_link} />
        <Biographies arr={antonioMastrorocco} img={amPic} name="Antonio" surname="Mastrorocco" link={am_link} />
        <Biographies arr={andreaMaffei} img={am2Pic} name="Andrea" surname="Maffei" link={am2_link} />
      </div>
      <Contacts />
    </div>
     
    );
  
}


export default App;
