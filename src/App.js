import './components/css/App.css';
import Header from './components/Header';
import Manifesto from './components/Manifesto';
import Services from './components/Services';
import Biographies from './components/Biographies';
import Contacts from './components/Contacts';
import antonioMastroroccoPicture from './components/images/antonioMastrorocco.jpeg';

function App() {

  const am = [
    {
      id: "am1",
      year: "'57 / '81",
      description: "Nato ad Acquaviva delle Fonti il 18/07/1957. Residente a Bologna in Via Jacopo di Paolo 31. Università di Bologna dal 1977 al 1979. Studia Botanica, floricultura e Architettura del paesaggio presso l’Università di Agraria a Bologna. Post Laurea dal 1980 al 1981 Frequenta un Corso Biennale al CESA Centro Europeo Studi Aziendali in Comunicazione e Marketing."
    },
    {
      id: "am2",
      year: "'82 / '84",
      description: "è art director in Max Information, Agenzia Internazionale di Comunicazione, svolgendo, sotto la Direzione Creativa, tutte le attività di supporto alla realizzazione di strumenti di Comunicazione aziendale. Si occupa prevalentemente della elaborazione della strategia di Comunicazione e gli interventi creativi spaziano dal concept di comunicazione alla realizzazione di commercial televisivi."
    },
    {
      id: "am3",
      year: "1985",
      description: "con Iosa-Ghini, Scozzari, Jori e Carpinteri fonda ALCUNI GIOVANI OCCIDENTALI, una boutique creativa specializzata nella realizzazione di Eventi Speciali ad altissimo impatto scenografico. Swatch, Moschino, Jean-Charles de Castelbajac, Pitti Trend le realizzazioni più emblematiche di quel periodo. Inizia inoltre una lunga collaborazione con il gruppo WP Lavori in Corso dove cura tutte le attività di comunicazione per quasi quindici anni."
    },
    {
      id: "am4",
      year: "1990",
      description: "l’attività di consulenza è molto diversificata ed iniziano le collaborazioni in ambito artistico con illustratori come Igort, Daniele Brolli, Nicola Corona, Stefano Ricci e Francesca Ghermandi e con fotografi come Peter Lindberg, Fabrizio Ferri, Julian Broad, Armin Linke, Paolo Ventura, Nick Scott, Tommaso Sartori e con filmakers come Maurizio Finotto e Flavio Kampah." 
    },
    {
      id: "am5",
      year: "2000",
      description: "fonda con Stefano Martinetto Futurenet, una life style company nata per diffondere nei mercati internazionali brand come Fake London, Evisu Japan, W.&amp;.L.T. Con il gruppo Puma partecipa alla definizione del concetto di Co-Lab che vedrà in seguito applicazioni con le Co-Lab di Puma con Neil Barrett, Alexander McQueen, Mihara Yasuhiro e con Philippe Stark."
    },
    {
      id: "am6",
      year: "2009",
      description: "vince un concorso Internazionale per la progettazione della installazione per la città metropolitana di Bologna nell’ambito delle manifestazioni ufficiali del World Expo 2010 di Shanghai nella sezione UBPA, Urban Best Practice Area."
    },
    {
      id: "am7",
      year: "2010",
      description: "nasce il progetto Antonio Mastrorocco One Off un laboratorio artigianale di realizzazione di oggetti e scenografie in ambito Art Design. Inizia la sperimentazione di manufatti di origine industriale che vengoo sottoposti ad un processo di rielaborazione attraverso la trasformazione della funzione d’uso denominata upcycling."
    }
  ]

  return (
    <div className="App">
      <Header />
      <Manifesto />
      <Services />
      <Biographies arr={am} img={antonioMastroroccoPicture} />
      <Contacts />
    </div>
  );
}

export default App;
