import React from 'react';
import logo from '../../images/logo2.png';
import { Button, Container, Form } from 'react-bootstrap';
import './Signup.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="signup">
            <Container className=" w-25">
                <div className="">
                    <img width="300px" src={logo} alt="" />
                </div>
                <Form>
                    <Form.Control type="text" placeholder="Name" />
                    <br />
                    <Form.Control type="text" placeholder="Email" />
                    <br />
                    <Form.Control type="text" placeholder="Password" />
                    <br />
                    <Form.Control type="text" placeholder="Confirm Password" />
                    <br />
                    <Button variant="danger" className="w-100">Sign Up</Button>
                </Form>
                <Link to="/login">Already have an account</Link>
            </Container>
        </div>
    );
};

export default Login;