import React from "react";
import Asta from "../../Songs/black clover/Nacht.jpeg";
import { Icon } from "@iconify/react";
import skipBackIcon from "@iconify/icons-ph/skip-back";
import playButtonIcon from "@iconify/icons-gg/play-button-o";
import skipForwardIcon from "@iconify/icons-ph/skip-forward";
import repeatLineIcon from "@iconify/icons-clarity/repeat-line";
import soundOnIcon from "@iconify/icons-akar-icons/sound-on";
import songQueueIcon from "@iconify/icons-carbon/query-queue";
import arrowsFullscreenIcon from "@iconify/icons-bi/arrows-fullscreen";
import pauseButtonIcon from "@iconify/icons-ant-design/pause-circle-outlined";

const MobileFullScreen = ({
  songImg,
  songName,
  songArtist,
  pause,
  setPlayback,
}) => {
  return (
    <div className="mob-fs-bg">
      <div className="mob-song-img-container">
        <img src={songImg} alt="" className="mob-fs-songImg" />
      </div>

      {/* Mobile Media Controls */}
      <section className="mob-media-controls">
        <Icon
          className="mob-player-icon"
          icon={songQueueIcon}
          style={{ fontSize: "33px" }}
        />
        <Icon
          className="mob-player-icon"
          icon={skipBackIcon}
          style={{ fontSize: "55px" }}
        />

        {pause === true ? (
          <Icon
            className="mob-player-icon"
            icon={pauseButtonIcon}
            style={{ fontSize: "88px" }}
            onClick={setPlayback}
          />
        ) : (
          <Icon
            className="mob-player-icon"
            icon={playButtonIcon}
            style={{ fontSize: "88px" }}
            // function stored in mobile-player
            onClick={setPlayback}
          />
        )}

        <Icon
          className="mob-player-icon"
          icon={skipForwardIcon}
          style={{ fontSize: "55px" }}
        />

        <Icon
          className="outter-icons playbar-icon fs-repeat-icon"
          icon={repeatLineIcon}
          style={{ fontSize: "33px" }}
        />
      </section>

      {/* Seekbar */}
      <MobileSeekBar></MobileSeekBar>
    </div>
  );
};

const MobileSeekBar = () => {
  return (
    <div className="mob-seekbar-wrapper">
      <input type="range" className="slider seek-slider" min="0" />
    </div>
  );
};

export default MobileFullScreen;
