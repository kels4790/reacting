import { Container, Row, Col } from 'reactstrap';

const Header = () => {
    return (
        <Container fluid>
            <Row className='blue'>
                <Col className='bg bg-primary' sm>
                    <h1>Red</h1>
                </Col>
                <Col sm>
                    <h1>Green</h1>
                </Col>
                <Col>
                    <h1>Blue</h1>
                </Col>
            </Row>
        </Container>
    );
}

export default Header; 