import React, { useState } from 'react';

const DrumKit = () => {
  const [snareAudio] = useState(
    new Audio(
      "https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/drums/Snare.mp3"
    )
  );

  const snareDrumClick = () => {
    snareAudio.currentTime = 0;
    snareAudio.play();
  };

  const [SmallRackTomAudio] = useState(
    new Audio(
      "https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/drums/Small-Rack-Tom.mp3"
    )
  );

  const SmallRackTomAudioPlay = () => {
    SmallRackTomAudio.currentTime = 0;
    SmallRackTomAudio.play();
  };

  const [crashAudio] = useState(
    new Audio(
      "https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/drums/Crash.mp3"
    )
  );

  const crashAudioPlay = () => {
    crashAudio.currentTime = 0;
    crashAudio.play();
  };

  const [kickAudio] = useState(
    new Audio(
      "https://s3.amazonaws.com/iamjoshellis-codepen/pens-of-rock/drums/Kick.mp3"
    )
  );

  const kickAudioPlay = () => {
    kickAudio.currentTime = 0;
    kickAudio.play();
  };

  return (
    <div className="drum-kit">
      <button onClick={snareDrumClick}>Snare Drum</button>
      <button onClick={SmallRackTomAudioPlay}>Small Rack Tom</button>
      <button onClick={crashAudioPlay}>Crash</button>
      <button onClick={kickAudioPlay}>Kick</button>
      {/* Add other HTML elements for your drum kit */}
    </div>
  );
};

export default DrumKit;
