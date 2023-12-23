import styles from './css/Biographies.module.css';
const Biographies = ({arr, img}) => {

    const textBio = arr.map(el => {
        return  <div key={el.key} className={styles.bioWrap}>
                    <h2>{el.year}</h2>
                    <p>{el.description}</p>
                </div>
    })

return (
    <div id="biographies">
        <h1>Biografie</h1>
        <div className={styles.container} >
            <div className={styles.backgroundImage} style={{backgroundImage: `url("${img}")`}}>
                <div className={styles.textWrap}>
                    {textBio}
                </div>
            </div>
        </div>
    </div>
)
};

export default Biographies;
