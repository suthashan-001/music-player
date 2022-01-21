import React from "react";

import { useEffect, useState } from "react";

import { Icon } from "@iconify/react";
import skipBackIcon from "@iconify/icons-ph/skip-back";
import playButtonIcon from "@iconify/icons-gg/play-button-o";
import skipForwardIcon from "@iconify/icons-ph/skip-forward";
import fullscreenExitIcon from "@iconify/icons-cil/fullscreen-exit";
import pauseButtonIcon from "@iconify/icons-ant-design/pause-circle-outlined";

const MobileFullScreen = ({
  songImg,
  songName,
  songArtist,
  pause,
  setPlayback,
  currentTime,
  seekTime,
  setSeekTime,
  duration,
  convertTime,
  isSeeking,
  setIsSeeking,
  foundSeekTime,
  toggleFullScreen,
  previousSong,
  nextSong,
}) => {
  let [exitFullScreenClicked, setExitFullScreenClicked] = useState(false);

  // exit full screen (basically used to trigger a rerender)
  useEffect(() => {
    if (exitFullScreenClicked === true) {
      toggleFullScreen(false);
      setExitFullScreenClicked(false);
    }
  }, [exitFullScreenClicked]);

  return (
    <div className="mob-fs-bg">
      <div className="mobile-fs-exit-icon-container">
        <Icon
          icon={fullscreenExitIcon}
          className="mobile-fs-exit-icon"
          onClick={() => {
            setExitFullScreenClicked(true);
          }}
        />
      </div>
      <div className="mob-song-img-container">
        <img src={songImg} alt="" className="mob-fs-songImg" />
      </div>

      <div className="mobile-song-details">
        <p className="mobile-song-name">{songName}</p>
        <p className="mobile-song-artist">{songArtist}</p>
      </div>

      {/* Mobile Media Controls */}
      <section className="mob-media-controls">
        <Icon
          className="mob-player-icon"
          icon={skipBackIcon}
          style={{ fontSize: "55px" }}
          onClick={previousSong}
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
          onClick={nextSong}
        />
      </section>

      {/* Seekbar */}
      <MobileSeekBar
        currentTime={currentTime}
        seekTime={seekTime}
        setSeekTime={setSeekTime}
        duration={duration}
        convertTime={convertTime}
        isSeeking={isSeeking}
        setIsSeeking={setIsSeeking}
        foundSeekTime={foundSeekTime}
      ></MobileSeekBar>
    </div>
  );
};

const MobileSeekBar = ({
  currentTime,
  seekTime,
  setSeekTime,
  duration,
  convertTime,
  isSeeking,
  setIsSeeking,
  foundSeekTime,
}) => {
  const MobileSeekSlider = React.useRef(null);
  const [mobileSliderHover, setMobileSliderHover] = React.useState(false);

  //update gui colour postition of seek bar
  React.useEffect(() => {
    // thank you higher self!!!!
    let adjustedPercentage = (currentTime / duration) * 100;

    //change colour of slider on hover
    if (mobileSliderHover === true) {
      let color_e =
        "linear-gradient(90deg, rgb(75, 55, 45)" +
        adjustedPercentage +
        "% , rgb(255, 255, 255)" +
        adjustedPercentage +
        "%)";
      MobileSeekSlider.current.style.background = color_e;
    } else {
      let color_f =
        "linear-gradient(90deg, rgb(75, 55, 45)" +
        adjustedPercentage +
        "% , rgb(180, 180, 180)" +
        adjustedPercentage +
        "%)";
      MobileSeekSlider.current.style.background = color_f;
    }
  }, [currentTime, mobileSliderHover, duration]);

  //   seekbar during seekmode (the seekbar interacts with user "shows where the user wants timestamp to be")
  if (isSeeking === true) {
    return (
      <div className="mob-seekbar-wrapper">
        <input
          ref={MobileSeekSlider}
          type="range"
          className="slider seek-slider mobile-seek-slider"
          min="0"
          max={`${duration}`}
          value={`${currentTime}`}
          //value while the slider is being dragged
          onChange={(e) => {
            setSeekTime(e.target.value);
          }}
          //when slider is released it selects the new time stamp
          onMouseUp={() => {
            foundSeekTime(seekTime);
          }}
        />
        <div className="display-mobile-time">
          <p className="time-before time">{convertTime(currentTime)}</p>
          <p className="time-after time">{convertTime(duration)}</p>
        </div>
      </div>
    );
    //   seekbar showing timestamp of the song
  } else {
    return (
      <div className="mob-seekbar-wrapper">
        <input
          ref={MobileSeekSlider}
          type="range"
          className="slider seek-slider mobile-seek-slider"
          min="0"
          max={`${duration}`}
          value={`${currentTime}`}
          onChange={(e) => {
            setSeekTime(e.target.value);
          }}
          onMouseUp={() => {
            foundSeekTime(seekTime);
          }}
          onMouseEnter={() => {
            setMobileSliderHover(true);
          }}
          onMouseLeave={() => {
            setMobileSliderHover(false);
          }}
        />
        <div className="display-mobile-time">
          <p className="time-before time mobile-time">
            {convertTime(currentTime)}
          </p>
          <p className="time-after time mobile-time">{convertTime(duration)}</p>
        </div>
      </div>
    );
  }
};

export default MobileFullScreen;
