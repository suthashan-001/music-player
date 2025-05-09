import React from "react";

// import icons
import { Icon } from "@iconify/react";
import skipBackIcon from "@iconify/icons-ph/skip-back";
import playButtonIcon from "@iconify/icons-gg/play-button-o";
import skipForwardIcon from "@iconify/icons-ph/skip-forward";
import repeatLineIcon from "@iconify/icons-clarity/repeat-line";
import soundOnIcon from "@iconify/icons-akar-icons/sound-on";
import songQueueIcon from "@iconify/icons-carbon/query-queue";
import arrowsFullscreenIcon from "@iconify/icons-bi/arrows-fullscreen";
import pauseButtonIcon from "@iconify/icons-ant-design/pause-circle-outlined";
import image from "../background-images/decor.png";
import FullScreen from "./FullScreen";

/* ======================
      Player On
  =======================*/

const PlayerOn = ({
  // states are used for data that changes over time and causes a 'rerender' when it does change
  songQueue,
  setIsPlaying,
  newRequest,
  setNewRequest,
  displayQueue,
  setDisplayQueue,
  queueIndex,
  setQueueIndex,
  shuffle,
  setShuffle,
}) => {
  //music player states
  const [playBackTriggered, setPlaybackTriggered] = React.useState(false);
  const [pause, setPause] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(null);
  const [volume, setVolume] = React.useState(0.5);
  const [isSeeking, setIsSeeking] = React.useState(false);
  const [seekTime, setSeekTime] = React.useState(0);
  const [repeatQueue, setRepeatQueue] = React.useState(false);
  const [repeatSong, setRepeatSong] = React.useState(false);

  /* 
        We want a ref for the audio because audio element is part of the DOM, media playbacks 
        (such as timestamps "where the song is paused") are kept seperatly from React,
        and we don't want to rerender everytime user hits pause and play.  -> read more on lessons.md
  */

  const audioRef = React.useRef();

  /* ======
  Audio Functions
  =========*/

  // user invokes a playback request [to play the song at the current time stamp]
  function setPlayback() {
    setPlaybackTriggered(true);
    setPause(!pause);
  }

  // helper function to convert time from seconds to minutes
  function convertTime(time) {
    if (!isNaN(time)) {
      return (
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
      );
    } else {
      return "--:--";
    }
  }

  function handleVolume(e) {
    setVolume(e.target.value / 100);
  }

  function foundSeekTime(time) {
    audioRef.current.currentTime = time;
    setIsSeeking(false);
  }

  // in a playlist, the player will automatically go to next song when the current song is finished playing
  function nextQueueSong() {
    if (queueIndex !== songQueue.length - 1) {
      setQueueIndex(queueIndex + 1);
    } else if (queueIndex === songQueue.length - 1 && repeatQueue === true) {
      //loops back to the start position in queue if user wants to repeat through the queue
      setQueueIndex(0);
    } else {
      setIsPlaying(false);
    }
  }

  //user manually wants to skip to next song
  function nextSong() {
    if (queueIndex === songQueue.length - 1) {
      setQueueIndex(0);
    } else {
      setQueueIndex(queueIndex + 1);
    }
  }

  //user manually wants to go to the previous song in queue
  function previousSong() {
    if (queueIndex !== 0) {
      setQueueIndex(queueIndex - 1);
    } else {
      setQueueIndex(songQueue.length - 1);
    }
  }

  /* =============
  Manipulating Dom Audio element
  ================*/

  React.useEffect(() => {
    audioRef.current.src = songQueue[queueIndex].songfile;

    //eventlistener updates the time
    audioRef.current.addEventListener("timeupdate", (e) => {
      setCurrentTime(e.target.currentTime);
      setDuration(e.target.duration);
    });

    // refreshs player when user requests new song to be played
    if (newRequest === true) {
      setNewRequest(false);
    }

    // there is a start delay to playing a song.
    setTimeout(() => {
      audioRef.current.play();
    }, 2000);

    /* goal is to clean up this useEffect to prevent memory leaks {Work in Progress} 

    // return function cleanUp() {
    //   console.log(copy_node);
    //   // unmount eventlisteners and async functions to avoid memory leaks
    //   // memory leaks happen when component was unmounted before a response was received [dive further in this]
    //   /* every time I click a new song I was adding a new event listener so stacking event listeners */
    //   copy_node.current.removeEventListener("timeupdate", (e) => {
    //     setCurrentTime(0);
    //     setDuration(null);
    //   });
    //   clearTimeout(playSongDelay);
    // };
  }, [queueIndex, newRequest, setNewRequest, songQueue]);

  // loop a song
  React.useEffect(() => {
    if (repeatSong === true) {
      audioRef.current.loop = true;
    } else {
      audioRef.current.loop = false;
    }
  }, [repeatSong, playBackTriggered]);

  // change volume
  React.useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  //playback useEffect
  React.useEffect(() => {
    if (playBackTriggered) {
      if (pause) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      //only want this useEffect to trigger if the user makes a playback request
      setPlaybackTriggered(false);
    }
  }, [pause, setNewRequest, songQueue, playBackTriggered]);

  return (
    <div className="playbar">
      <audio ref={audioRef} onEnded={nextQueueSong}></audio>
      <div className="playbar-wrapper">
        <SongDetails
          songname={songQueue[queueIndex].name}
          songImage={songQueue[queueIndex].songImage}
          songArtist={songQueue[queueIndex].artist}
        />
        <MediaControls
          setPlayback={setPlayback}
          previousSong={previousSong}
          nextSong={nextSong}
          pause={pause}
          currentTime={currentTime}
          seekTime={seekTime}
          setSeekTime={setSeekTime}
          duration={duration}
          convertTime={convertTime}
          isSeeking={isSeeking}
          setIsSeeking={setIsSeeking}
          foundSeekTime={foundSeekTime}
          repeatQueue={repeatQueue}
          repeatSong={repeatSong}
          setRepeatQueue={setRepeatQueue}
          setRepeatSong={setRepeatSong}
          displayQueue={displayQueue}
          setDisplayQueue={setDisplayQueue}
        />
        <OtherControls
          handleVolume={handleVolume}
          volume={volume}
          songQueue={songQueue}
        />
      </div>
      {/* Fullscreen is going to be hidden, and displayed when user clicks fullscreen button */}
      {/* Needs to be rendered with player to be in sync */}
      <FullScreen
        songname={songQueue[queueIndex].name}
        songartist={songQueue[queueIndex].artist}
        songImage={songQueue[queueIndex].songImage}
        setPlayback={setPlayback}
        previousSong={previousSong}
        nextSong={nextSong}
        pause={pause}
        currentTime={currentTime}
        seekTime={seekTime}
        setSeekTime={setSeekTime}
        duration={duration}
        convertTime={convertTime}
        isSeeking={isSeeking}
        setIsSeeking={setIsSeeking}
        foundSeekTime={foundSeekTime}
        handleVolume={handleVolume}
        volume={volume}
        repeatQueue={repeatQueue}
        repeatSong={repeatSong}
        setRepeatQueue={setRepeatQueue}
        setRepeatSong={setRepeatSong}
        shuffle={shuffle}
        setShuffle={setShuffle}
        displayQueue={displayQueue}
        setDisplayQueue={setDisplayQueue}
      ></FullScreen>
    </div>
  );
};

const MediaControls = (props) => {
  var repeatIcon = document.querySelector(".repeat-icon");
  var repeatCircle = document.querySelector(".repeat-circle");
  var repeatInfinite = document.querySelector(".repeat-infinite");

  // full screen repeat icon
  var fs_repeatIcon = document.querySelector(".fs-repeat-icon");
  var fs_repeatCircle = document.querySelector(".fs-repeat-circle");
  var fs_repeatInfinite = document.querySelector(".fs-repeat-infinite");

  return (
    <div className="media-controls-wrapper">
      <img className="playbar-decor" src={image} alt="not found" />
      <SeekBar
        currentTime={props.currentTime}
        seekTime={props.seekTime}
        setSeekTime={props.setSeekTime}
        duration={props.duration}
        convertTime={props.convertTime}
        isSeeking={props.isSeeking}
        setIsSeeking={props.setIsSeeking}
        foundSeekTime={props.foundSeekTime}
      />

      <p className="time-before time">{props.convertTime(props.currentTime)}</p>
      <Icon
        className="other-controls-icon queueIcon"
        icon={songQueueIcon}
        style={{ fontSize: "33px" }}
        onClick={() => {
          props.setDisplayQueue(!props.displayQueue);
        }}
      />
      <Icon
        className="inner-icons playbar-icon"
        icon={skipBackIcon}
        style={{ fontSize: "44px" }}
        onClick={props.previousSong}
      />
      {props.pause ? (
        <Icon
          className="mainPlay-icon playbar-icon"
          icon={playButtonIcon}
          style={{ fontSize: "55px" }}
          onClick={props.setPlayback}
        />
      ) : (
        <Icon
          className="mainPlay-icon playbar-icon"
          icon={pauseButtonIcon}
          style={{ fontSize: "55px" }}
          onClick={props.setPlayback}
        />
      )}
      <Icon
        className="inner-icons playbar-icon"
        icon={skipForwardIcon}
        style={{ fontSize: "44px" }}
        onClick={props.nextSong}
      />
      <div
        className="repeat-button"
        onClick={() => {
          // first time clicking so repeat Song queue
          if (props.repeatQueue === false && repeatIcon !== null) {
            props.setRepeatQueue(true);
            repeatIcon.classList.add("show-repeat");
            repeatCircle.classList.add("show");
            fs_repeatIcon.classList.add("show-repeat");
            fs_repeatCircle.classList.add("show");
          } else if (props.repeatQueue === true && props.repeatSong === false) {
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
          className="outter-icons playbar-icon repeat-icon"
          icon={repeatLineIcon}
          style={{ fontSize: "33px" }}
        />
        <div className="repeat-circle"></div>
        <div className="repeat-infinite">∞</div>
      </div>
      <p className="time-after time">{props.convertTime(props.duration)}</p>
    </div>
  );
};

const SeekBar = ({
  currentTime,
  duration,
  isSeeking,
  setSeekTime,
  foundSeekTime,
  seekTime,
}) => {
  const SeekSlider = React.useRef(null);
  const [sliderHover, setSliderHover] = React.useState(false);

  //update gui colour postition of seek bar
  React.useEffect(() => {
    // percent of seekbar in relation to the currentTime of the song
    var adjustedPercentage = (currentTime / duration) * 100;

    //change colour of slider on hover
    if (sliderHover === true) {
      var color_e =
        "linear-gradient(90deg, rgb(224, 171, 138)" +
        adjustedPercentage +
        "% , rgb(255, 255, 255)" +
        adjustedPercentage +
        "%)";
      SeekSlider.current.style.background = color_e;
    } else {
      var color_f =
        "linear-gradient(90deg, rgb(224, 171, 138)" +
        adjustedPercentage +
        "% , rgb(180, 180, 180)" +
        adjustedPercentage +
        "%)";
      SeekSlider.current.style.background = color_f;
    }
  }, [currentTime, sliderHover, duration]);

  //during seek mode (When user wants to move to a new time stamp in song)
  if (isSeeking === true) {
    return (
      <div className="seekbar-wrapper">
        <input
          type="range"
          className="slider seek-slider"
          min="0"
          max={`${duration}`}
          value={`${currentTime}`}
          ref={SeekSlider}
          //value while the slider is being dragged
          onChange={(e) => {
            setSeekTime(e.target.value);
          }}
          //when slider is released it selects the new time stamp
          onMouseUp={() => {
            foundSeekTime(seekTime);
          }}
        />
      </div>
    );
  }
  //pressing mouse down on time slider to activate seek (User Wants to interact with the slider)
  return (
    <div className="seekbar-wrapper">
      <input
        type="range"
        className="slider seek-slider"
        min="0"
        max={`${duration}`}
        value={`${currentTime}`}
        ref={SeekSlider}
        onChange={(e) => {
          setSeekTime(e.target.value);
        }}
        onMouseUp={() => {
          foundSeekTime(seekTime);
        }}
        onMouseEnter={() => {
          setSliderHover(true);
        }}
        onMouseLeave={() => {
          setSliderHover(false);
        }}
      />
    </div>
  );
};

const SongDetails = (props) => {
  return (
    <div className="song-details-wrapper">
      <img src={props.songImage} alt="Not found" className="song-image" />
      <div className="song-info">
        <div className="song-title-artist">
          <p className="song-title">{props.songname}</p>
          <p className="song-artist">{props.songArtist}</p>
        </div>
      </div>
    </div>
  );
};

const OtherControls = ({ volume, handleVolume }) => {
  var fullscreenPannel = document.querySelector(".fs-background");

  const volumeSlider = React.useRef(null);
  const [sliderHover, setSliderHover] = React.useState(false);

  //update gui colour postition of sound bar
  React.useEffect(() => {
    //change colour of slider on hover
    if (sliderHover === true) {
      var color_g =
        "linear-gradient(90deg, rgb(224, 171, 138)" +
        volume * 100 +
        "% , rgb(180, 180, 180)" +
        volume * 100 +
        "%)";
      volumeSlider.current.style.background = color_g;
    } else {
      var color_h =
        "linear-gradient(90deg, rgb(255,255,255)" +
        volume * 100 +
        "% , rgb(180, 180, 180)" +
        volume * 100 +
        "%)";
      volumeSlider.current.style.background = color_h;
    }
  }, [volume, sliderHover]);

  return (
    <div className="other-controls-wrapper">
      <div className="volume-control">
        <Icon
          className="other-controls-icon"
          icon={soundOnIcon}
          style={{ fontSize: "33px" }}
        />
        <input
          type="range"
          className="slider volume-slider"
          min="0"
          max="100"
          value={volume * 100}
          ref={volumeSlider}
          onChange={handleVolume}
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
        className="other-controls-icon fullscreen-icon"
        style={{ fontSize: "22px" }}
        onClick={() => {
          if (fullscreenPannel !== null) {
            fullscreenPannel.classList.add("show");
          }
        }}
      />
    </div>
  );
};

/* ======================
      Player Off - when no song is currently playing (aesethic design)
  =======================*/

const PlayerOff = () => {
  return (
    <div className="playbar">
      <div className="playbar-wrapper">
        <SongDetailsOFF />
        <MediaControlsOFF />
        <OtherControlsOFF />
      </div>
    </div>
  );
};

const SeekBarOFF = () => {
  return (
    <div className="seekbar-wrapper">
      <input
        type="range"
        className="slider seek-slider"
        min="0"
        max="100"
        value="0"
      />
    </div>
  );
};

const SongDetailsOFF = () => {
  return (
    <div className="song-details-wrapper">
      <div className="song-image"></div>
      <div className="song-info">
        <div className="style-divider"></div>
        <div className="song-title-artist">
          <p>Frequencies that resonate with your soul!</p>
        </div>
      </div>
    </div>
  );
};

// naming conflict Playbar and Playbar off had the same name component therefore it created bug
const MediaControlsOFF = () => {
  return (
    <div className="media-controls-wrapper">
      <img className="playbar-decor" src={image} alt="not found" />
      <SeekBarOFF />
      <p className="time-before time">--:--</p>
      <Icon
        className="other-controls-icon"
        icon={songQueueIcon}
        style={{ fontSize: "33px" }}
      />
      <Icon
        className="inner-icons playbar-icon"
        icon={skipBackIcon}
        style={{ fontSize: "44px" }}
      />
      <Icon
        className="mainPlay-icon playbar-icon"
        icon={playButtonIcon}
        style={{ fontSize: "55px" }}
      />
      <Icon
        className="inner-icons playbar-icon"
        icon={skipForwardIcon}
        style={{ fontSize: "44px" }}
      />
      <Icon
        className="outter-icons playbar-icon"
        icon={repeatLineIcon}
        style={{ fontSize: "33px" }}
      />
      <p className="time-after time">-:--</p>
    </div>
  );
};

const OtherControlsOFF = () => {
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
      var color_i =
        "linear-gradient(90deg, rgb(255,255,255)" +
        soundValue +
        "% , rgb(180, 180, 180)" +
        soundValue +
        "%)";
      volumeSlider.current.style.background = color_i;
    }
  }, [soundValue, sliderHover]);

  return (
    <div className="other-controls-wrapper">
      <div className="volume-control">
        <Icon
          className="other-controls-icon"
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
        className="other-controls-icon fullscreen-icon"
        style={{ fontSize: "22px" }}
      />
    </div>
  );
};

const Player = (props) => {
  if (props.isPlaying === true) {
    return (
      <PlayerOn
        songQueue={props.songQueue}
        setIsPlaying={props.setIsPlaying}
        newRequest={props.newRequest}
        setNewRequest={props.setNewRequest}
        displayQueue={props.displayQueue}
        setDisplayQueue={props.setDisplayQueue}
        queueIndex={props.queueIndex}
        setQueueIndex={props.setQueueIndex}
      ></PlayerOn>
    );
  } else {
    return (
      <PlayerOff
        shuffle={props.shuffleOn}
        setShuffle={props.setShuffleOn}
      ></PlayerOff>
    );
  }
};

export default Player;
