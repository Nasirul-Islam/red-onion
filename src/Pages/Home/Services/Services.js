import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useData from '../../../hooks/useData';
import ServicesCard from '../../ServicesCard/ServicesCard';
import './Services.css'

const Services = () => {
    const { datas } = useData();
    return (
        <Container className="services">
            <Row>
                <Col md={5} className="text-start mb-4">
                    <h2 className="mb-4">Why you choose us</h2>
                    <p>Eaque nulla quae minima odio praesentium doloremque assume repellendus facere autem repudiandae quasi sequi.</p>
                </Col>
                <Col md={7}></Col>
            </Row>
            <Row xs={1} md={3} className="g-4">
                {
                    datas.services?.map(data => <ServicesCard
                        data={data}
                    ></ServicesCard>)
                }
            </Row>
        </Container>
    );
};

export default Services;