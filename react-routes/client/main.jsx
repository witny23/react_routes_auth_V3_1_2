import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';


let placeholder = 'this is a placeholder';


Meteor.startup(() => {
  render(placeholder, document.getElementById('react-target'));
});
