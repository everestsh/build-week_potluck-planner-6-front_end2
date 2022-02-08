import React, { useState, useEffect } from 'react'

import { useParams, NavLink} from 'react-router-dom';

import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';
import '../CSS/Recipe.css'
const Recipe = (props) => {
    const [item, setItem] = useState([])
    
    const { id } = useParams();
    console.log("Recipe ", id)
    useEffect(() => {
        // axiosWithAuth().get('/products')
        
        const token = localStorage.getItem("token");

        // axios.get(`https://potluckplanner06.herokuapp.com/api/foods/${id}`, {
        //   headers: {
        //     authorization: token
        //   }
        // })
        axiosWithAuth()
        .get(`/foods/${id}`)
          .then(resp => {
            setItem(resp.data);
          })
          .catch(err => {
            console.log(err.response);
          })
        // fetchStock().then(res => setItems(res.data))
      }, [])
      console.log("Recipes", item)




      const handleClickEdit = () => {

      }

      const handleClickDelete = () => {

      }
    return (
      <div className="item-wrapper">
      {/* <h1>Recipe</h1> */}
       {/* <h1></h1> */}
     <div className="item-header">
         <div className="image-wrapper">
             <img 
             src = "https://takethemameal.com/files_images/recipes/recipes/300/77.jpg"
             // src={item.imageUrl} 
             alt={item.food_name} />
         </div>
         <div className="item-title-wrapper">
             <h2>{item.food_name}</h2>
         </div>
     </div>
     <nav className="item-sub-nav">
     <NavLink exact to={`/products/${item.id}`}>
         food description
     </NavLink>
     
     </nav>
     <p className="item-description">{item.food_description}</p>

     <button onClick={handleClickEdit} className="md-button">
     Edit
     </button>
     <button onClick={handleClickDelete} className="md-button">
     Delete
     </button>
 </div>
    )
}
export default Recipe;