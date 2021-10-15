import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ServicesCard = () => {
    return (
        <>
            <Row>
                <Col md={4}><h3>Dynamic Card</h3></Col>
                <Col md={4}><h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, consectetur.</h3></Col>
                <Col md={4}><h3>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, consectetur.</h3></Col>
            </Row>
        </>
    );
};

export default ServicesCard;