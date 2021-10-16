import React from 'react';
import logo from '../../images/logo2.png';
import { Button, Container, Form } from 'react-bootstrap';
import './Login.css';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { handleEmail, handlePassword, loginWithEmail, Googlesignin, Facebooksignin, Twittersignin } = useFirebase();
    return (
        <div className="login">
            <Container className=" w-25">
                <div className="">
                    <img width="300px" src={logo} alt="" />
                </div>
                <Form>
                    <Form.Control onBlur={handleEmail} type="text" placeholder="Email" />
                    <br />
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                    <br />
                    <Button
                        onClick={loginWithEmail}
                        variant="danger" className="w-100">Log in
                    </Button>
                    <br />
                    <br />
                    <Button
                        onClick={Googlesignin}
                        variant="danger" className="w-100">
                        Login With Google
                    </Button>
                    <br />
                    <br />
                    <Button
                        onClick={Facebooksignin}
                        variant="danger" className="w-100">
                        Login With Facebook
                    </Button>
                    <br />
                    <br />
                    <Button
                        onClick={Twittersignin}
                        variant="danger" className="w-100">
                        Login With Twitter
                    </Button>
                </Form>
                <Link to="signup">Are You New? Pleash Sign Up</Link>
            </Container>
        </div>
    );
};

export default Login;