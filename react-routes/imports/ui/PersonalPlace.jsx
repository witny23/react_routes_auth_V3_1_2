import React, { useEffect } from 'react'; // import useEffect
import { Logout } from './Logout.jsx'; 
import { useNavigate } from 'react-router-dom'; // import useNavigate

// functional component
export const PersonalPlace = () => {
  
  let navigate = useNavigate();

  if (!Meteor.userId()){  // check if the user is not logged in
    useEffect(() => {     // Hook allows you to perform side effects in your components.
      navigate("/");      //    i.e., navigate away before processing return statement
    });
  }
  
  return (
    <div>
      <h1>This is my personal Place</h1>
      {<Logout />}
    </div>
  );
  }