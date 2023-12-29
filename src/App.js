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
import Socials from './components/Socials';

class App extends React.Component {

  render() {
    const ac = "Testo Teaser Angelo Caroli";
    const md = "Testo Teaser Maurizio Donadi";
    const am = "Testo Teaser Antonio Mastrorocco";

    const am_link = "https://antoniomastrorocco.com/";
    const md_link = "https://www.transnomadica.com/";
    const ac_link = "https://www.angelovintage.com/";

    
    return (

      <div className="App">
      <Header />
      <Socials />
      <Manifesto />
      <Services />
      <div id="biographies">
        <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} exit={{ opacity: 0}} transition={{duration: 1, delay: .5}}>Who We Are</motion.h1>
        <Biographies arr={ac} img={acPic} name="Angelo" surname="Caroli" link={ac_link} />
        <Biographies arr={md} img={mdPic} name="Maurizio" surname="Donadi" link={md_link} />
        <Biographies arr={am} img={amPic} name="Antonio" surname="Mastrorocco" link={am_link} />
      </div>
      <Contacts />
    </div>
     
    );
  }
}

export default App;
