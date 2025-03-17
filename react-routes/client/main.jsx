import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { Signup } from './../imports/ui/Signup.jsx';
import { Link } from './../imports/ui/Link.jsx';





Meteor.startup(() => {
  // render(<Signup />, document.getElementById('react-target'));
  render(<Link />, document.getElementById('react-target'));
});


