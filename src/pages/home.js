import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import playButtonIcon from "@iconify/icons-gg/play-button-o";
import elevateSongs from "../music-file/elevate-home";
import animeDubSongs from "../music-file/anime-dub-home";

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
  }, [playCardSong]);

  return (
    <div className="page homePage-background">
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

      {/* Sleep Music
      <h1 className="section-title">Sleep Melodies</h1>
      <div className="section-container"></div> */}

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
      <div className="home-song-card-info">
        <p className="card-name">{song.name}</p>
        <p className="card-artist">{song.artist}</p>
      </div>
      <div className="hoverEffect">
        <div className="hover-container"></div>
        <Icon
          className="songCard_PlayIcon"
          icon={playButtonIcon}
          onClick={() => {
            setPlayCardSong(song);
          }}
        />
      </div>
    </div>
  );
};

export default Home;
