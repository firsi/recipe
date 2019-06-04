import React from 'react';
import ReactDOM from 'react-dom';
import Naviguation from './Naviguation';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faBars,faWindowClose,faStar } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import MainContainer from './MainContainer';
import Footer from './Footer';
import Search from './Search';
import {BrowserRouter, Route} from 'react-router-dom';

library.add(faSearch,faBars,faWindowClose,faStar);


class Recipe extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            menuToggle : false,
            recipeData:"",
            searchToggle: false,
            searchRequest:"recipe"
        };

        this.handleToggleMenu = this.handleToggleMenu.bind(this);
        this.handleToggleSearch = this.handleToggleSearch.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    
    handleToggleMenu(){
        this.setState({
            menuToggle : !this.state.menuToggle
        });
        console.log(this.state.menuToggle);
    }

    handleToggleSearch(){
        this.setState({
            searchToggle: !this.state.searchToggle
        })
    }

    handleInput(event) {
        if(event.key ==='Enter'){
            this.setState({searchRequest: event.target.value});
            console.log(this.state.searchRequest);
        }
    }
    

    componentDidMount(){
        
        const API_URL = "https://www.food2fork.com/api/search?key=dc2bbb75789e37df1da8884d17ec51c9&q="+this.state.searchRequest+"&page=1&count=12";

        fetch(API_URL)
                // We get the API response and receive data in JSON format...
                .then(response => response.json())
                // ...then we update the users state
                .then(data =>
                    
                  {this.setState({
                    recipeData: data
        
                  });
                
                
                }
                )
        
        
    }
    render(){

        if(!this.state.searchToggle){
            document.getElementsByTagName("html")[0].style.overflow="auto";
        }
        else{
            document.getElementsByTagName("html")[0].style.overflow="hidden";
        }
        
        /*console.log(this.state.recipeData);*/
        return(<div >
            
        <BrowserRouter>
            <Search searchToggle={this.state.searchToggle} handleToggleSearch={this.handleToggleSearch} handleInput={this.handleInput}/>
            <Naviguation menuToggle={this.state.menuToggle} handleToggleMenu={this.handleToggleMenu} handleToggleSearch={this.handleToggleSearch}/>
            <Route path="/" exact render={() => <div>
                <Header menuToggle={this.state.menuToggle}/> 
            <MainContainer recipesData={this.state.recipeData} menuToggle={this.state.menuToggle} />

            </div>}/>
            
       
             <Footer />
        </BrowserRouter>
        </div>)
    }
}


ReactDOM.render(<Recipe />, document.getElementById("root"));