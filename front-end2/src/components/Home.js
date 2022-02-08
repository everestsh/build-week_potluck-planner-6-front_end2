import React, { useState } from "react";
import { Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components';
import Banner from '../images/pexels-jonathan-borba-2878741.jpg';
import FoodOne from '../images/food1.jpg';
import FoodTwo from '../images/food2.jpg';
import FoodThree from '../images/food3.jpg';
import FoodFour from '../images/food4.jpg';
import Organizer from "./Organizer";
import Login from "./Login";

const StyledHome = styled.div`
display: flex;
justify-content: center;
.container {
background-color: ivory;
border-radius: 20px;
}
.top h1{
    font-family: 'cookie', cursive;
    font-size: 5rem;
    color: crimson;
    text-shadow: 1px 1px 2px black, 0 0 25px chocolate, 0 0 5px chocolate;
}
.top img{
   object-fit: cover;
   margin-top: 1%;
   width: 98%;
   height: 25vh;
   border-radius: 20px;
}
.top button{
    background-color: peru;
    padding: 1% 3%;
    border-radius: 20px;
    border: 0;
    color: white;
    font-family: 'frijole', cursive;
    font-size: 1.8rem;
}
button:hover {
    background-color: sandybrown;
    color: black;
    cursor: pointer;
}
#find:disabled {
    color: crimson;
    background-color: white;
    border: 2px solid crimson;
    cursor: not-allowed;
  }
  .errors {
      font-size: 1rem;
      color: red;
      font-weight: bold;
      font-family: times;
  }
h2{
    font-family: 'cookie', cursive;
    font-size: 4rem;
    color: sandybrown;
    text-shadow: 1px 1px 2px black, 0 0 25px wheat, 0 0 5px black;
}
p{
    font-family: 'Croissant One', cursive;
    font-size: 1.1rem;
    color: wheat;
}
label{
    font-family: times;
    color: wheat;
    font-size: 1.1rem;
}
input{
    font-family: 'Croissant One', cursive;
    margin-bottom: 2%;
    padding: 2%;
    background-color: navajowhite;
    color: saddlebrown;
    text-align: center;
}
input[type=input]:focus {
  font-family: 'Croissant One', cursive;
  background-color: peru;
  color: white;
}
input[type=password]:focus {
  font-family: 'Croissant One', cursive;
  background-color: peru;
  color: white;
}
.signup {
    background-color: sienna;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.guest {
    background-color: sienna;
    display: flex;
    flex-flow: wrap column;
    justify-content: space-between;
    align-items: center;
    border-radius: 20px;
}
.guest input {
    display: flex;
    align-items: center;
}
.userbox {
    display: flex;
    justify-content: center;
}
.userbox div{
    width: 50%;
    display: flex;
    flex-flow: wrap column;
    padding: 5%;
    margin: 1%;
}
.userbox button{
    border: 0;
    padding: 2% 5%;
    border-radius: 5px;
    color: white;
    background-color: peru;
    font-family: 'frijole', cursive;
    font-size: 1.3rem;
    margin-top: 3%;
}
.userbox button:hover {
    background-color: sandybrown;
    color: black;
}
.signup button{
    padding: 5% 0%;
    width: 300px;
}
.recipes {
    display: flex;
    justify-content: center;
    flex-flow: row wrap;
}
.food {
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin: 5%;
}
.food:hover {
    box-shadow: 10px 10px 5px 12px tan;
}
.food img {
  width: 500px;
  height: 500px;
  object-fit: cover;
}
.food p {
    text-align: center;
    color: black;
    font-family: sans-serif;
    font-weight: bold;
}
`
const Home = () => {

    return (
        <StyledHome>
         <div className='container'>
            <div className="top">
            <h1>POTLUCK PALOOZA</h1>
                <img src={Banner} alt="banner"/>
            </div>  

            <div className="userbox">
                <div className="signup">
                    <h2>SignUp</h2>
                    <p>Sign-Up Now to create a customizable online PotLuck Planner! <br />If already signed Up please Log-In Now!
                    </p>
                    <Link to='/signup'><button>Sign-Up</button></Link>
                    <Link to='/login'><button>Log-In</button></Link>
                </div>
                <div className="guest">
                    <h2>Find your PotLuck!</h2>
                    <p>Find your Potluck group below!</p>
                    <form id="find-form" >
                        <label>Enter Host's LastName

                            <input
                                name='hostName'
                                type='input'
                                
                                maxLength='30'
                            />
                        </label>
                        <label>Password
                            
                            <input 
                                name="guestPassword"
                                
                                type='password'
                            />
                        </label>
                        <button id="find" >Find</button>
                    </form>
                </div> 
                       
            </div>
            <div className="recipes">
                <div className="food 1">
                    <img src={FoodOne} />
                    <p>Food 1</p>
                </div>
                <div className="food 2">
                    <img src={FoodTwo} />
                    <p>Food 2</p>
                </div>
                <div className="food 3">
                    <img src={FoodThree} />
                    <p>Food 3</p>
                </div>
                <div className="food 4">
                    <img src={FoodFour} />
                    <p>Food 4</p>
                </div>
            </div>          
        </div>
        </StyledHome>
    )
}

export default Home;
