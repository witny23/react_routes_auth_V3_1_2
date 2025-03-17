import React from 'react';
import {Link} from 'react-router-dom';


export const Login = () => {
    return (
      <>
        <h1>Login to Application</h1>  
        <Link to="/signup">Need to signup?</Link>
      </>
    )
  
  }