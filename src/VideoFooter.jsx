import React from "react";
import MusicNoteIcon from "@material-ui/icons/MusicNote";

function VideoFooter({ creator, desc, song }) {
  return (
    <>
      <div className="video_footer">
        <h3 className="video_creator">{creator}</h3>
        <p className="video_decs" style={{ paddingBottom: "1rem" }}>
          {desc}
        </p>
        <p>
          <MusicNoteIcon style={{ fontSize: "0.6rem" }} />
          <marquee
            behavior="scroll side"
            direction="left"
            style={{ fontSize: "0.6rem", width: "10rem" }}
          >
            {song}
          </marquee>
        </p>
      </div>
    </>
  );
}

export default VideoFooter;
