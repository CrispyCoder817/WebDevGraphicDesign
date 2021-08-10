import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import "./styles.css";
import Navigation from '../../Components/Navigation';
// import { Link } from 'react-router-dom';

function GraphicDesign() {
    return (
        <div>
            <Navigation/>
            <h1>GraphicDesignPage</h1>
            <Container>
                <Row className="rows">
                <Col clsasName="columns" lg={6}>1 of 3</Col>
                <Col clsasName="columns" lg={3}>2 of 3</Col>
                <Col clsasName="columns" lg={3}>2 of 3</Col>
                </Row>
            </Container>
            <Container>
                <Row className="rows">
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
                </Row>
            </Container>
            
</div>
    );
}

export default GraphicDesign;