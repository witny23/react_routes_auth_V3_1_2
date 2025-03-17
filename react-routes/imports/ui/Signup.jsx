import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

export const Signup = () => {


  const [error_state, setError_state] = useState('');
 
  const [formData_state, setFormData_state] = useState({
    email: "",
    password: ""
  })



  function submitForm(event){
    event.preventDefault();   

    // console.log(formData_state.email + ' ' + formData_state.password);

// 1:  call one meteor method that will take care of creating a user    
    Accounts.createUser({email: formData_state.email, password: formData_state.password}, (errorCallbackObject) => {
      // createUser(options, [callback])
      // callback function called if there are any errors - undefined if none
      console.log('signup callback error', errorCallbackObject);
    }); 

                                  
  }
// 2: test - open up meteor debugger ddp > signup >
//            expand calling method createUser with [object Object] > params
//            note the hashed password
//          > item changed in users collection - notice that the user was added
//          > got result for method login - shows when token expires so they stay loggin in

// 3: access some methods on the meteor Object
      // use the following in the console
      // require('meteor/meteor')           - provides info on our meteor object
      // require('meteor/meteor').Meteor.userId()
      //  very usefull info. If they are not logged in, they will not have an id
      // require('meteor/meteor').Meteor.user()  - more info on the user (no pw)
      // require('meteor/accounts-base')     - returns out Accounts object
      // require('meteor/accounts-base').Accounts - provides list of methods
      // require('meteor/accounts-base').Accounts.logout()  - logs user out
      // require('meteor/meteor').Meteor.userId() - check if they are logged out 

// 4: mongo db was created and updated by meteor (sweet)
//    open a console > cd into project > meteor mongo
//    we want to access user collection that we never defined nor will we manage
//    db.users.find()
//      this returns the user objects with all the info about our users

  return (
    <>
      <h1>Signup here!</h1>
      {error_state ? <p>{error_state}</p> : undefined}
      <form onSubmit={submitForm}>
        <input 
          type='email' 
          value={formData_state.email}
          onChange={(e) => setFormData_state({...formData_state, email: e.target.value})}
          placeholder='Email' />

        <input  type='password' 
                value={formData_state.password} 
                onChange={(e) => setFormData_state({...formData_state, password: e.target.value})}
                placeholder='Password' />
        <button>Create Account</button>
      </form>
      <br /><br />
      <Link to="/">Already have an account?</Link>
  </>
)

}