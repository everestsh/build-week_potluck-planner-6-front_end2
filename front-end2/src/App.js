import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as yup from 'yup';
import schema from './validation/Schema';
import { connect } from 'react-redux';

import './App.css';
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Background from './images/pexels-pixabay-326279.jpg'

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Recipe from './components/Recipe';
import Recipes from './components/Recipes';
import Guest from './components/Guest'
import Logout from './components/Logout';

import PrivateRoute from './components/PrivateRoute';

const StyledApp = styled.div`
background-image: url(${Background});
background-repeat: no-repeat;
background-position: fixed;
background-size: auto;
height: 100%;
.App{
  padding:2%;
}
`
const initGuest = [];
const initDisabled = true;
const initGuestFormValues = {
  attending: '',
  guestName: '',
  guestEmail: '',
  guestPhone: '',
  category: '',
  bring: ''
}
const initGuestFormErrors = {
  attending: '',
  guestName: '',
  guestEmail: '',
  guestPhone: '',
  category: '',
  bring: '',
}

function App(props) {
  const {isLoggedIn, fetchStart, fetchSuccess} = props

  const [guests, setGuests] = useState(initGuest);
  const [disabled, setDisabled] = useState(initDisabled);
  const [formValues, setFormValues] = useState(initGuestFormValues);
  const [formErrors, setFormErrors] = useState(initGuestFormErrors);
  
  const getGuests = () => {
    axios.get(`https://reqres.in/api/orders`)
    .then(resp => {
      // console.log(resp)
      setGuests(resp.data.data);
    }).catch(err => console.error(err))
  }

  const postGuest = newGuest => {
    axios.post(`https://reqres.in/api/orders`, newGuest)
    .then(resp => {
        console.log(resp);
        setGuests([resp.data, ...guests ])
    }).catch(err => console.error(err))
    .finally(() => setFormValues(initGuestFormValues))
}
  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }
  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const formSubmit = () => {
    const newGuest = {
      attending : formValues.attending,
      guestName : formValues.guestName.trim(),
      guestEmail : formValues.guestEmail.trim(),
      guestPhone : formValues.guestPhone.trim(),
      category: formValues.category,
      bring : formValues.bring
    }
    postGuest(newGuest);
  }
  useEffect(() => {
    getGuests()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <StyledApp>
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/signup" component={Signup}/>
        <PrivateRoute path="/recipes/:id" component={Recipe}/>
        <PrivateRoute path="/recipes" component={Recipes}/>
        <Route  path="/guest" > 
          <Guest 
            values={formValues}
            change={inputChange}
            submit={formSubmit}
            disabled={disabled}
            errors={formErrors}
            />
        </Route>
      </Switch>
      <Footer/>
    </div>
    </StyledApp>
  );
}

const mapStateToProps = state => {
  console.log("App.js mapStateToProps", state)
  return({
    isLoggedIn: state.isLoggedIn 
  })
}

export default connect(mapStateToProps,)(App);
