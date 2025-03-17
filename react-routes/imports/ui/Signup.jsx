import React from 'react';
import { useState } from "react";
// The React useState Hook allows us to track state in a function component.


// the following is a functional component that returns jsx
export default Signup = () => {
    const [color, setColor] = useState("red");  // color is set to red, setColor is used to update color
    return (
      <>
        <h1>Signup Functional Component!</h1>  
        <p>The state of color is {color}!</p>  
        <button onClick={() => setColor("blue")}> blue</button>  
      </>
    )
  
  }