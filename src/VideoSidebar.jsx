import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";
import CommentIcon from "@material-ui/icons/Comment";

function VideoSidebar({ likes, comments, share }) {
  const [liked, setliked] = useState(false);
  return (
    <>
      <div className="video_sidebar">
        {liked ? (
          <>
            <FavoriteBorderIcon
              style={{ fontSize: "1.2rem", color: "red" }}
              onClick={() => setliked(false)}
            />
          </>
        ) : (
          <>
            <FavoriteBorderIcon
              style={{ fontSize: "1.2rem" }}
              onClick={() => setliked(true)}
            />
          </>
        )}
        <div style={{ fontSize: "0.6rem" }}>
          {liked ? parseInt(likes) + 1 : parseInt(likes)}
        </div>

        <CommentIcon style={{ fontSize: "1.2rem" }} />
        <div style={{ fontSize: "0.6rem" }}>{comments}</div>
        <ShareIcon style={{ fontSize: "1.2rem" }} />
        <div style={{ fontSize: "0.6rem" }}>{share}</div>
      </div>
    </>
  );
}

export default VideoSidebar;
