import React, { useEffect } from "react";
import axios from 'axios'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { connect } from 'react-redux';
import {fetchStart} from '../actions'

const StyledLogout = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
align-items: center;
background-color: ivory;
margin: 5%;
margin-bottom: 20%;
border-radius: 20px;

h1{
    font-family: 'cookie', cursive;
    font-size: 4rem;
    color: crimson;
    text-shadow: 1px 1px 2px black, 0 0 25px chocolate, 0 0 5px chocolate;
}
`


const Logout = (props) => {
    const {push} = useHistory()
    const {fetchStart} = props
    useEffect(()=> {
        localStorage.removeItem('token')
        fetchStart()
        push('./login')
    }, []);

    return (
        <StyledLogout>
        <div className="logout">
            <h1>Logout</h1>
        </div>
        </StyledLogout>
    )
}
export default connect(null,{fetchStart})(Logout);