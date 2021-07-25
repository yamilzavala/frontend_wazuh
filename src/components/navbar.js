import React from 'react';
import {Link} from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../shared/Wazuh-orig.png'

export const NavbarComponent = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" >
                <Container>
                    <Navbar.Brand><img src={logo} style={{width: '50px', height: '50px'}}/></Navbar.Brand>
                    <Nav className="me-auto" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)'}}>
                        <Nav.Link>
                            <Link to="/alerts" style={{textDecoration: 'none', color: '#409dc4'}} >Alerts</Link >
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/agents" style={{textDecoration: 'none', color: '#409dc4'}} >Agents</Link>
                        </Nav.Link>
                        <Nav.Link>
                        <   Link to="/rules" style={{textDecoration: 'none', color: '#409dc4'}} >Rules</Link>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}