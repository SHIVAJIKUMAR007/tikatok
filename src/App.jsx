import React from "react";
import Video from "./Video";
import video from "./videos/first.mp4";
import video2 from "./videos/second.mp4";

function App() {
  return (
    <div className="app">
      <div className="app_video">
        <Video key="1" sorce={video} />
        <Video key="2" sorce={video2} />
        <Video key="3" sorce={video} />
        <Video key="4" sorce={video2} />
        <Video key="5" sorce={video} />
        <Video key="6" sorce={video2} />
      </div>
    </div>
  );
}

export default App;
