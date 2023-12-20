import styles from './css/Manifesto.module.css';
const Manifesto = () => {
 return (
    <div id="manifesto">
        <h1 className={styles.logo}>The Manifesto</h1>
        <div className={styles.container}>
            <div>
                <div className={styles.lineTop}></div>
                    <p className={styles.textLeftTop}>
                    Pellentesque auctor tortor eu urna elementum, 
                    eu gravida purus tempus. Nulla tincidunt suscipit sollicitudin.
                    </p>
                <div className={styles.lineBottom}></div>
            </div>
            <div className={styles.textRightBottom}>
                <p>Vivamus quis lorem at tellus vulputate 
                    luctus at nec diam. Ut ac elementum urna. 
                    Quisque blandit, magna sit amet vulputate 
                    rhoncus, sem justo pharetra nunc, sit amet 
                    pretium enim justo ut ante. Donec eu ullamcorper odio.</p>
            </div>
        </div>
        <div className={styles.container}>
        <div className={styles.lineRight}></div>
            <p>Fusce dignissim, mauris sit amet scelerisque 
                ultricies, diam eros congue dolor, ac tristique 
                tortor ex et diam. Ut vel lacus tristique erat 
                maximus ultricies id sed massa.</p>
                <div className={styles.lineRight}></div>
        </div>
        <div className={styles.container}>
            <p>Maecenas est dolor, dignissim a tempor in, 
                mollis ac nisl. Nullam sit amet neque est. 
                Duis tincidunt, neque eu aliquam euismod, 
                felis mi tempor tortor, vitae gravida enim 
                enim eu mi. Sed pellentesque, turpis imperdiet 
                tincidunt ultrices, augue arcu ullamcorper nibh, 
                at feugiat orci enim sed nunc. Quisque rhoncus 
                at tellus vel dapibus. Cras hendrerit bibendum 
                nisl, eget aliquet enim vulputate sit amet.</p>
        </div>
    </div>
 )
};

export default Manifesto;