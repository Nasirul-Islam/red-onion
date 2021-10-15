import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useData from '../../../hooks/useData';

const Lunch = () => {
    const { datas } = useData();
    return (
        <Container className="my-5">
            <div className="d-flex justify-content-center my-5">
                <Link to="/breakfast"><Button variant="outline-danger" className="m-2">Breakfast</Button></Link>
                <Link to="/lunch"><Button variant="outline-danger" className="m-2">Lunch</Button></Link>
                <Link to="/dinner"><Button variant="outline-danger" className="m-2">Dinner</Button></Link>
            </div>
            <Row xs={1} md={3} className="g-4">
                {
                    datas.lunch?.map(data => (
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={data.img} />
                                <Card.Body>
                                    <Card.Title>{data.name}</Card.Title>
                                    <Card.Text>
                                        {data.description}
                                    </Card.Text>
                                    <h4>$ {data.price}</h4>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Container>
    );
};

export default Lunch;