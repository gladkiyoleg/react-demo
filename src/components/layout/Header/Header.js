import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

import '../../../scss/App.scss';
import FBLogin from '../../elements/FBLogin/FBLogin';
import { AuthContext } from '../../context/authentication/authenticationContext';
import Logout from '../../elements/Logout/Logout';

export default function Header() {
  const authContext = useContext(AuthContext);
  const isAuthenticated = authContext.isAuthenticated;
  const links = [
    {
      name: 'Home',
      path: '/',
      isExact: true,
      isVisible: true,
    },
    {
      name: 'About',
      path: '/about',
      isExact: true,
      isVisible: true,
    },
    {
      name: 'Record video',
      path: '/video-recording',
      isExact: true,
      isVisible: isAuthenticated,
    },
    {
      name: 'Record video (with lib)',
      path: '/video-recording-lib',
      isExact: true,
      isVisible: isAuthenticated,
    },
  ];
  const filteredLinks = links.filter(el => el.isVisible);

  return (
    <Paper elevation={3} className={`header`}>
      <div>
        {filteredLinks.map((link, i) => {
          return (
            <NavLink exact={link.isExact} to={link.path} key={i}>
              <Button>{link.name}</Button>
            </NavLink>
          );
        })}
      </div>
      {!isAuthenticated ? <FBLogin/> : <Logout/>}
    </Paper>
  );
};


