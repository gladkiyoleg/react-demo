import React, { useContext } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import Button from '@material-ui/core/Button';

import { AuthContext } from '../../context/authentication/authenticationContext';

export default function FBLogin() {
  const authContext = useContext(AuthContext);
  const responseFacebook = (response) => {
    authContext.setAuth(response);
  };
  return (
    <div>
      <FacebookLogin
        appId={process.env.REACT_APP_FB_APP_KEY}
        fields="name,email,picture"
        callback={responseFacebook}
        render={renderProps => (
          <Button variant="contained" color="primary" style={{ marginRight: '16px' }}
                  onClick={renderProps.onClick}>FB</Button>
        )}
      />
    </div>
  );
}
