import React from 'react';
import { useNavigate } from 'react-router-dom';
//  import Accounts so we can remove the hashedToken with Accounts.logout()
import { Accounts } from 'meteor/accounts-base';

export const Logout = () => {

  let navigate = useNavigate();

  function logoutCallback() { // when done logging out, then send to login
    navigate("/");
  }

  function onLogout() {
    // need to logout before send person to login 
    Accounts.logout(logoutCallback);
    // navigate("/");  
    console.log('Accounts.logout');  
  }
  return (
      <>
        <button onClick={onLogout}> Logout</button>  
      </>
    )
  
  }