import React from 'react';
import Container from 'react-bootstrap/Container';
import './header.css';

const Header = (props) => {
    const divVis = props.menuToggle ? 'div-show' : 'div-hide';
    
    return <Container fluid={true} id="background" className={`menu ${divVis}`}>
    

    
</Container>;

};

export default Header;