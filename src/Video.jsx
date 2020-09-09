import React, { useRef, useState } from "react";
// import img from './videos/image.jpeg'
function Video(props) {
  const videoRef = useRef();
  const [playing, setPlaying] = useState(true);

  const handleVideoPress = () => {
    // playing then stopit
    if (playing) {
      videoRef.current.pause();
      console.log("pause");
      setPlaying(false);
    } else {
      videoRef.current.play();
      console.log("play");
      setPlaying(true);
    }
    // otherwise play
  };
  return (
    <>
      <div className="video">
        <video
          onClick={handleVideoPress}
          ref={videoRef}
          className="video_player"
          src={props.sorce}
          loop
          autoPlay
        />
        {/* video footer */}

        {/* video sidebar */}
      </div>
    </>
  );
}

export default Video;
