import React, { useRef } from "react";

const VideoPlay = () => {
  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };
  return (
    <>
      <div className="grid-btn">
        <button className="btn" onClick={handlePlay}>
          Play
        </button>
        <button className="btn-pause" onClick={handlePause}>
          Pause
        </button>
      </div>
      <video width="520" height="240" ref={videoRef}>
        <source src="/Videos/progr.mp4" />
      </video>
    </>
  );
};

export default VideoPlay;
