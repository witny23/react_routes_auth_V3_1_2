import React from 'react'; 
// A <Navigate> element changes the current location when it is rendered.
import { Navigate } from 'react-router-dom';
import { Accounts } from 'meteor/accounts-base';

  // if the user is logged in, they will be redirected 
  //    from public components (i.e., <Login />, <Signup />) to the private personalPlace
  export const PublicRoute = ({ children }) => {     // a component is passed in (i.e. <Login />)
    console.log('PublicRoute Accounts.userId(). If true, goto /personalPlace:', !!Accounts.userId());
    if (!!Accounts.userId()) {  // if a userID exists (user id string becomes false then true)
      return <Navigate to="/personalPlace" replace />;
    } 

    return children;  // return the original component if the user is logged in                   
  }; 

  // if the user is not logged in, when they try to go to a private
  //    component, the will be directed to the root/login component
  export const PrivateRoute = ({ children }) => {     // a component is passed in (i.e. <PersonalPlace />)
    console.log('PrivateRoute Accounts.userId(). no id?, goto login:', !Accounts.userId());
    if (!Accounts.userId()) { // if they do not have a userID (null becomes true)
      return <Navigate to="/" replace />;   // send them to root/login
    }

    return children;  // return the original component if the user is logged in                   
  };