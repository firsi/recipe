import React from 'react';
import {Navbar} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'; 
import Container from 'react-bootstrap/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';
import './horizontal.css';

const HorizontalMenu = (props) => {
    return  <Navbar  expand="lg" className={props.setClass+" background fixed-top"}>
    <Container fluid={false} >
        

                <Button variant="link" onClick={props.handleToggleMenu} className="hamburger"><FontAwesomeIcon icon="bars"></FontAwesomeIcon></Button>
                <Navbar.Brand href="#logo" id="logo">
                <Link to='/' className="logo-link">Recipish</Link> 
                </Navbar.Brand>

                <Navbar.Collapse >
                    <Nav className="mr-auto" >
                        <Nav.Link href="#Dinners">DINNERS</Nav.Link>
                        <Nav.Link href="#Dinners">GRILLING</Nav.Link>
                        <Nav.Link href="#Dinners">HEALTHY</Nav.Link>
                        <Nav.Link href="#Dinners">KETO</Nav.Link>
                        <Nav.Link href="#Dinners">MEAL PREP</Nav.Link>
                    </Nav>

                    <Nav  className="mr-sm-2">
                        <Nav.Link href="#Newsletter">Newsletter</Nav.Link>
                        <Button variant="link" onClick={props.handleToggleSearch} className="horizontal-search-icon"><FontAwesomeIcon icon="search"/></Button>
                    </Nav>
                </Navbar.Collapse> 
            
    </Container >
</Navbar >
;
           
    
};

export default HorizontalMenu;