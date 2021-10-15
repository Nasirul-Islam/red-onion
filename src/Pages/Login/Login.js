import React from 'react';
import logo from '../../images/logo2.png';
import { Button, Container, Form } from 'react-bootstrap';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login">
            <Container className=" w-25">
                <div className="">
                    <img width="300px" src={logo} alt="" />
                </div>
                <Form>
                    <Form.Control type="text" placeholder="Email" />
                    <br />
                    <Form.Control type="text" placeholder="Password" />
                    <br />
                    <Button variant="danger" className="w-100">Log in</Button>
                </Form>
                <Link to="signup">Are You New? Pleash Sign Up</Link>
            </Container>
        </div>
    );
};

export default Login;