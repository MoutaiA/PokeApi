import React, { useState, useEffect } from 'react';
import './Carousel.css';


function importAllImages(arrayImages) {
    return arrayImages.keys().map(arrayImages);
}

function getImage(index) {
    const carouselImages = importAllImages(require.context('../../public/images/carousel/', false, /\.png/));
    return carouselImages[index].default;
}

function Carousel() {

    const [index, setIndex] = useState(0);
    const arrImages = getImage(index);
    const [image, setImage] = useState(arrImages);

    let handleDecrement = () => {
        if (index === 0) {
            setIndex(5)
        } else {
            setIndex(index - 1)
        }
    }

    let handleIncrement = () => {
        if (index === 5) {
            setIndex(0)
        } else {
            setIndex(index + 1)
        }
    }

    useEffect(() => {
        setImage(arrImages)
    }, [index, arrImages])

    return (
        <div className="carousel-container">
            <div className="carousel-image">
                <img src={image} alt="Carousel" />
            </div>
            <div className="carousel-buttons">
                <button onClick={() => handleDecrement()}>←</button>
                <button onClick={() => handleIncrement()}>→</button>
            </div>
        </div>
    );
}

export default Carousel;