import React, { useState, useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom';
import axios from 'axios';

import axiosWithAuth from '../utils/axiosWithAuth';
import '../CSS/Recipes.css'
const Recipes = () => {

    const [items, setItems] = useState([])
    const  url  = useRouteMatch().url;


    useEffect(() => {  
        const token = localStorage.getItem("token");

        // axios.get('https://potluckplanner06.herokuapp.com/api/foods', {
        //   headers: {
        //     authorization: token
        //   }
        // })
        axiosWithAuth()
        .get('/foods')
          .then(resp => {
            setItems(resp.data);
          })
          .catch(err => {
            console.log(err);
          })
        // fetchStock().then(res => setItems(res.data))
      }, [])
      console.log("Recipes", items)

    return (
        <div className="recipes">
            {/* <h1>Recipes</h1> */}
            <div className='recipes-top'>
            Welcome to our collection of recipes perfect for preparing in your kitchen and taking to a friend in need. The culinary team at TakeThemAMeal.com has tested (and enjoyed!) each of these recipes to make sure we can heartily recommend them.
            <br/>
            &nbsp;&nbsp; &nbsp; &nbsp;~ Maureen, TakeThemAMeal.com

            </div>
            {/* <div className='recipes-list-wrapper'> */}
            <div className="recipes-list-wrapper">
            {
                
                items.map(item=>(
                <div 
                className="recipes-card"
                key={item.food_id}>
                        <a>
                            <img
                            className='recipes-list-image'
                            src="https://takethemameal.com/files_images/recipes/recipes/300/77.jpg"
                            // src={item.imageUrl}
                            alt={item.food_name}
                            />
                        </a>
                       
                    
                        <p>{item.food_name}</p>
                        {/* <p>{item.food_description}</p> */}
                        <Link className='recipes-button' to={`${url}/${item.food_id}`}>
                            <button>MORE</button>
                        </Link>
                </div>
                ))
            }
            </div>

        </div>
    )
}
export default Recipes;