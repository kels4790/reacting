import React from 'react';
import Slider from './Slider';
import trillave from '../assets/trillave.png';
import { Container, Row, Col } from 'reactstrap';



const MainContent = (props) => {
    let intro = props.txt;
    return (
        <Container fluid>
            <Row>
                
                    <Col className='d-flex'>
                            <Col className='flex-grow-1 ps-l-2 pe-2'>
                                <Col className='fheight d-flex flex-column justify-content-center ps-sm-1'>
                                    <h1 className='align-self-center text-nowrap text-md-wrap'>FOCUSED ON</h1>
                                    <h1 className='align-self-center text-center text-light bg-dark ps-2 pe-2'>THE BIGGER PICTURE</h1>
                                    <p className='ps-2 pe-2 text-center'>{intro}</p>
                                </Col>
                            </Col>
                            <Col className='flex-shrink-0 mx-auto order-sm-first pe-md-2' xs md='8'>
                                <Col className='d-flex justify-content-center'>
                                    <img className='img-fluid d-md-none' src={trillave} alt='JaeShun Williams - Trill Visualz Founder'/>
                                    <Slider />
                               </Col>
                            </Col>
                    </Col>
                                  
                   
                       
                   
            </Row>
          
        </Container>
    );
}

export default MainContent; 