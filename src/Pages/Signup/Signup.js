import React from 'react';
import logo from '../../images/logo2.png';
import { Button, Container, Form } from 'react-bootstrap';
import './Signup.css';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Signup = () => {
    const { user, Googlesignin, logOut, handleEmail, handlePassword, createNewAccount, Facebooksignin } = useFirebase();
    return (
        <div className="signup">
            <Container className=" w-25">
                <div className="">
                    <img width="300px" src={logo} alt="" />
                </div>
                <Form>
                    <Form.Control type="text" placeholder="Name" />
                    <br />
                    <Form.Control onBlur={handleEmail} type="text" placeholder="Email" />
                    <br />
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Password" />
                    <br />
                    <Form.Control onBlur={handlePassword} type="password" placeholder="Confirm Password" />
                    <br />
                    {
                        user.email ?
                            <Button
                                onClick={logOut}
                                variant="danger" className="w-100">
                                Sign Out
                            </Button>
                            :
                            <Button
                                onClick={createNewAccount}
                                variant="danger" className="w-100">
                                Sign Up
                            </Button>
                    }
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
                </Form>
                <Link to="/login">Already have an account</Link>
            </Container>
        </div>
    );
};

export default Signup;