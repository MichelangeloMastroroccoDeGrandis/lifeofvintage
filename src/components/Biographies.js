import { useState, useRef, useEffect } from 'react';
import styles from './css/Biographies.module.css';

const Biographies = ({arr, img}) => {

    const myElementRef = useRef(null);
    const [positionLeft, setPositionLeft] = useState(0);
    const [hitRight, setHitRight] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const el = myElementRef.current;
          setPositionLeft(el.scrollLeft);
        };


        const element = myElementRef.current;
        element.addEventListener("scroll", handleScroll);
        const maxWidth = element.scrollWidth;
        const offSet = element.offsetWidth;

        return () => {
            console.log(`add: ${positionLeft + offSet}`);
            console.log(`tot: ${maxWidth - 100}`);
          element.removeEventListener("scroll", handleScroll);
          if(positionLeft + offSet >=  maxWidth - 100) {
            setHitRight(true);
          } else {
            setHitRight(false);
          }
        };
      });

    

      const thumb = hitRight ? 'check': 'arrow';
 
    const textBio = arr.map(el => {
        return  <div key={el.id} className={styles.bioWrap}>
                    <h2>{el.year}</h2>
                    <p>{el.description}</p>
                </div>
    })

return (
    <div className="biographies">
        
        <h1>Biografie</h1>
        <div className={styles.container} >
            <div className={styles.backgroundImage} style={{backgroundImage: `url("${img}")`}}>
                <div  ref={myElementRef} className={`textWrap ${thumb}`}>
                    {textBio}
                </div>
            </div>
        </div>
    </div>
)
};

export default Biographies;
