import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogOut = () => {
        signOut(auth)
    }
    return (
        <>
            <Navbar sticky="top" collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to='/'><img height="30px" src={logo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#experts">Experts</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            {user
                                ?
                                <Button onClick={handleLogOut}>Log out</Button>
                                :
                                <Nav.Link as={Link} to='/login'>
                                    Log in
                                </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;