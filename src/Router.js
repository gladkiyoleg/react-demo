import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import VideoRecording from './components/pages/VideoRecording/VideoRecording';
import VideoRecordingLib from './components/pages/VideoRecordingLib/VideoRecordingLib';

const NotFound = () => <div>Not found page</div>;

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" render={props => <About {...props} />}/>
      <Route path="/video-recording" render={props => <VideoRecording {...props} />}/>
      <Route path="/video-recording-lib" render={props => <VideoRecordingLib {...props} />}/>
      <Route component={NotFound}/>
    </Switch>
  );
};
