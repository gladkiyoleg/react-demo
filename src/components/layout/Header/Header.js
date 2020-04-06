import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import '../../../scss/App.scss';

export default function Header() {
  return (
    <Paper elevation={3} className={`header`}>
      <div>
        <NavLink exact to='/'>
          <Button>Home</Button>
        </NavLink>
        <NavLink exact to='/about'>
          <Button>About</Button>
        </NavLink>
        <NavLink exact to='/video-recording'>
          <Button>Record video</Button>
        </NavLink>
        <NavLink exact to='/video-recording-lib'>
          <Button>Record video (with lib)</Button>
        </NavLink>
      </div>
    </Paper>
  );
};
