import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

import SnailSVG from '../../../components/SVGs/SnailSVG';
import FlowersSVG from '../../../components/SVGs/FlowersSVG';
import pencilSVG from '../../../assets/SVGs/Digital/pencil.svg';

import  './digitalDrawings.css';

const DigitalDrawings = props => {
    const arrowStyles = {
        backgroundColor: 'black',
        height: "40px",
        width: "30px",
        borderRadius: "10%"
    };
    const intervalTime = 5000;


    return (
        <div className="digital-drawings-container" >
            <Carousel hover="hover" prevIcon={<span aria-hidden="true"
                style={arrowStyles}
                className="carousel-control-prev-icon" />}
                nextIcon={<span aria-hidden="true"
                    style={arrowStyles}
                    className="carousel-control-next-icon" />}>
                <Carousel.Item interval={intervalTime}>
                    <SnailSVG />
                    <Carousel.Caption>
                        <p className="dd-hover-text">Please hover to paint the snail.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={intervalTime}>
                  <FlowersSVG />
                </Carousel.Item>
                <Carousel.Item interval={intervalTime}>
                <img className="dd-image-svg" src={pencilSVG} alt="Pencil" />
                
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default DigitalDrawings;