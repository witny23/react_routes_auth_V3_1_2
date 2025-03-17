import React from 'react';   
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Signup } from './../imports/ui/Signup.jsx';      
import { PersonalPlace  } from '../imports/ui/PersonalPlace.jsx';   
import { NotFound } from './../imports/ui/NotFound.jsx';
import { Login } from './../imports/ui/Login.jsx';   

import { PrivateRoute, PublicRoute } from './../imports/ui/RouteDecisions.jsx';     


const routes = ( 

  <BrowserRouter>
    <Routes>
      {/* create a clean means to direct users to the correct component 
          - non-logged in users: login, signup, notFound - logged in users: personalPlace */}  
      <Route path="/" exact element={<PublicRoute><Login /></PublicRoute>} />
      <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>}/>
      {/* create a clean means to limit access to private components such as personalPlace */}  
      <Route path="/personalPlace" element={<PrivateRoute><PersonalPlace /></PrivateRoute>}/>
      <Route path="*" element={<PublicRoute><NotFound /></PublicRoute>} />
    </Routes>
  </BrowserRouter>
);



Meteor.startup(() => {
  // nice to indicate if a user is logged in
  console.log('Logged in (main.jsx)?', !!Meteor.userId())
  render(routes, document.getElementById('react-target'));   
});