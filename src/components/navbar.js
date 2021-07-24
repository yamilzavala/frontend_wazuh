import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

export const NavbarComponent = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Wazuh</Navbar.Brand>
                    <Nav className="me-auto" style={{marginLeft: '58rem'}}>
                        <Nav.Link>
                            <Link to="/alerts">Alerts</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/agents">Agents</Link>
                        </Nav.Link>
                        <Nav.Link>
                        <   Link to="/rules">Rules</Link>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}