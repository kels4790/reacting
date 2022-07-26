import trill from '../trill.jpg';
import trill1 from '../trill1.jpg';
import React, { useState } from 'react';
import {
    Carousel, 
    CarouselItem, 
    CarouselControl, 
    CarouselIndicators, 
    CarouselCaption
} from 'reactstrap';


const items = [
    {
        src: trill,
        altText: 'Man in blue shirt with hat at night',
        caption: '',
        key: 1
    }, 
    {
        src: trill1,
        altText: 'Woman in black lingerie and Santa holiday hat',
        caption: '',
        key: 1
    }
];

const Slider = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return; 
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1; 
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if(animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    
    const goToIndex = (newIndex) => {
        if(animating) return; 
        setActiveIndex(newIndex);
    };

    const slides = items.map((item) => {
        return (
            <CarouselItem
              onExiting={() => setAnimating(true)}
              onExited={() => setAnimating(false)}
              key={item.src}
              >
                  <img className='img-fluid' src={item.src} alt={item.altText} />
                  <CarouselCaption captionText={item.altText} />

            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            className='d-none d-md-block'
        >

            <CarouselIndicators 
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl 
                direction='prev'
                directionText ='Previous'
                onClickHandler={previous}
            />
            <CarouselControl 
                direction='next'
                directionText ='Next'
                onClickHandler={next}
            />
        </Carousel>
    );

};

export default Slider;