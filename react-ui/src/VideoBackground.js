import React from "react";
import videoBg from "./Backgroundvideo/back.mp4";

const VideoBackground = () => {
  return (
    <>
      <div className="main">
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted />
        <div className="content">
          <h1>Welcome</h1>
          <p>Ajit kumar.</p>
        </div>
      </div>
    </>
  );
};

export default VideoBackground;
