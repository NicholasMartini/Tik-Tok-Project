import React, { useState } from "react";
import "./videoSideBar.css";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";

function VideoSideBar({ likes, messages, shares }) {
  const [like, setLiked] = useState(false);
  function handdleLike() {
    setLiked(!like);
  }

  return (
    <div className="videoSideBar">
      <div className="videoSideBar__option" onClick={handdleLike}>
        {like ? (
          <FavoriteIcon fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}

        <p>{like ? likes + 1 : likes}</p>
      </div>
      <div className="videoSideBar__option">
        <ChatIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSideBar__option">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSideBar;
