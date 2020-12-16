import React, { useState } from 'react';
import './Carousel.css';


function importAllImages(arrayImages) {
    return arrayImages.keys().map(arrayImages);
}

function getImage(index) {
    const carouselImages = importAllImages(require.context('../public/images/carousel/', false, /\.png/));
    return carouselImages[index].default;
}

function Carousel() {

    const [index, setIndex] = useState(0);
    const arrImages = getImage(index);
    const [image, setImage] = useState(arrImages);

    let handleIncrement = () => {
        if (index === 4) {
            setIndex(0)

        } else {
            setIndex(index + 1)
        }
        setImage(arrImages)
    }

    let handleDecrement = () => {
        if (index === 0) {
            setIndex(4)
        } else {
            setIndex(index - 1)
        }
        setImage(arrImages)
    }


    return (
        <div className="carousel-container">
            <img src={image} alt="Carousel" />
            <button onClick={handleDecrement.bind(this)}>-</button>
            <button onClick={handleIncrement.bind(this)}>+</button>
        </div>
    );
}

export default Carousel;