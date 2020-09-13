import React, { useState, useEffect } from "react";
import Video from "./Video";
import video from "./videos/first.mp4";
import video2 from "./videos/second.mp4";
import axios from "./axios";

function App() {
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    const fetchPost = async () => {
      const resp = await axios.get("/api/posts");
      setvideos(resp.data);
      console.log(resp.data);
      return resp;
    };
    fetchPost();
  }, []);
  return (
    <div className="app">
      <div className="app_video">
        {videos.map(({ url, name, desc, song, like, comment, share }, i) => (
          <Video
            key={i}
            sorce={i ? video2 : video}
            creator={name}
            desc={desc}
            song={song}
            likes={like}
            comments={comment}
            share={share}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
