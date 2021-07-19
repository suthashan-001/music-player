import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import playButtonIcon from "@iconify/icons-gg/play-button-o";

const Queue = ({ songQueue, queueIndex, setQueueIndex }) => {
  return (
    <div className="page page-background">
      <div className="queue-container">
        <div className="pannel-header">
          <h1 className="page-title">Queue</h1>

          <div className="displaySongsContainer">
            <h3 className="now-playing">Now Playing</h3>
            <DisplayQueueSongs song={songQueue[queueIndex]} />
            <h3 className="up-next">Up Next</h3>
            <div className="up-next-songs">
              {songQueue.map((song, index) => {
                if (index > queueIndex) {
                  return (
                    <DisplayNextQueueSongs
                      song={song}
                      index={index}
                      setQueueIndex={setQueueIndex}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DisplayQueueSongs = ({ song, index }) => {
  return (
    <div className="queue-song-container">
      <div className="queue-image-container">
        <img src={song.songImage} alt="" className="queue-song-image" />
        <Icon className="queue-play-icon" icon={playButtonIcon} />
      </div>
      <p className="queue-song-name">{song.name}</p>
      <p className="queue-song-artist">{song.artist}</p>
    </div>
  );
};

const DisplayNextQueueSongs = ({ song, index, setQueueIndex }) => {
  return (
    <div className="queue-song-container">
      <div className="queue-image-container">
        <img src={song.songImage} alt="" className="queue-song-image" />
        <Icon
          className="queue-play-icon"
          icon={playButtonIcon}
          onClick={() => {
            setQueueIndex(index);
          }}
        />
      </div>
      <p className="queue-song-name">{song.name}</p>
      <p className="queue-song-artist">{song.artist}</p>
    </div>
  );
};

export default Queue;
