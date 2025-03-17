import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { useState } from "react";
// The React useState Hook allows us to track state in a function component.

let placeholder = 'this is a placeholder';

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

// the following is a functional component that returns jsx
const Signup = () => {
  const [color, setColor] = useState("red");  // color is set to red, setColor is used to update color
  return (
    <>
      <h1>Signup Functional Component!</h1>  
      <p>The state of color is {color}!</p>  
      <button onClick={() => setColor("blue")}> blue</button>  
    </>
  )

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
  render(<Signup />, document.getElementById('react-target'));
});


