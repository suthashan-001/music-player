import React from "react";
import animeDubSongs from "../music-file/anime-dub-home";
import animeSubSongs from "../music-file/anime-sub";
import { Icon, InlineIcon } from "@iconify/react";
import playButtonIcon from "@iconify/icons-gg/play-button-o";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const AnimePage = ({
  isPlaying,
  setIsPlaying,
  setNewRequest,
  setSongQueue,
}) => {

  const [state, dispatch] = React.useReducer(AnimePage_reducer, {
    searchInput: "",
    songs: animeSubSongs,
    playOrder: [],
  });
  const [playAnimeSong, setPlayAnimeSong] = React.useState([]);

  // useEffect to rerender when user clicks a songCard
  React.useEffect(() => {
    if (playAnimeSong.length !== 0) {
      if (isPlaying === true) {
        setNewRequest(true);
        setSongQueue([playAnimeSong]);
        setPlayAnimeSong([]);
      } else {
        setSongQueue([playAnimeSong]);
        setIsPlaying(true);
        setPlayAnimeSong([]);
      }
    }
  }, [playAnimeSong]);

  return (
    <div className="page page-background">
      <h1 className="pannel-title dub-title">English Cover's</h1>
      <div className="page-pannel dub-pannel">
        <div className="dub-container">
          {animeDubSongs.map((song) => {
            return (
              <DisplayAnimeDubCard
                key={song.id}
                song={song}
                setPlayAnimeSong={setPlayAnimeSong}
              />
            );
          })}
        </div>
      </div>

      <h1 className="pannel-title English-Cover">Openings You Can't Skip</h1>
      {/* <div className="anime-sub-songs-container">
        {animeSubSongs.map((song) => {
          return (
            <DisplayAnimeSubCard
              key={song.id}
              song={song}
              setPlayAnimeSong={setPlayAnimeSong}
            />
          );
        })}
      // </div>  */}
    </div>
  );

const DisplayAnimeDubCard = ({ song, setPlayAnimeSong }) => {
  return (
    <div className="Dub-card">
      <img
        src={song.songImage}
        alt="Not Found"
        className="card-image anime-dub-img"
      />
      <p className="card-name song-dub-title">{song.name}</p>
      <div
        className="play-hoverEffect-dub"
        onClick={() => {
          setPlayAnimeSong(song);
        }}
      >
        <Icon className="play-dub-song" icon={playButtonIcon} />
      </div>
    </div>
  );
};

const DisplayAnimeSubCard = ({ song }) => {
  return (
    <div className="sub-card">
      <img src={song.songImage} alt="Not Found" className="card-image" />
      <p className="card-name anime-dub-title">{song.name}</p>
    </div>
  );
};

export default AnimePage;
