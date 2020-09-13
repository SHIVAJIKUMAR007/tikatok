import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

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
        <div className="video_element">
          <VideoFooter
            creator={props.creator}
            desc={props.desc}
            song={props.song}
          />
          <VideoSidebar
            likes={props.likes}
            comments={props.comments}
            share={props.share}
          />
        </div>
      </div>
    </>
  );
}

export default Video;
