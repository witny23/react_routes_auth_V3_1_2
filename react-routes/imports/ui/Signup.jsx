import React from 'react';
import { useState } from "react";


export const Signup = () => {
    const [placeholder, setPlaceholder] = useState("Placeholder for");  
    return (
      <>
        <h1>{placeholder} Signup Functional Component!</h1>  
        <button onClick={() => setPlaceholder("New Placeholder for")}> 
            change placeholder</button>  
      </>
    )
  
  }