import React from "react";
import ElevateSongs from "../music-file/elevate-music";
import multiDimensional from "../music-file/multi-dimensional";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Icon } from "@iconify/react";
import shuffleIcon from "@iconify/icons-bi/shuffle";
import playButtonIcon from "@iconify/icons-gg/play-button-o";

const ElevatePage = (props) => {
  // state management
  const [state, dispatch] = React.useReducer(ElevatePage_reducer, {
    searchInput: "",
    songs: ElevateSongs,
    playOrder: [],
  });

  function shuffleSongs(e) {
    dispatch({ type: "SHUFFLE_SONGS" });
  }

  function handleSongDrag(e) {
    const position = { start: e.source, end: e.destination };
    dispatch({ type: "HANDLE_DRAG", position: position });
  }
  function playSongs() {
    /* newRequest changes the queue that is playing while isPlaying activates player from off to on */
    if (props.isPlaying === true) {
      props.setNewRequest(true);
      props.setSongQueue(state.songs);
    } else {
      props.setIsPlaying(true);
      props.setSongQueue(state.songs);
    }
  }
  function PlayClickedSong(index) {
    //if player is already playing a song and user clicks another song
    if (props.isPlaying === true) {
      props.setNewRequest(true);
      props.setSongQueue([state.songs[index]]);
    } else {
      props.setIsPlaying(true);
      props.setSongQueue([state.songs[index]]);
    }
  }

  function playDimensionalSong(song) {
    if (props.isPlaying === true) {
      props.setNewRequest(true);
      props.setSongQueue([song]);
    } else {
      props.setSongQueue([song]);
      props.setIsPlaying(true);
    }
  }

  return (
    <div className="page page-background">
      <br />
      <br />
      {/* Under-ratted Covers */}
      <h1 className="pannel-title dub-title">Under Rated</h1>
      <div className="page-pannel dub-pannel">
        <div className="dub-container">
          {multiDimensional.map((song) => {
            return (
              <MultiDimensional
                key={song.id}
                song={song}
                playDimensionalSong={playDimensionalSong}
              />
            );
          })}
        </div>
      </div>
      <h1 className="pannel-title dub-title">Elevate</h1>
      {/* Anime Openings */}
      <div className="page-pannel">
        <div className="page-buttons anime-page-buttons">
          <button className="play-btn btn" onClick={playSongs}>
            <p className="button-text">Play</p>
            <Icon
              className="play-icon"
              icon={playButtonIcon}
              style={{ fontSize: "36px" }}
            />
          </button>
          <button className="upload-btn btn" onClick={shuffleSongs}>
            <p className="button-text">Shuffle</p>
            <Icon
              className="upload-icon"
              icon={shuffleIcon}
              style={{ color: "#fff9f9", fontSize: "36px" }}
            />
          </button>
        </div>

        <div className="sub-heading">
          <p className="heading-style anime-heading-title">TITLE</p>
          <p className="heading-style anime-heading-anime">ARTIST</p>
        </div>

        {/* Draggable Openings */}
        <DisplayElevateSongs
          songs={state.songs}
          handleSongDrag={handleSongDrag}
          PlayClickedSong={PlayClickedSong}
        />
      </div>
    </div>
  );
};

const DisplayElevateSongs = (props) => {
  return (
    <>
      {/* Song Area */}
      <DragDropContext onDragEnd={props.handleSongDrag}>
        <Droppable droppableId="songsArea">
          {(provided) => (
            <section ref={provided.innerRef} {...provided.droppableProps}>
              {/* map each song to a song component */}
              {props.songs.map((song, index) => {
                let { name, id, songImage, artist } = song;
                return (
                  <ArtistSong
                    key={id}
                    name={name}
                    picture={songImage}
                    songID={id}
                    index={index}
                    artist={artist}
                    songs={props.songs}
                    PlayClickedSong={props.PlayClickedSong}
                  />
                );
              })}
              {provided.placeholder}
            </section>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

function ArtistSong({ name, index, songID, PlayClickedSong, picture, artist }) {
  return (
    <Draggable index={index} draggableId={`song-${songID}`}>
      {(provided) => (
        <section
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="sub-card">
            <div className="col-A">
              <img src={picture} alt="" className="opening-img" />
              <div
                className="play-hoverEffect-sub"
                onClick={() => {
                  PlayClickedSong(index);
                }}
              >
                <Icon className="play-sub-song" icon={playButtonIcon} />
              </div>
            </div>

            <div className="col-B">
              <h3 className="opening-name">{name}</h3>
            </div>

            <div className="col-C">
              <h3 className="opening-anime">{artist}</h3>
            </div>
          </div>
        </section>
      )}
    </Draggable>
  );
}

function MultiDimensional({ song, playDimensionalSong }) {
  return (
    // English Covers
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
          playDimensionalSong(song);
        }}
      >
        <Icon className="play-dub-song" icon={playButtonIcon} />
      </div>
    </div>
  );
}

function ElevatePage_reducer(state, action) {
  switch (action.type) {
    case "SHUFFLE_SONGS": {
      for (var i = state.songs.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = state.songs[i];
        state.songs[i] = state.songs[j];
        state.songs[j] = temp;
      }

      return {
        ...state,
      };
    }

    case "HANDLE_DRAG": {
      let { start, end } = action.position;
      let { songs } = state;

      //dragging a song has two distinct motions either being dragged 'down' or 'up'
      if (end !== null) {
        let tempArray = [];
        //moving song down
        if (end.index > start.index) {
          // copy from end of array to end index
          for (let i = songs.length - 1; i > end.index; i--) {
            tempArray.push(songs[i]);
          }

          //copy dragged song
          tempArray.push(songs[start.index]);

          //copy rest of array from the end index, skip the start index
          for (let i = end.index; i >= 0; i--) {
            if (i !== start.index) {
              tempArray.push(songs[i]);
            }
          }

          //reverse array
          let array = tempArray.reverse();

          return {
            ...state,
            songs: array,
          };
        }

        //moving song up
        if (end.index < start.index) {
          //copy from start of array to end index
          for (let i = 0; i < end.index; i++) {
            tempArray.push(songs[i]);
          }

          //copy dragged song
          tempArray.push(songs[start.index]);

          //copy rest of array from end index to the end of array, skip the start index
          for (let i = end.index; i < songs.length; i++) {
            if (i !== start.index) {
              tempArray.push(songs[i]);
            }
          }

          return {
            ...state,
            songs: tempArray,
            playOrder: tempArray,
          };
        }
      }
      return { ...state };
    }

    default: {
      // helps us avoid typos!
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export default ElevatePage;
