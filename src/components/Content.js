import {Container, Row, Col } from 'reactstrap';


const Content = (props) => {
    const head = props.title;
    const head1 = props.subTitle;
    const copy = props.copy;
    
    return(
    <Container fluid className='pt-1'>
        <Row classnmae='pt-2'>
                <Col className='d-flex flex-column justify-content-center'>
                    <h1 className='text-sm-end text-start'>{head}</h1>
                    <h2 className='text-sm-end text-start'>{head1}</h2>
                    <Col className='align-self-sm-end' sm='10' md='12' lg='9'>
                        <p className='text-sm-end text-start'>{copy}</p>
                    </Col>
                
                  
                   
                </Col>

                <Col className='order-first order-sm-last'>
                    <Col className='d-flex vh'>
                        <Col className='imgBlock tv d-flex flex-column'></Col>
                        <Col className='imgBlock tv1'></Col>
                        <Col className='imgBlock tv2'></Col>
                        <Col className='imgBlock tv3'></Col>
                        <Col className='imgBlock tv4'></Col>
                        <Col className='imgBlock tv5'></Col>
                    </Col>
                </Col>
         
        </Row>
    </Container>
    );
};

export default Content; 