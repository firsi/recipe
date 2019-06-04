import React from 'react';
import { Row,Col} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import  './naviguation.css';
import HorizontalMenu from './horizontalMenu.js'
import VerticalMenu from './VerticalMenu.js';

const Naviguation = (props) => {
    
   
        const menuVis = props.menuToggle ? 'vertical-container-show' : 'vertical-container-hide';
        const navVis = props.menuToggle ? 'nav-push-right' : 'nav-push-left';

        function rotateLetters(event){
            const letterArr = event.target.innerHTML.split("");
        
        }
        
        return <div className="naviguation-parent"><Container fluid={true} >
            
            <Row>
                <Col lg={12} >
                    
                    <HorizontalMenu handleToggleMenu={props.handleToggleMenu} id="naviguation" setClass = {`menu ${navVis}`} handleToggleSearch={props.handleToggleSearch}/>       
                
                </Col>
                 
                </Row>
                
        </Container>
        <div id="vertical" className={`menu ${menuVis}`} >
        <VerticalMenu handleToggleMenu={props.handleToggleMenu} rotateLetters={rotateLetters} handleToggleSearch={props.handleToggleSearch}/>
    </div>

   </div>
    
   
};

export default Naviguation;