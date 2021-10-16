import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../../images/logo2.png'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Navigation.css'
import useFirebase from '../../../hooks/useFirebase';

const Navigation = () => {
    const { user, logOut } = useFirebase();
    return (
        <>
            <Navbar className="" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} width="150px" alt="" /></Navbar.Brand>
                    <Nav className="ms-auto navigation">

                        <Nav.Link href="#home"><Link to="/home">Home</Link></Nav.Link>
                        <Nav.Link href="#home"><FaShoppingCart /></Nav.Link>

                        <Nav.Link href="#home"><Link to="/login">Login</Link></Nav.Link>
                        {
                            user.email ?
                                <Button
                                    onClick={logOut}
                                    variant="danger" className="w-100">Sign Out</Button>
                                :
                                <Link to="/signup"><Button variant="danger" className="rounded-pill">Sign up</Button></Link>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Navigation;