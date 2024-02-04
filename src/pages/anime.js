import React from "react";
// drag and drop api
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { Icon } from "@iconify/react";
import shuffleIcon from "@iconify/icons-bi/shuffle";
import playButtonIcon from "@iconify/icons-gg/play-button-o";

import animeOst from "../music-file/anime-ost";

const AnimePage = (props) => {
  // state management
  const [stateOST, dispatchOST] = React.useReducer(AnimeOST_reducer, {
    searchInput: "",
    songs: animeOst, // data from imported file
    playOrder: [],
  });

  // these functions are for the above cards "dub"

  // function playSongs() {
  //   /* newRequest changes the queue that is playing while isPlaying activates player from off to on */
  //   if (props.isPlaying === true) {
  //     props.setNewRequest(true);
  //     props.setSongQueue(state.songs);
  //   } else {
  //     props.setIsPlaying(true);
  //     props.setSongQueue(state.songs);
  //   }
  // }
  // function PlayClickedSong(index) {
  //   //if player is already playing a song and user clicks another song
  //   if (props.isPlaying === true) {
  //     props.setNewRequest(true);
  //     props.setSongQueue([state.songs[index]]);
  //   } else {
  //     props.setIsPlaying(true);
  //     props.setSongQueue([state.songs[index]]);
  //   }
  // }

  // OST functions
  function shuffleOST(e) {
    dispatchOST({ type: "SHUFFLE_SONGS" });
  }
  function handleOSTDrag(e) {
    const position = { start: e.source, end: e.destination };
    dispatchOST({ type: "HANDLE_DRAG", position: position });
  }
  function playOST() {
    /* newRequest changes the queue that is playing while isPlaying activates player from off to on */
    if (props.isPlaying === true) {
      props.setNewRequest(true);
      props.setSongQueue(stateOST.songs);
    } else {
      props.setIsPlaying(true);
      props.setSongQueue(stateOST.songs);
    }
  }
  function PlayClickedOST(index) {
    //if player is already playing a song and user clicks another song
    if (props.isPlaying === true) {
      props.setNewRequest(true);
      props.setSongQueue([stateOST.songs[index]]);
    } else {
      props.setIsPlaying(true);
      props.setSongQueue([stateOST.songs[index]]);
    }
  }

  return (
    <div className="page page-background anime-page">
      {/* Anime Openings */}

      {/* OST's */}
      <h1 className="pannel-title">Original Sound tracks</h1>
      <div className="page-pannel">
        <div className="page-buttons anime-page-buttons">
          <button className="play-btn btn" onClick={playOST}>
            <p className="button-text">Play</p>
            <Icon
              className="play-icon"
              icon={playButtonIcon}
              style={{ fontSize: "36px" }}
            />
          </button>
          <button className="upload-btn btn" onClick={shuffleOST}>
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
          <p className="heading-style anime-heading-anime">ANIME</p>
        </div>

        <DisplayOst
          songs={stateOST.songs}
          handleOSTDrag={handleOSTDrag}
          PlayClickedOST={PlayClickedOST}
        />
      </div>
    </div>
  );
};

function DisplayOst(props) {
  return (
    <>
      {/* Song Drag n Drop Area, onDragEnd is function call when mouseclick is released */}
      <DragDropContext onDragEnd={props.handleOSTDrag}>
        <Droppable droppableId="songsAreaOST">
          {(provided) => (
            <section ref={provided.innerRef} {...provided.droppableProps}>
              {/* map each song to a song component */}
              {props.songs.map((song, index) => {
                let { name, id, songImage, anime } = song;
                return (
                  <Ost
                    key={id}
                    name={name}
                    picture={songImage}
                    songID={id}
                    index={index}
                    anime={anime}
                    songs={props.songs}
                    PlayClickedOST={props.PlayClickedOST}
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
}

function Ost({
  name,
  index,
  songID,
  PlayClickedOST,
  addQueue,
  picture,
  anime,
}) {
  return (
    <Draggable index={index} draggableId={`ost-${songID}`}>
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
                  PlayClickedOST(index);
                }}
              >
                <Icon className="play-sub-song" icon={playButtonIcon} />
              </div>
            </div>

            <div className="col-B">
              <h3 className="opening-name">{name}</h3>
            </div>

            <div className="col-C">
              <h3 className="opening-anime">{anime}</h3>
            </div>
          </div>
        </section>
      )}
    </Draggable>
  );
}

function AnimeOST_reducer(state, action) {
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

export default AnimePage;
