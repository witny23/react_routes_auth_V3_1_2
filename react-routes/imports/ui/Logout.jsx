import React from 'react';
import { useNavigate } from 'react-router-dom';


export const Logout = () => {

  let navigate = useNavigate();

  function onLogout() {
    navigate("/");
  }
  return (
      <>
        <h1>Logout Functional Component Placeholder!</h1>  
        <button onClick={onLogout}> Logout</button>  
      </>
    )
  
  }