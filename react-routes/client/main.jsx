import React from 'react';   
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Signup } from './../imports/ui/Signup.jsx';      
import { PersonalPlace  } from '../imports/ui/PersonalPlace.jsx';   
import { NotFound } from './../imports/ui/NotFound.jsx';
import { Login } from './../imports/ui/Login.jsx';   

// import { Tracker } from 'meteor/tracker';


const routes = ( 

  <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Login />} />
      <Route path="/signup" element={<Signup />}/>
      <Route path="/personalPlace" element={<PersonalPlace />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);
// no longer using the following - the concept was moved to PersonalPlace.jsx
// Tracker.autorun(() => {
//   const isAuthenticated = !!Meteor.userId();
//   console.log('isAuthenticated ' + isAuthenticated)
// })


Meteor.startup(() => {
  // nice to indicate if a user is logged in
  console.log('Logged in (main.jsx)?', !!Meteor.userId())
  render(routes, document.getElementById('react-target'));   
});