import corp from './video/corp.mp4';
import retail from './video/retail.mp4';
import designer from './video/designer.mp4';
import styles from './css/Services.module.css';
const Services = ()=> {
return (
    <div id="services" className={styles.services}>

        <h1>Servizi</h1>

        <div className={styles.container}>
            <div id="aziende">
            <div className={styles.wrapVideo}>
                <video src={corp} autoPlay={true} loop={true} muted />
            </div>
                
               
                <h2 className={styles.serviceListTitle}>Per le Aziende</h2>
                <ul className={styles.serviceList}>
                    <li><p>Catalogazione, archiviazione e digitalizzazione archivi aziendali (da giugno)</p></li>
                    <li><p>Perizie e valutazioni degli archivi stilistici aziendali</p></li>
                    <li><p>Valutazioni economiche per inventari aziendali</p></li>
                    <li><p>Gestione vendite di archivi inutilizzati</p></li>
                    <li><p>Ricerca capi dell'heritage aziendale sia a scopo di acquisizione sia per censimento presso archivi esterni</p></li>
                    <li><p>Rivalutazione del magazzino tessuti “fine pezza” attraverso progetti di upcycling</p></li>
                    <li><p>Rivalutazione fine serie e campionari inutilizzati attraverso progetti di upcycling in edizione limitata da rivendere nei canali di distribuzione aziendali come capsule speciali</p></li>
                </ul>
            </div>
            <div id="retail">
            <div className={styles.wrapVideo}>
            <video src={retail} autoPlay={true} loop={true} muted />
            </div>
                <h2 className={styles.serviceListTitle}>Per il Retail</h2>
                <ul className={styles.serviceList}>
                    <li><p>Vendita prodotto vintage per inserimento in store</p></li>
                    <li><p>Presentazione campionari di capi upcycled o re-worked</p></li>
                    <li><p>Progettazione di corner vintage coerenti con il pricing dello store e gestione di eventuali allestimenti e riassortimenti</p></li>
                    <li><p>Refresh dell'ambientazione dello store in accordo con i nuovi stilemi estetici dei prodotti vintage e upcycling</p></li>
                    <li><p>Struttura dell'offerta di capi vintage per realizzazione di pop up, concept brand, progetti di comunicazione</p></li>
                    <li><p>Co-branding con vintage brand</p></li>
                    <li><p>Progettazione del concept design vintage industrial per showroom, eventi aziendali commerciali e di comunicazione</p></li>
                    <li><p>Noleggio di oggetti rigenerati per nuovi concept display e manifestazioni culturali</p></li>
                    <li><p>Modifica di oggetti di proprietà del committente in nuova estetica Art Design</p></li>
                    <li><p>Store concept e shop-in-shop design</p></li>
                    <li><p>Space decoration (retail, showrooms, offices, tradeshows, ecc.)</p></li>
                    <li><p>Visual brand presentations and events</p></li>
                </ul>
            </div>
            <div id="designer">
                <div className={styles.wrapVideo}>
                <video src={designer} autoPlay={true} loop={true} muted />
                </div>
                <h2 className={styles.serviceListTitle}>Per i designer</h2>
                <ul className={styles.serviceList}>
                    <li><p>Consultazione archivi con possibilità di noleggio</p></li>
                    <li><p>Consultazione archivi con possibilità di acquisto</p></li>
                    <li><p>Ricerche personalizzate su commissione per acquisto o noleggio capi in archivi specifici</p></li>
                    <li><p>Consulenza e collaborazione per ricerche capi su commissione</p></li>
                </ul>
            </div>
        </div>
    </div>
)
};

export default Services;
