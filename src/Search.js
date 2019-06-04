import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './search.css';
const Search = (props) => {
    const searchVis = props.searchToggle ? 'search-show' : 'search-hide';
    const btnVis = props.searchToggle ? 'btn-show' : 'btn-hide';
    
    
    return <div className={searchVis + " container-fluid search-wrapper"}>
            <button className={btnVis + " btn btn-link"} onClick={props.handleToggleSearch} ><FontAwesomeIcon id="close" icon="window-close"  /></button>
            <input type="text" placeholder="What recipe are you looking for ..." onKeyPress={props.handleInput}/>
            
            
            
        
        

    </div>
};

export default Search;