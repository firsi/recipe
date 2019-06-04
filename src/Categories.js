import React from 'react';
import './categories.css';
import 'react-rater/lib/react-rater.css'
 

  

const Categories = () => {
    let arr = [];
    let arr_img = ["https://images.unsplash.com/photo-1546959673-47ea2a35bd06?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&q=80",
                    "https://images.unsplash.com/photo-1486887396153-fa416526c108?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&q=80",
                    "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&q=80",
                    "https://images.unsplash.com/photo-1542210435-59f90e156f10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&q=80",
                    "https://images.unsplash.com/photo-1523813301608-f54a198f6b5f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&q=60",
                    "https://images.unsplash.com/photo-1553349450-0cede7c622cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&q=60",
                    "https://images.unsplash.com/photo-1552334405-4929565998d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&q=60",
                    "https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&q=60",
                    "https://images.unsplash.com/photo-1529059997568-3d847b1154f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&q=60",
                    "https://images.unsplash.com/photo-1509722747041-616f39b57569?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=80&q=60"
                    ];
    let title_arr=["Appetizers and Snacks","Bread Recipes","Breakfast and Brunch","Cake Recipes","Chicken Recipes","Cookies","Shrimp Recipes","Slow Cooker Recipes","Vegan Recipes","World Cuisine"];

    for(let i = 0; i < 10; i++){
        arr.push(<div className="col">
        <div className="categorie">
            <a href="#" className="categorie-img-link"><img className="categorie-img" src={arr_img[i]} alt={title_arr[i]}/></a>
            <div className="categorie-title text-center"> {title_arr[i]}</div>
            
        </div>
    </div>);
    }
    
    return <div className="band">
        <div className="container">
            <div className="row">
                {arr.map((current) => current)}
                
            </div>
        </div>
            
    </div>
};

export default Categories;