import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import './navbar.scss';

export function NavMenu ({user}) {

    onLoggedOut = () => {
        localStorage.clear();
        window.open("/", "_self");
    }

    isAuth = () => {
        if (typeof window == "undefined") {
            return false;
        }
        if (localStorage.getItem("token")) {
            return localStorage.getItem("token");
        } else {
            return false;
        }
    };

return (
            <Navbar className="main-nav" bg="dark" variant="dark" expand="lg">
                    <Container fluid className="navBarContainer">
                        <Navbar.Brand href="/">MyFlixMovies</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">

                                {isAuth() && (
                                        <Nav.Link href="/">Home</Nav.Link>
                                    )}

                                    {isAuth() && (
                                        <Nav.Link href={`/users/${user}`}>Profile</Nav.Link>
                                    )}
                                   
                                   {isAuth() && (
                                    <Button variant="secondary" type="button" className="logout-button" onClick={()=> {this.onLoggedOut() }}>Log Out</Button>
                                   )}

                                   {!isAuth() && (
                                    <Nav.Link href="/">Sign In</Nav.Link>
                                   )}

                                   {!isAuth() && (
                                    <Nav.Link href="/register">Register</Nav.Link>
                                   )}                                   
                                   
                                </Nav>
                            </Navbar.Collapse>
                    </Container>
                </Navbar>

            );
        }