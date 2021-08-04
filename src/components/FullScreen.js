import React from "react";
import { Icon } from "@iconify/react";
import skipBackIcon from "@iconify/icons-ph/skip-back";
import playButtonIcon from "@iconify/icons-gg/play-button-o";
import skipForwardIcon from "@iconify/icons-ph/skip-forward";
import repeatLineIcon from "@iconify/icons-clarity/repeat-line";
import soundOnIcon from "@iconify/icons-akar-icons/sound-on";
import songQueueIcon from "@iconify/icons-carbon/query-queue";
import fullscreenExitIcon from "@iconify/icons-cil/fullscreen-exit";
import pauseButtonIcon from "@iconify/icons-ant-design/pause-circle-outlined";

const FullScreen = (props) => {
  var fullscreenPannel = document.querySelector(".fs-background");
  var repeatIcon = document.querySelector(".repeat-icon");
  var repeatCircle = document.querySelector(".repeat-circle");
  var repeatInfinite = document.querySelector(".repeat-infinite");

  // full screen repeat icon
  var fs_repeatIcon = document.querySelector(".fs-repeat-icon");
  var fs_repeatCircle = document.querySelector(".fs-repeat-circle");
  var fs_repeatInfinite = document.querySelector(".fs-repeat-infinite");

  return (
    <div className="fs-background">
      <div className="fs-container">
        {/* column 1 */}
        <div className="fs-col-1">
          <img src={props.songImage} alt="Not found" className="fs-songImage" />
        </div>

        {/* column 2 */}
        <div className="fs-col-2">
          <div>
            <div className="fs-title-artist">
              <p className="fs-songTitle">{props.songname}</p>
              <p className="fs-songArtist">{props.songartist}</p>
            </div>

            <div className="fs-songTime">
              <p className="fs-Time">{props.convertTime(props.currentTime)}</p>
              <p className="fs-Time">{props.convertTime(props.duration)}</p>
            </div>
          </div>

          <div className="fs-media-controls">
            <FullScreenSeekBar
              currentTime={props.currentTime}
              seekTime={props.seekTime}
              setSeekTime={props.setSeekTime}
              duration={props.duration}
              convertTime={props.convertTime}
              isSeeking={props.isSeeking}
              setIsSeeking={props.setIsSeeking}
              foundSeekTime={props.foundSeekTime}
            ></FullScreenSeekBar>

            <div className="fs-icons">
              <Icon
                className="inner-icons playbar-icon"
                icon={songQueueIcon}
                style={{ fontSize: "33px" }}
                onClick={() => {
                  //exit fullscreen and display queue page
                  fullscreenPannel.classList.remove("show");
                  props.setDisplayQueue(true);
                }}
              />

              <Icon
                className="inner-icons playbar-icon"
                icon={skipBackIcon}
                style={{ fontSize: "55px" }}
                onClick={props.previousSong}
              />
              {props.pause ? (
                <Icon
                  className="mainPlay-icon playbar-icon"
                  icon={playButtonIcon}
                  style={{ fontSize: "88px" }}
                  onClick={props.setPlayback}
                />
              ) : (
                <Icon
                  className="mainPlay-icon playbar-icon"
                  icon={pauseButtonIcon}
                  style={{ fontSize: "88px" }}
                  onClick={props.setPlayback}
                />
              )}
              <Icon
                className="inner-icons playbar-icon"
                icon={skipForwardIcon}
                style={{ fontSize: "55px" }}
                onClick={props.nextSong}
              />
              <div
                className="repeat-button"
                onClick={() => {
                  if (props.repeatQueue === false) {
                    props.setRepeatQueue(true);
                    repeatIcon.classList.add("show-repeat");
                    repeatCircle.classList.add("show");
                    fs_repeatIcon.classList.add("show-repeat");
                    fs_repeatCircle.classList.add("show");
                  } else if (
                    props.repeatQueue === true &&
                    props.repeatSong === false
                  ) {
                    props.setRepeatSong(true);
                    repeatInfinite.classList.add("show");
                    fs_repeatInfinite.classList.add("show");
                  } else if (props.repeatSong === true) {
                    props.setRepeatSong(false);
                    props.setRepeatQueue(false);
                    repeatIcon.classList.remove("show-repeat");
                    repeatCircle.classList.remove("show");
                    repeatInfinite.classList.remove("show");
                    fs_repeatIcon.classList.remove("show-repeat");
                    fs_repeatCircle.classList.remove("show");
                    fs_repeatInfinite.classList.remove("show");
                  }
                }}
              >
                <Icon
                  className="outter-icons playbar-icon fs-repeat-icon"
                  icon={repeatLineIcon}
                  style={{ fontSize: "33px" }}
                />
                <div className="fs-repeat-circle"></div>
                <div className="fs-repeat-infinite">∞</div>
              </div>
            </div>
          </div>
        </div>

        {/* column 3 */}
        <div className="fs-col-3">
          <div
            className="fullscreen-exit icon-background"
            onClick={() => {
              fullscreenPannel.classList.remove("show");
            }}
          >
            <Icon
              icon={fullscreenExitIcon}
              className="fs-exit-icon"
              style={{ fontSize: "33px" }}
            />
          </div>

          <FullScreenVolume
            volume={props.volume}
            handleVolume={props.handleVolume}
          ></FullScreenVolume>
        </div>
      </div>
    </div>
  );
};

const FullScreenVolume = ({ volume, handleVolume }) => {
  var soundSlider = document.querySelector(".fs-volume-slider-box");

  const FullScreenVolume = React.useRef(null);
  const [volumeHover, setVolumeHover] = React.useState(false);

  //update gui colour postition of sound bar
  React.useEffect(() => {
    //change colour of slider on hover
    if (volumeHover === true) {
      var color =
        "linear-gradient(90deg, rgb(224, 171, 138)" +
        volume * 100 +
        "% , rgb(180, 180, 180)" +
        volume * 100 +
        "%)";
      FullScreenVolume.current.style.background = color;
    } else {
      var color_a =
        "linear-gradient(90deg, rgb(222,222,222)" +
        volume * 100 +
        "% , rgb(180, 180, 180)" +
        volume * 100 +
        "%)";
      FullScreenVolume.current.style.background = color_a;
    }
  }, [volume, volumeHover]);

  return (
    <div className="fs-sound-button">
      <div className="fs-volume-slider-box">
        <input
          type="range"
          className="slider volume-slider small-view-slider"
          min="0"
          max="100"
          value={volume * 100}
          ref={FullScreenVolume}
          onChange={handleVolume}
          onMouseEnter={() => {
            setVolumeHover(true);
          }}
          onMouseLeave={() => {
            setVolumeHover(false);
          }}
        />
      </div>

      <div className="icon-background">
        <Icon
          className="fs-sound-icon"
          icon={soundOnIcon}
          style={{ fontSize: "33px" }}
          onClick={() => {
            soundSlider.classList.toggle("show");
          }}
        />
      </div>
    </div>
  );
};

const FullScreenSeekBar = (props) => {
  const SeekBar = React.useRef(null);
  const [SeekBarHover, setSeekBarHover] = React.useState(false);

  //update gui colour postition of seek bar
  React.useEffect(() => {
    // thank you higher self!!!!
    var adjustedPercentage = (props.currentTime / props.duration) * 100;

    //change colour of slider on hover
    if (SeekBarHover === true) {
      var color_b =
        "linear-gradient(90deg, rgb(224, 171, 138)" +
        adjustedPercentage +
        "% , rgb(255, 255, 255)" +
        adjustedPercentage +
        "%)";
      SeekBar.current.style.background = color_b;
    } else {
      var color_c =
        "linear-gradient(90deg, rgb(224, 171, 138)" +
        adjustedPercentage +
        "% , rgb(180, 180, 180)" +
        adjustedPercentage +
        "%)";
      SeekBar.current.style.background = color_c;
    }
  }, [props.currentTime, SeekBarHover, props.duration]);

  //during seek mode
  if (props.isSeeking === true) {
    return (
      <div className="seekbar-wrapper">
        <input
          type="range"
          className="slider seek-slider fs-seek-slider"
          min="0"
          max={`${props.duration}`}
          value={`${props.currentTime}`}
          ref={SeekBar}
          //value while the slider is being dragged
          onChange={(e) => {
            props.setSeekTime(e.target.value);
          }}
          //when slider is released it selects the new time stamp
          onMouseUp={() => {
            props.foundSeekTime(props.seekTime);
          }}
        />
      </div>
    );
  }
  //pressing mouse down on time slider to activate seek
  return (
    <div className="seekbar-wrapper">
      <input
        type="range"
        className="slider seek-slider fs-seek-slider"
        min="0"
        max={`${props.duration}`}
        value={`${props.currentTime}`}
        ref={SeekBar}
        onChange={(e) => {
          props.setSeekTime(e.target.value);
        }}
        onMouseUp={() => {
          props.foundSeekTime(props.seekTime);
        }}
        onMouseEnter={() => {
          setSeekBarHover(true);
        }}
        onMouseLeave={() => {
          setSeekBarHover(false);
        }}
      />
    </div>
  );
};

export default FullScreen;
