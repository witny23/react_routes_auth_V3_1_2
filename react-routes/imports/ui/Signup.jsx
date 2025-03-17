import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// functional component
export const Signup = () => {


  const [error, setError] = useState('');
 
  // 1. create a formData state object
  //      this object will be updated whenever
  //      a user types in the form inputs
  const [formData_state, setFormData] = useState({
    email: "",
    password: ""
  })
  // Could have accomplished the same with the following
  // const [email_state, setEmail] = useState('');
  // const [password_state, setPassword] = useState('');


  function submitForm(event){
    event.preventDefault();   
// 2: comment out setError as we will be moving that to a method
    // setError('something went wrong'); 

// 5: test that the state has been updated when user submits the form
    console.log(formData_state.email + ' ' + formData_state.password);

                                     
  }

  return (
    <>
      <h1>Signup here!</h1>
      {error ? <p>{error}</p> : undefined}
      <form onSubmit={submitForm}>
        <input 
          type='email' 
// 3. set the value of the input to the default vaule / anything that has been saved in the state 
          value={formData_state.email}
// 4. whenever the input value changes, call the anonymous function to update the formData
          onChange={(e) => setFormData({...formData_state, email: e.target.value})}
// Explanation: This takes the event (e) and passes it to the setFormData() function. We can’t just 
//    set part of the formData, we have to set the full thing. So, we say, take whatever is in the 
//    form (…formData) and set that and then add the key and value title: e.target.value.
          placeholder='Email' />

        <input  type='password' 
                value={formData_state.password} 
                onChange={(e) => setFormData({...formData_state, password: e.target.value})}
                placeholder='Password' />
        <button>Create Account</button>
      </form>
      <br /><br />
      <Link to="/">Already have an account?</Link>
  </>
)

}