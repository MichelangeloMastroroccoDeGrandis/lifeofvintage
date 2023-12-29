import styles from './css/Carousel.module.css';
import React, { useEffect, useState } from 'react';

const Carousel = ({images}) => {
    const [current, setCurrent] = useState(0);
    const [autoplay, setAutoplay] = useState(null);

    useEffect(() => {
        setTimeout(() =>{slide()},500)
    })

    const slide = () => {
        setCurrent(current === images.length - 1 ? 0 : current + 1)
    }


    return (
        <div className={styles.carousel}>
            <div className={styles.carouselWrap}>
                {images.map((el, index) => {
                    return(
                            <div key={index} className={index === current ? styles.carouselCardActive : styles.carouselCardNotActive}>
                                <img className={styles.images} src={el.image} alt="images" />
                            </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Carousel