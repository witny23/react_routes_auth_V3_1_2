import React, { useState } from 'react';
import {Link} from 'react-router-dom';


export const Signup = () => {

  const [error_state, setError] = useState('');

  function submitForm(e){
    e.preventDefault();   // don't send the form anywhere

    setError('something went wrong');   // will be using down the road
  }

  return (
    <>
      <h1>Signup Here!</h1>
      {/* use the ternary operator ? if error, show error. if no error, show nothing */}
      {/* this.state.error_state is set to '' which is falsey */}
      {error_state ? <p>{error_state}</p> : undefined}
      <form onSubmit={submitForm}>
        <input type='email' name='email' placeholder='Email' />
        <input type='password' name='password' placeholder='Password' />
        <button>Create Account</button>
      </form>
      <br /><br />
      <Link to="/">Already have an account?</Link>
    </>
  )
  
  }