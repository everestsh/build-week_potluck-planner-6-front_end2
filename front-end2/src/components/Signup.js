
import React, { useState, useEffect } from "react";
import { useHistory, Route, Link } from 'react-router-dom'
import styled from 'styled-components';
import axios from "axios";

const StyledSignup = styled.div`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background-color: ivory;
margin: 5%;
margin-bottom: 20%;
border-radius: 20px;

.container {
background-color: wheat;
border-radius: 20px;
margin: 10%;
}
h1{
    font-family: 'cookie', cursive;
    font-size: 4rem;
    color: crimson;
    text-shadow: 1px 1px 2px black, 0 0 25px chocolate, 0 0 5px chocolate;
}

#register {
    font-size: 1rem;
    margin: 2%;
    padding: 1% 2%;
    border-radius: 8px;
    color: rgb(30, 220, 20);
    background-color: white;
    border: 2px solid rgb(30, 220, 20);
}
#register:disabled {
    color: grey;
    background-color: white;
    border: 2px solid crimson;
    cursor: not-allowed;
  }
#register:hover {
    background-color: rgb(30, 220, 20);
    color: white;
    cursor: pointer;
    font-weight: bold;
}
h2{
    font-family: 'cookie', cursive;
    font-size: 4rem;
    color: sandybrown;
    text-shadow: 1px 1px 2px black, 0 0 25px wheat, 0 0 5px black;
}
.form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: wrap column;
    padding: 2%;
}
label{
    font-family: times;
    color: saddlebrown;
    font-size: 1.1rem;
    font-weight: 600;
}
input{
    font-family: 'Croissant One', cursive;
    margin: 2%;
    padding: .8%;
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
`



const initForm = {
    username: '',
    password: ''
}

const Signup = () => {
    const [newUser, setNewUser] = useState(initForm)
    const [errors, setErrors] = useState({});

    const { push } = useHistory();

    const handleChange = (e) => {
        setNewUser({
            ...newUser,
            [e.target.name]: e.target.value
        })
    }

    console.log("Sign Up",newUser)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Signup")
        axios.post(`http://potluckplanner06.herokuapp.com/api/auth/register`, newUser)
        .then(resp => {
            console.log('resp.data in Register.js: ', resp.data);
            // alert(`Your role is: ${resp.data.role}, you need your prop role to do something!`);
            push('/login');
        })
        .catch(err => {
            console.log(err);
        })
    } 
    return (
        <StyledSignup>
        <div className='signup'>
        <h1>POTLUCK PALOOZA</h1>
            <h2>Register Here!!!</h2>
            <form className='form container' onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={newUser.username}
                        onChange={handleChange}
                    />
                    {errors.name && <p className='error'>{errors.username}</p>}
                </label>

                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={newUser.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className='error'>{errors.password}</p>}
                </label>

            <button id="register">Sign Up</button>
            </form>
        </div>
       </StyledSignup> 
    )
}
export default Signup;