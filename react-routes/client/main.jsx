import React from 'react';   
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom'; 
// BrowserRouter keeps UI in sync with the url
// Routes - similar to a switch were the Route is chosen based on its path
// Route is a component that renders some UI when its path matches the current URL
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Signup } from './../imports/ui/Signup.jsx';      
import { Link  } from './../imports/ui/Link.jsx';   
import { NotFound } from './../imports/ui/NotFound.jsx';
import { Login } from './../imports/ui/Login.jsx';    


// create react-router routes
const routes = (  // jsx in the parenthesis
                  // the jsx is a bunch of instances of route with one instanc of router

  <BrowserRouter>{/* Uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL */}
    <Routes>
      <Route path="/" exact element={<Login />} />{/* the "/" is the default root directory http://localhost:3000/ */}
      {/* the exact forces the match not to have anything past the forward slash like /links */ }
      <Route path="/signup" element={<Signup />}/>{/* path and component prop used to render component */}     
      <Route path="/links" element={<Link />}/>{/* the /link is the url we want to see */}
      <Route path="*" element={<NotFound />} />{/* using Routes, if nothing matches - load NotFound */}
    </Routes>
  </BrowserRouter>

);



Meteor.startup(() => {
  // render the routes which are listening for a path
  render(routes, document.getElementById('react-target'));   
});