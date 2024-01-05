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
import Bios from './components/Bios'

console.log(Bios)
class App extends React.Component {

  
  render() {

    
    const angeloCaroli = "Angelo Caroli (A.N.G.E.L.O.) è il padre indiscusso del vintage. E il padrino. E il patrono. Si risparmierebbe parecchie fatica ed altrettanta carta con la seguente espressione: Angelo Caroli è il vintage. Sulla breccia dal lontano ’78, il portento di Lugo ne ha fatte di cotte e di crude. Tirato su negozi, curato incredibili esposizioni, costruito, capo dopo capo, uno tra i più forniti e prestigiosi archivi vintage del mondo. Si riprende il fiato. E poi: collaborato con stilisti, riviste di moda, artisti, fotografi, istituzioni accademiche, musei e chi più ne ha più ne metta. Mentre le trame sociali si smagliano e l’estetica dei popoli vacilla, personaggi di spessore e cultura si assumono il compito di portare un lustro passato sulla tavola del presente: grazie al cielo, Angelo è uno di questi.";
    const maurizioDonadi = "Maurizio Donadi (Transnomadica), pistola puntata alla testa(non fatelo!, ne uscireste sconfitti), si definirebbe un libero pensatore. Ahimè, sbaglia di grosso. È ben più di questo. Sovversivo, anarchico, esteta iconoclasta per antonomasia. Un viaggio di trent’anni attraverso la moda maschile(Benetton, Diesel, Ralph Lauren, Armani, Levi’s): dalla gestione di negozi, passando per l’amministrazione di intere regioni e vastissime aree commerciali, si ritrova infine a nutrire il mondo del costume di idee e significati nell’incessante esplorazione di nuove dimensioni narrative. Concept design al suo zenit. Ai ferri corti con la cultura dell’eccesso, della sovrabbondanza, della produzione senza limiti, Maurizio lastrica una personale ed intima via di fuga. Fedele ai principi ultimi della circolarità, con Trasnomadica, Maurizio recupera quel meraviglioso arazzo d’esistenze che ci piace chiamar passato. Il capo d’abbigliamento non diventa che il mezzo per recuperare dall’oblio quelle storie di vita che meritano la luce della ribalta. Il fine è sbalorditivo: una narrazione trasversale di ciò che fu, di ciò che è, di ciò che sarà.";
    const antonioMastrorocco = "Antonio Mastrorocco (One Off) è di certo la guida della banda. Di spirito sensibile ed inquieto, terminati gli studi in Botanica ed Architettura del paesaggio, Antonio volge il suo sguardo verso il Communication Design. Dalla metà degli anni ottanta lo troviamo, in varie vesti, ad ideare ed organizzare, con estro visionario, progetti seminali e rivoluzionari all’interno dell’universo moda, è direttore creativo di Alcuni Giovani Occidentali e fondatore di Futurenet, per citarne alcuni. Con One Off, laboratorio artigianale sperimentale, dona nuova vita ad oggetti stanchi, logori, giunti oramai al capolinea dell’esistenza. Poesia che vince sulla materia, o almeno ci si tenta. Finissimo ed abile comunicatore, conversare con Antonio diventa una meravigliosa e dolce sfida. Potreste arrendervi languidamente alla sua dialettica o, sfruttando magici guizzi ed intuizioni, arricchirvi intellettualmente scoprendo lungo la via paesaggi precedentemente inesplorati.";
    const andreaMaffei = "Andrea Maffei (Velvet For Philosophers) è il giovincello(fanciullo) tra i fondatori. Ingegnere, matematico, filosofo del linguaggio, informatico, gastronomo. E alla fine anche vintagista. Né carne, né pesce, né niente, avrebbe scritto giustamente qualcuno. Correre da una stella cadente all’altra è da sempre la sua vocazione. Lasciategli delle castagnete, una manciata di crepuscoli, dei porcini fritti, e magari qualche pagina di Céline, e forse lo vedrete sorridere. Il ragazzo è davvero così semplice…";

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
}

export default App;
