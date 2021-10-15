import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ServicesCard from '../../ServicesCard/ServicesCard';

const Services = () => {
    return (
        <Container>
            <Row>
                <Col md={5} className="text-start mb-4">
                    <h2 className="mb-4">Why you choose us</h2>
                    <p>Eaque nulla quae minima odio praesentium doloremque assume repellendus facere autem repudiandae quasi sequi.</p>
                </Col>
                <Col md={7}></Col>
            </Row>
            <ServicesCard></ServicesCard>
        </Container>
    );
};

export default Services;