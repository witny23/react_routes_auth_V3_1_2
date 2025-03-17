import React from 'react';
import {Link} from 'react-router-dom';

// functional component
export const NotFound = () => (
    <div>
      <h1>Page Not Found</h1>
      <Link to="/">Lost? Head to Login</Link>
    </div>
  );