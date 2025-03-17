import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import Signup from './../imports/ui/Signup.jsx';
import Link from './../imports/ui/Link.jsx';

// let placeholder = 'this is a placeholder';

// the following is a class component
class Signup_Class extends React.Component {
  
  render() {
    return (
      <>
        <h1>Signup Class Component!</h1> 
      </>
    )
  }
}



// Challenge 1, breakout the Signup component into its own file
// to do so:
//    - inside of imports/ui
//        - create the Signup.jsx
//        - define the component and export as default
//    - import and use it in client/main.jsx

// Challenge 2, create a Link functional component
// to do so:
//  - create imports/ui/Link.jsx
//  - create your own useState hook and change it with a button
//  - import Link into client/main.jsx
//  - render Link (just replace <Signup /> in render)

Meteor.startup(() => {
  // render(placeholder, document.getElementById('react-target'));
  // render(<Signup_Class />, document.getElementById('react-target'));
  // render(<Signup />, document.getElementById('react-target'));
  render(<Link />, document.getElementById('react-target'));
});


