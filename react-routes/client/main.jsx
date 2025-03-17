import React from 'react';   
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Signup } from './../imports/ui/Signup.jsx';      
import { PersonalPlace  } from '../imports/ui/PersonalPlace.jsx';   
import { NotFound } from './../imports/ui/NotFound.jsx';
import { Login } from './../imports/ui/Login.jsx';   




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



Meteor.startup(() => {
  render(routes, document.getElementById('react-target'));   
});