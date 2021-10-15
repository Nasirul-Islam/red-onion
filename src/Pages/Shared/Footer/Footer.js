import React from 'react';
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap';
import logo from '../../../images/logo.png';

const Footer = () => {
    return (
        <div className="footer">
            <Container>
                <Row className="mb-5">
                    <Col sm={7} className="text-start">
                        <img width="150px" src={logo} alt="logo" />
                    </Col>
                    <Col sm={3} className="text-start">
                        <p>About Onion food</p>
                        <p>Read Our Blog</p>
                        <p>Sign up to deliver</p>
                        <p>Add your restaurant</p>
                    </Col>
                    <Col sm={2} className="text-start">
                        <p>Get help</p>
                        <p>Read FAQs</p>
                        <p>View all cities</p>
                        <p>Restaurant near me</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={8} className="text-start">
                        <p className="copyright">Copyright © 2021 Onion Food</p>
                    </Col>
                    <Col sm={4} className="d-flex justify-content-around">
                        <span>Privacy Policy.</span>
                        <span>Terms of Use</span>
                        <span>Pricing</span>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;