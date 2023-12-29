import styles from './css/Biographies.module.css';

const Biographies = ({arr, img, name, surname, link}) => {

return (<div className={styles.container} >
            <div  className={styles.backgroundImage} style={{backgroundImage: `url("${img}")`}}></div>
                <div className={styles.bio}>
                    <h2>{name}</h2>
                    <h2>{surname}</h2>
                    <p>{arr}</p>
                    <a href={link} rel="noreferrer" target="_blank">Altro</a>
                </div>
            
        </div>)
};

export default Biographies;
