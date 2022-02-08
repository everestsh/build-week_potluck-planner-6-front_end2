
import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { fetchSuccess} from '../actions'

import styled from 'styled-components';
import validation from '../validation/validation';

const StyledLogin = styled.div`
display: flex;
justify-content: center;
height: 100vh;
align-items: center;
background-color: ivory;
margin: 5%;
margin-bottom: 20%;
border-radius: 20px;

.container {
    width: 500px;
    height: 200px;
background-color: wheat;
border-radius: 20px;
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
    padding: 1% 5%;
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
.error{
    color: red;
}
`






const initForm = {
    username: '',
    password: ''
}
const Login = (props) =>{
    const {fetchSuccess} = props
    const [values, setValues] = useState(initForm)
    const [errors, setErrors] = useState({});
    const { push } = useHistory();

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    // console.log("Login ",values)
    const handleSubmit = (e) => {
        e.preventDefault();  
        console.log("Signup", values)
        setErrors(validation(values))
        axios.post('https://potluckplanner06.herokuapp.com/api/auth/login', values)
        .then(resp=>{
            console.log("login : resp = ",resp);
            // const token = localStorage.getItem("token")
            console.log("login : resp.data = ",resp.data.token);
            localStorage.setItem('token', resp.data.token);
            fetchSuccess()
            push('/recipes');
        })
        .catch(err=>{
            console.log(err);
        })
       
    }

    return(
        <StyledLogin>
        <div className="login-from">
            <h1>Login</h1>
            <form className='form container' onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p className='error'>{errors.username}</p>}
                </label>

                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p className='error'>{errors.password}</p>}
                </label>

            <button id="register">Log in</button>
            </form>
        </div>
      </StyledLogin>  

    );
}
export default connect(null,{ fetchSuccess})(Login);