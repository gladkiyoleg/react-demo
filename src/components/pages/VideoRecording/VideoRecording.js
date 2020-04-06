import React, { Component } from 'react';
import '../../../scss/Video.scss';

export default class VideoRecording extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  render() {
    return (
      <div>
        <div className='video--wrapper'>
          <video className='video' id='video' autoPlay ref={this.videoRef}/>
        </div>
        <div className='button--wrapper'>
          <button className='button'>Start</button>
          <button className='button'>Stop</button>
        </div>
      </div>
    );
  }

  componentDidMount() {
    navigator.mediaDevices.getUserMedia(
      { video: true }).then(stream => {
      this.setState({ videoRef: stream });
    });
  }

  componentDidUpdate() {
    this.updateVideoStream();
  }

  updateVideoStream() {
    if (this.videoRef.current.srcObject !== this.state.videoRef) {
      console.log(this.state.videoRef);
      this.videoRef.current.srcObject = this.state.videoRef;
    }
  }
}
