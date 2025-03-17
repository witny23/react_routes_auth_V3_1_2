import React from 'react';
import { useNavigate } from 'react-router-dom';
//  import Accounts so we can remove the hashedToken with Accounts.logout()
import { Accounts } from 'meteor/accounts-base';

export const Logout = () => {

  let navigate = useNavigate();

  function onLogout() {
    Accounts.logout();
    navigate("/");  // now that we know logout() is working, send the user to root
    console.log('Accounts.logout');  
  }
  return (
      <>
        <button onClick={onLogout}> Logout</button>  
      </>
    )
  
  }