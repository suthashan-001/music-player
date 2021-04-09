import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import shuffleIcon from "@iconify/icons-bi/shuffle";
import skipBackIcon from "@iconify/icons-ph/skip-back";
import playButtonIcon from "@iconify/icons-gg/play-button-o";
import skipForwardIcon from "@iconify/icons-ph/skip-forward";
import repeatLineIcon from "@iconify/icons-clarity/repeat-line";
import soundOnIcon from "@iconify/icons-akar-icons/sound-on";
import songQueueIcon from "@iconify/icons-carbon/query-queue";
import arrowsFullscreenIcon from "@iconify/icons-bi/arrows-fullscreen";
import reactDom from "react-dom";
import image from "../background-images/decor.png";

const PlayBar = () => {
  return (
    <div className="playbar-background">
      <div className="playbar-wrapper">
        <SongDetails />
        <MediaControls />
        <OtherControls />
      </div>
    </div>
  );
};

const SeekBar = () => {
  return (
    <div className="seekbar-wrapper">
      <input type="range" className="slider seek-slider" min="0" max="100" />
    </div>
  );
};

const SongDetails = () => {
  return (
    <div className="song-details-wrapper">
      <div className="song-image"></div>
      <div className="song-info">
        <p className="song-frequency">432hz</p>
        <div className="style-divider"></div>
        <div className="song-title-artist">
          <p className="song-title">Title</p>
          <p className="song-artist">artists</p>
        </div>
      </div>
    </div>
  );
};

const MediaControls = () => {
  return (
    <div className="media-controls-wrapper">
      <img className="playbar-decor" src={image} alt="not found" />
      <SeekBar />
      <p className="time-before time">0.33</p>
      <Icon icon={shuffleIcon} style={{ color: "#e3e1e1", fontSize: "33px" }} />
      <Icon
        icon={skipBackIcon}
        style={{ color: "#ffffff", fontSize: "55px" }}
      />
      <Icon
        icon={playButtonIcon}
        style={{ color: "#ffffff", fontSize: "66px" }}
      />
      <Icon
        icon={skipForwardIcon}
        style={{ color: "#ffffff", fontSize: "55px" }}
      />

      <Icon
        icon={repeatLineIcon}
        style={{ color: "#e3e1e1", fontSize: "33px" }}
      />
      <p className="time-after time">3.33</p>
    </div>
  );
};

const OtherControls = () => {
  // temp states to get Gui of sound bar working
  const volumeSlider = React.useRef(null);
  const [soundValue, setSoundValue] = React.useState(50);
  const [sliderHover, setSliderHover] = React.useState(false);

  //update gui colour postition of sound bar
  React.useEffect(() => {
    //change colour of slider on hover
    if (sliderHover === true) {
      var color =
        "linear-gradient(90deg, rgb(224, 171, 138)" +
        soundValue +
        "% , rgb(180, 180, 180)" +
        soundValue +
        "%)";
      volumeSlider.current.style.background = color;
    } else {
      // changing css styling (gradient) based on the value of soundbar
      var color =
        "linear-gradient(90deg, rgb(255,255,255)" +
        soundValue +
        "% , rgb(180, 180, 180)" +
        soundValue +
        "%)";
      volumeSlider.current.style.background = color;
    }
  }, [soundValue, sliderHover]);

  return (
    <div className="other-controls-wrapper">
      <Icon
        className="icon"
        icon={songQueueIcon}
        style={{ fontSize: "33px" }}
      />
      <div className="volume-control">
        <Icon
          className="icon"
          icon={soundOnIcon}
          style={{ fontSize: "33px" }}
        />
        <input
          type="range"
          className="slider volume-slider"
          min="0"
          max="100"
          value={soundValue}
          ref={volumeSlider}
          onChange={(e) => {
            setSoundValue(e.target.value);
          }}
          onMouseEnter={() => {
            setSliderHover(true);
          }}
          onMouseLeave={() => {
            setSliderHover(false);
          }}
        />
      </div>
      <Icon
        icon={arrowsFullscreenIcon}
        className="icon fullscreen-icon"
        style={{ fontSize: "22px" }}
      />
    </div>
  );
};

export default PlayBar;
