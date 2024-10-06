import Carousel from 'react-bootstrap/Carousel'
import Slide from './Slide';
import { useState } from 'react';
const Slider = ({Image}) => {
    
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleSelect = (e) =>{
        setCurrentIndex(e);
    }

    const handlePrev = () =>{
        setCurrentIndex((currentIndex - 1 + Image.length)%Image.length);
    }

    const handleNext = () =>{
        setCurrentIndex((currentIndex + 1)%Image.length);
    }

    return (
        <>
             <Carousel activeIndex={currentIndex} onSelect={handleSelect}>
                {Image.map((image) => (
                    <Carousel.Item key={image.pid}>
                        <img
                            className="d-block w-100"
                            src={image.image}
                            alt={image.title || 'Slide image'}
                        />
                
                </Carousel.Item>
                ))  }
            </Carousel>
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
        </>
    )
}

export default Slider;