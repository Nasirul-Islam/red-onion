import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ServicesCard.css'
import { FaArrowRight } from "react-icons/fa";

const ServicesCard = (prpos) => {
    const { title, img, icon, description } = prpos.data
    return (
        <>
            <Col>
                <Card className="service-card mb-5">
                    <Card.Img className="chef" variant="top" src={img} />
                    <Card.Body className="d-flex text-start">
                        <div className="me-3">
                            <img src={icon} alt="" />
                        </div>
                        <div className="">
                            <Card.Title>{title}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Link>See more <span><FaArrowRight /></span></Link>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default ServicesCard;