import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import { AuthContext } from '../../context/authentication/authenticationContext';

export default function Logout() {
  const authContext = useContext(AuthContext)
  const onSignOut = () => {
    authContext.signOut()
  };
  return (
    <div>
      <Button variant='contained' style={{marginRight: '16px'}} onClick={onSignOut}>Logout</Button>
    </div>
  );
}
