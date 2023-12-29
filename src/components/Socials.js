import styles from './css/Socials.module.css';
import linkedin from './images/linkedin.png';
const Socials = () => {
    return(
        <a href="https://www.linkedin.com/" rel="noreferrer" target="_blank">
            <div className={styles.socials} style={{backgroundImage: `url("${linkedin}")`}}></div>
        </a>
    )
}

export default Socials