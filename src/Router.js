import React, { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import VideoRecording from './components/pages/VideoRecording/VideoRecording';
import VideoRecordingLib from './components/pages/VideoRecordingLib/VideoRecordingLib';
import { AuthContext } from './components/context/authentication/authenticationContext';

const NotFound = () => <div>Not found page</div>;


export default function Router() {
  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/about">
        <About/>
      </Route>
      <PrivateRoute path="/video-recording">
        <VideoRecording/>
      </PrivateRoute>
      <PrivateRoute path="/video-recording-lib">
        <VideoRecordingLib/>
      </PrivateRoute>
      <Route component={NotFound}/>
    </Switch>
  );
};

const PrivateRoute = ({ children, ...rest }) => {
  const authContext = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authContext.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
