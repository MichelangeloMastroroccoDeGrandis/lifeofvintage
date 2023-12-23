import styles from './css/Contacts.module.css';
const Contacts = () => {
return (
    <div id="contacts">
        <h1>Contacts</h1>
        <div className={styles.container}>
            <p>Email</p>
            <p>Sviluppato da: Michelangelo</p>
            <p>Lascia qui la tua email</p>
        </div>
    </div>
)
};

export default Contacts;