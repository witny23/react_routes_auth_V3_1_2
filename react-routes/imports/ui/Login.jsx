import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Meteor } from 'meteor/meteor';

export const Login = () => {


  const [error_state, setError] = useState('');
 
  const [formData_state, setFormData] = useState({
    email: "",
    password: ""
  })



  function submitForm(event){
    event.preventDefault();   

    // console.log(formData_state.email + ' ' + formData_state.password);

    Meteor.loginWithPassword({email: formData_state.email}, formData_state.password, (errorCallbackObject) => {
      console.log('signup callback error', errorCallbackObject);
    }); 

                                  
  }

// We can check if login works by creating a new user, logging out, then loggin in
      // require('meteor/meteor').Meteor.userId()
          // very usefull info. If they are not logged in, they will not have an id
      // require('meteor/meteor').Meteor.user()  - more info on the user (no pw)
      // require('meteor/accounts-base').Accounts.logout()  - logs user out
      // require('meteor/meteor').Meteor.userId() - check if they are logged out   

  return (
    <>
      <h1>Login here!</h1>
      {error_state ? <p>{error_state}</p> : undefined}
      <form onSubmit={submitForm}>
        <input 
          type='email' 
          value={formData_state.email}
          onChange={(e) => setFormData({...formData_state, email: e.target.value})}
          placeholder='Email' />

        <input  type='password' 
                value={formData_state.password} 
                onChange={(e) => setFormData({...formData_state, password: e.target.value})}
                placeholder='Password' />
        <button>Login</button>
      </form>
      <br /><br />
      <Link to="/signup">Need to signup?</Link>
  </>
)

}