import React from "react";
import { Icon } from "@iconify/react";
import { useEffect } from "react";
import playButtonIcon from "@iconify/icons-gg/play-button-o";
import shuffleIcon from "@iconify/icons-bi/shuffle";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import animeSongs from "../../music-file/anime-sub";

const MobAnimePage = (props) => {
  // since we are accessing the dom to store the songs it is a sideeffect because Dom is seperate from react
  // window.localStorage.setItem('mobile-anime-songs', JSON.stringify(animeSongs))

  // retrieve data from local storage
  let localStorageData = localStorage.getItem("mobile-anime-songs");
  let convertedLocalData = JSON.parse(localStorageData);

  // local storage data was null the first time, but then stored the songs array
  // new users will have null the first time
  let animeSongData;

  // old users will have their custom playlist saved
  if (convertedLocalData === null) {
    animeSongData = animeSongs;
  } else {
    animeSongData = convertedLocalData;
  }

  const [state, dispatch] = React.useReducer(mobileAnime_Reducer, {
    songs: animeSongData,
    playlistOrder: [],
  });

  useEffect(() => {
    // create a localstorage object in browser Dom
    // this is a side effect because react doesn't keep track of local storage, the browser does
    localStorage.setItem("mobile-anime-songs", JSON.stringify(state.songs));
  }, [state.songs]);

  function shuffleSongs() {
    dispatch({ type: "SHUFFLE_SONGS" });
  }
  function handleMobileSongDrag(e) {
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

  return (
    <div className="mob-animepg-bg">
      <h1 className="mob-anime-head">Anime Songs</h1>
      <div className="mob-page-pannel">
        {/* page head */}
        <div className="mob-pannel-header">
          <div className="anime-page-btns">
            <button className="play-btn btn mob-play-btn" onClick={playSongs}>
              <p className="button-text">play</p>
              <Icon
                className="play-icon mob-anime-icon"
                icon={playButtonIcon}
              />
            </button>
            <button className="upload-btn btn" onClick={shuffleSongs}>
              <p className="button-text">Shuffle</p>
              <Icon className="upload-icon mob-anime-icon" icon={shuffleIcon} />
            </button>
          </div>
        </div>

        {/* page songs */}
        <DragDropContext onDragEnd={handleMobileSongDrag}>
          <Droppable droppableId="mobSongsArea">
            {(provided) => (
              <section ref={provided.innerRef} {...provided.droppableProps}>
                {/* map each song to a song component */}
                {state.songs.map((song, index) => {
                  let { name, id, songImage, anime } = song;
                  return (
                    <Opening
                      key={id}
                      name={name}
                      picture={songImage}
                      songID={id}
                      index={index}
                      anime={anime}
                      PlayClickedSong={PlayClickedSong}
                    />
                  );
                })}
                {provided.placeholder}
              </section>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

const Opening = ({ name, index, songID, PlayClickedSong, picture, anime }) => {
  return (
    <Draggable index={index} draggableId={`song-${songID}`}>
      {(provided) => (
        <section
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div
            className="sub-card"
            onClick={() => {
              PlayClickedSong(index);
            }}
          >
            <div className="col-A">
              <img src={picture} alt="" className="opening-img" />
              <div className="play-hoverEffect-sub">
                <Icon className="play-sub-song" icon={playButtonIcon} />
              </div>
            </div>

            <div className="col-B">
              <h3 className="opening-name">{name}</h3>
            </div>
          </div>
        </section>
      )}
    </Draggable>
  );
};

function mobileAnime_Reducer(state, action) {
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

export default MobAnimePage;
