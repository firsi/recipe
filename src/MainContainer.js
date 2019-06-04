import React from 'react';
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
import './mainMenu.css';
import Categorie from './Categories';

const MainContainer = (props) => {
 //converting the social rank number into 5stars rating 
 const navVis = props.menuToggle ? 'nav-push-right' : 'nav-push-left';
 let rating;
let arr = [];
let error_msg;
let i = 0;

if(props.recipesData.error === "limit"){
   error_msg=<div className="error-wrapper">
                <img src="https://hdsmileys.com/wp-content/uploads/2017/07/sorry.png" alt="sorry emoji" />
                <h3 className="error">Ooops, We've reached our server request limit for today, Please come back tomorrow....</h3>
           </div>
   console.log(props.recipesData.error);
}
else{

  for(let recipe in props.recipesData.recipes) {
    rating=Math.round(((props.recipesData.recipes[recipe].social_rank * 5)/100));
         i++;
 
         arr.push(<div className="card" style={{width: 300}} key={'card'+i}>
         <img class="img-recipe" src={props.recipesData.recipes[recipe].image_url} alt="recipe" width="300" height ="250"/>
         <div className="card-body">
         <h5 className="card-title"><a href={props.recipesData.recipes[recipe].publisher_url} target="blank">{props.recipesData.recipes[recipe].title}</a></h5>
          <Rater total={5} rating={rating} interactive={false}/>       
         <p className="card-text">You can click on the link above to look at the recipe(you will be redirected)</p>
         <div className="author">
         <div className="author-picture"><img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=50&q=80" alt="author" /></div> 
         <span className="by">By </span> <span className="author-name">{props.recipesData.recipes[recipe].publisher}</span>
         </div>
         </div>
         </div>);}

}
 



    
    return <main  className={navVis}>
       <Categorie />
       
    <div className="container cards-container">
      <div class="row">
       <div class="col">
      {props.recipesData.error === "limit" ?  error_msg : arr.map((current) => current) }
        </div>
      </div>
    
    </div>  
        
    </main>
};

export default MainContainer;