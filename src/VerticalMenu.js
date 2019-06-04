import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import  './vertical.css';

const VerticalMenu = (props) => {
return <Nav defaultActiveKey="/home" className="flex-column vertical-menu">
            <Nav.Link onClick={props.handleToggleMenu} ><FontAwesomeIcon id="close" icon="window-close"  /></Nav.Link>
            <Nav.Link href="#"  onMouseOver={props.rotateLetters} onClick={props.handleToggleSearch} ><Button variant="link" ><FontAwesomeIcon className="search-icon" icon="search"/></Button>SEARCH</Nav.Link>
            <Nav.Link eventKey="link-1"  onMouseOver={props.rotateLetters}>MEALS & COOKING</Nav.Link>
            <Nav.Link eventKey="link-2"  onMouseOver={props.rotateLetters}>FOOD NEWS</Nav.Link>
            <Nav.Link eventKey="disabled"  onMouseOver={props.rotateLetters}>ENTERTAINING & PARTIES</Nav.Link>
            <Nav.Link href="/home"  onMouseOver={props.rotateLetters}>HOLIDAYS</Nav.Link>
            <Nav.Link eventKey="link-1"  onMouseOver={props.rotateLetters}>KITCHEN SECRETS</Nav.Link>
            <Nav.Link eventKey="link-2"  onMouseOver={props.rotateLetters}>FRESTAURANTS & CHEFS</Nav.Link>
            <Nav.Link eventKey="disabled"  onMouseOver={props.rotateLetters}>ALL VIDEOS</Nav.Link>
            <Nav.Link href="/home"  onMouseOver={props.rotateLetters}>NEWSLETTER</Nav.Link>
            <Nav.Link eventKey="link-1"  onMouseOver={props.rotateLetters}>FOLLOW</Nav.Link>
            <Nav.Link eventKey="link-2"  onMouseOver={props.rotateLetters}>PRIVACY NOTICE</Nav.Link>
            <Nav.Link eventKey="disabled"  onMouseOver={props.rotateLetters}>TERMS OF USE</Nav.Link>

</Nav>;


};

export default VerticalMenu;