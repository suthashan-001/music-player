import React from "react";
import { Icon } from "@iconify/react";
import mobplayButtonIcon from "@iconify/icons-gg/play-button-o";
import mobpauseButtonIcon from "@iconify/icons-ant-design/pause-circle-outlined";
import Asta from "../../Songs/black clover/Yuno.jpg";

import MobileFullScreen from "./mobile-fullscreen";

const MobilePlayer = (props) => {
  const [mobFullScreenActive, setMobileFullScreenActive] =
    React.useState(false);

  if (props.isPlaying === true) {
    return (
      <MobilePlayerOn
        songQueue={props.songQueue}
        setIsPlaying={props.setIsPlaying}
        // new request is triggered when user clicks a new song while a song is already playing
        newRequest={props.newRequest}
        setNewRequest={props.setNewRequest}
        queueIndex={props.queueIndex}
        setQueueIndex={props.setQueueIndex}
        fullScreenActive={mobFullScreenActive}
        toggleFullScreen={setMobileFullScreenActive}
      ></MobilePlayerOn>
    );
  } else {
    return <MobilePlayerOff></MobilePlayerOff>;
  }
};

/* ======================
      Player On
  =======================*/

const MobilePlayerOn = ({
  songQueue,
  setIsPlaying,
  newRequest,
  setNewRequest,
  queueIndex,
  setQueueIndex,
  fullScreenActive,
  toggleFullScreen,
}) => {
  //music-player states
  const [playBackTriggered, setPlaybackTriggered] = React.useState(false);
  const [pause, setPause] = React.useState(false);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(null);
  // const [volume, setVolume] = React.useState(0.5);
  const [isSeeking, setIsSeeking] = React.useState(false);
  const [seekTime, setSeekTime] = React.useState(0);

  const mobAudioRef = React.useRef();

  // audio functions
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
  // function handleVolume(e) {
  //   setVolume(e.target.value / 100);
  // }
  // handle seek
  function foundSeekTime(time) {
    mobAudioRef.current.currentTime = time;
    setIsSeeking(false);
  }
  function nextQueueSong() {
    if (queueIndex !== songQueue.length - 1) {
      setQueueIndex(queueIndex + 1);
    } else if (queueIndex === songQueue.length - 1) {
      setQueueIndex(0);
    } else {
      setIsPlaying(false);
    }
  }
  //user manually wants next song in queue
  function nextSong() {
    if (queueIndex === songQueue.length - 1) {
      setQueueIndex(0);
    } else {
      setQueueIndex(queueIndex + 1);
    }
  }
  //user manually wants preivous song in queue
  function previousSong() {
    if (queueIndex !== 0) {
      setQueueIndex(queueIndex - 1);
    } else {
      setQueueIndex(songQueue.length - 1);
    }
  }

  //song play useEffect
  React.useEffect(() => {
    function timeUpdate(e) {
      setCurrentTime(e.target.currentTime);
      setDuration(e.target.duration);
    }

    mobAudioRef.current.src = songQueue[queueIndex].songfile;

    // add eventListener to player that will fire everytime current time of an audio is updated
    mobAudioRef.current.addEventListener("timeupdate", timeUpdate);

    // refreshs player when user requests new song to be played
    if (newRequest === true) {
      setNewRequest(false);
    }
    // play song after a delay
    setTimeout(() => {
      mobAudioRef.current.play();
    }, 2000);
  }, [queueIndex, newRequest, setNewRequest, songQueue]);

  //playback useEffect
  React.useEffect(() => {
    if (playBackTriggered) {
      if (pause) {
        mobAudioRef.current.pause();
      } else {
        mobAudioRef.current.play();
      }
      // we only want this useEffect to trigger if the user makes a playback request
      setPlaybackTriggered(false);
    }
  }, [pause, setNewRequest, songQueue, playBackTriggered]);

  // React.useEffect(() => {
  //   // volume useEffect
  //   mobAudioRef.current.volume = volume;
  // }, [volume]);

  return (
    <div className="mob-player-wrapper">
      {/* Play Button */}
      <div className="play-button-div">
        {pause ? (
          <Icon
            className="mob-play-btn"
            icon={mobplayButtonIcon}
            onClick={() => {
              setPlayback();
            }}
          />
        ) : (
          <Icon
            className="mob-play-btn"
            icon={mobpauseButtonIcon}
            onClick={() => {
              setPlayback();
            }}
          />
        )}
      </div>
      <div
        className="mob-player-background"
        onClick={() => {
          toggleFullScreen(true);
        }}
      >
        {/* audio element */}
        <audio ref={mobAudioRef} onEnded={nextQueueSong}></audio>
        <div className="mob-songImg-wrapper">
          <img
            src={songQueue[queueIndex].songImage}
            alt="Not found"
            className="mob-songImg"
          />
        </div>

        <div className="mob-song-info">
          <h1 className="mob-song-name">{songQueue[queueIndex].name}</h1>
          <h3 className="mob-song-artist">{songQueue[queueIndex].artist}</h3>
        </div>

        {/* FullScreen Component */}

        {fullScreenActive === true ? (
          <>
            <MobileFullScreen
              songImg={songQueue[queueIndex].songImage}
              songName={songQueue[queueIndex].name}
              songArtist={songQueue[queueIndex].artist}
              pause={pause}
              setPlayback={setPlayback}
              currentTime={currentTime}
              seekTime={seekTime}
              setSeekTime={setSeekTime}
              duration={duration}
              convertTime={convertTime}
              isSeeking={isSeeking}
              setIsSeeking={setIsSeeking}
              foundSeekTime={foundSeekTime}
              toggleFullScreen={toggleFullScreen}
              previousSong={previousSong}
              nextSong={nextSong}
            ></MobileFullScreen>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

const MobilePlayerOff = () => {
  return (
    <div className="mob-player-background">
      <div className="mob-songImg-wrapper">
        <img src={Asta} alt="Not found" className="mob-songImg" />
      </div>

      <div className="mob-song-info">
        <h1 className="mob-song-name">Title</h1>
        <h3 className="mob-song-artist">Artist</h3>
      </div>

      {/* Play Button */}
      <div className="play-button-div">
        <Icon className="mob-play-btn" icon={mobplayButtonIcon} />
      </div>
    </div>
  );
};

export default MobilePlayer;
