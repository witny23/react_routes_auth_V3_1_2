import React from 'react';   
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Signup } from './../imports/ui/Signup.jsx';      
import { PersonalPlace  } from '../imports/ui/PersonalPlace.jsx';   
import { NotFound } from './../imports/ui/NotFound.jsx';
import { Login } from './../imports/ui/Login.jsx';   

// use Tracker.autorun to track if user is logged in
// going to watch meteor.userId: if it is null -> logged out

// Tracker will allow us to track if user logged in
import { Tracker } from 'meteor/tracker';


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

Tracker.autorun(() => {
    // going to store users auth status (TorF)
  // this will be updated as the status changed b/c of Tracker.autorun()
  const isAuthenticated = !!Meteor.userId();
  console.log('isAuthenticated ' + isAuthenticated)
})
// falsey or truthy explanation
      // in console:
          // enter 'hi' and "hi" is returned
          // enter !'hi' and false is returned
          // enter !!'hi' and true is returned
          // enter !null and true is returned
          // enter !!null and false is returned

Meteor.startup(() => {
  render(routes, document.getElementById('react-target'));   
});