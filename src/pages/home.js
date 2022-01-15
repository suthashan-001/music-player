import React from "react";
import { Icon } from "@iconify/react";
import playButtonIcon from "@iconify/icons-gg/play-button-o";
import elevateSongs from "../music-file/elevate-home";
import animeDubSongs from "../music-file/anime-dub-home";
import recentSongs from "../music-file/recent-home";

const Home = ({ isPlaying, setIsPlaying, setNewRequest, setSongQueue }) => {
  const [playCardSong, setPlayCardSong] = React.useState([]);

  // useEffect to rerender when user clicks a songCard
  React.useEffect(() => {
    if (playCardSong.length !== 0) {
      if (isPlaying === true) {
        setNewRequest(true);
        setSongQueue([playCardSong]);
        setPlayCardSong([]);
      } else {
        setSongQueue([playCardSong]);
        setIsPlaying(true);
        setPlayCardSong([]);
      }
    }
  }, [playCardSong, isPlaying, setIsPlaying, setNewRequest, setSongQueue]);

  return (
    <div className="page homePage-background">
      {/* Recent cover */}
      <h1 className="section-title">My Favorites</h1>
      <div className="section-container">
        {recentSongs.map((song) => {
          return (
            <DisplayHomeSongCards
              key={song.id}
              song={song}
              setPlayCardSong={setPlayCardSong}
            />
          );
        })}
      </div>

      {/* Elevate Songs */}
      <h1 className="section-title">Elevate</h1>
      <div className="section-container">
        {elevateSongs.map((song) => {
          return (
            <DisplayHomeSongCards
              key={song.id}
              song={song}
              setPlayCardSong={setPlayCardSong}
            />
          );
        })}
      </div>

      {/* Anime English cover */}
      <h1 className="section-title">English Cover's</h1>
      <div className="section-container">
        {animeDubSongs.map((song) => {
          return (
            <DisplayHomeSongCards
              key={song.id}
              song={song}
              setPlayCardSong={setPlayCardSong}
            />
          );
        })}
      </div>
    </div>
  );
};

const DisplayHomeSongCards = ({ song, setPlayCardSong }) => {
  return (
    <div className="card-container">
      <img src={song.songImage} alt="Not Found" className="card-image" />
      <div className="songCard-info">
        <p className="card-name">{song.name}</p>
        <p className="card-artist">{song.artist}</p>
      </div>

      {/* black tint that shows play icon */}
      <div className="hoverEffect">
        <div
          className="hover-container"
          onClick={() => {
            setPlayCardSong(song);
          }}
        >
          <Icon className="songCard_PlayIcon" icon={playButtonIcon} />
        </div>
      </div>
    </div>
  );
};

export default Home;
