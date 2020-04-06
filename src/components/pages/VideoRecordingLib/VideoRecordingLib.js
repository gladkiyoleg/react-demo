import React, { useState } from 'react';
import VideoRecorder from 'react-video-recorder';

import '../../../scss/Video.scss';

const DownloadLink = (props) => {
  if (props.blob) {
    return <a href={props.blob} download>Download</a>;
  }
  return <div/>;
};

export default function VideoRecordingLib() {
  const [blob, setBlob] = useState('');
  return (
    <div className='video--wrapper'>
      <VideoRecorder
        timeLimit={15000}
        replayVideoAutoplayAndLoopOff={true}
        showReplayControls={true}
        onRecordingComplete={(videoBlob) => {
          setBlob((blob) => blob = URL.createObjectURL(videoBlob));
        }}
      />
      <DownloadLink blob={blob}/>
    </div>

  );
}
