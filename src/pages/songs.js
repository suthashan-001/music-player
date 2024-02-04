// import React from "react";
// import { Icon } from "@iconify/react";
// import shuffleIcon from "@iconify/icons-bi/shuffle";
// import searchIcon from "@iconify/icons-clarity/search-line";
// import playButtonIcon from "@iconify/icons-gg/play-button-o";

// import data from "../mySongs";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

// const SongPage = (props) => {
//   // reducer to manage state
//   const [state, dispatch] = React.useReducer(songPanelreducer, {
//     searchInput: "",
//     songs: data,
//     // selectedSong: null,
//     playOrder: [],
//   });

//   function shuffleSongs(e) {
//     dispatch({ type: "SHUFFLE_SONGS" });
//   }

//   function handleSearchInput(e) {
//     dispatch({ type: "USER_INPUT", input: e.target.value });
//   }

//   function handleSongDrag(e) {
//     const position = { start: e.source, end: e.destination };
//     dispatch({ type: "HANDLE_DRAG", position: position });
//   }

//   function playSongs() {
//     /* newRequest changes the queue that is playing while isPlaying activates player from off to on */
//     if (props.isPlaying === true) {
//       props.setNewRequest(true);
//       props.setSongQueue(state.songs);
//     } else {
//       props.setIsPlaying(true);
//       props.setSongQueue(state.songs);
//     }
//   }

//   function PlayClickedSong(index) {
//     //if player is already playing a song and user clicks another song
//     if (props.isPlaying === true) {
//       props.setNewRequest(true);
//       props.setSongQueue([state.songs[index]]);
//     } else {
//       props.setIsPlaying(true);
//       props.setSongQueue([state.songs[index]]);
//     }
//   }

//   return (
//     <div className="page page-background">
//       <div className="page-pannel">
//         <div className="pannel-header">
//           <h1 className="page-title">My Songs</h1>
//           <div className="page-buttons">
//             <button className="play-btn btn">
//               <p className="button-text">play</p>
//               <Icon
//                 className="play-icon"
//                 icon={playButtonIcon}
//                 style={{ fontSize: "36px" }}
//                 onClick={playSongs}
//               />
//             </button>
//             <button className="upload-btn btn">
//               <p className="button-text">Shuffle</p>
//               <Icon
//                 className="upload-icon"
//                 icon={shuffleIcon}
//                 style={{ color: "#fff9f9", fontSize: "36px" }}
//                 onClick={shuffleSongs}
//               />
//             </button>
//           </div>
//           <FilterSearch
//             formInput={state.searchinput}
//             handleSearchInput={handleSearchInput}
//           />
//         </div>

//         <DisplaySongs
//           //pass in states from reducer
//           songs={state.songs}
//           handleSongDrag={handleSongDrag}
//           PlayClickedSong={PlayClickedSong}
//         />
//       </div>
//     </div>
//   );
// };

// const FilterSearch = ({ formInput, handleSearchInput }) => {
//   return (
//     <form className="filterSongs">
//       <Icon
//         className="search-Icon"
//         icon={searchIcon}
//         style={{ fontSize: "22px" }}
//       />
//       <input
//         type="text"
//         name="song-search"
//         id="filterSearch"
//         value={formInput}
//         onChange={handleSearchInput}
//         placeholder="filter"
//       />
//     </form>
//   );
// };

// const DisplaySongs = (props) => {
//   return (
//     <>
//       <div className="displaySong-head">
//         <div className="displaySong-container">
//           <p className="heading-style col-1">Title</p>
//           <p className="heading-style col-2">Artists</p>
//           <p className="heading-style col-3 ">Hz</p>
//         </div>
//       </div>

//       {/* Song Area */}
//       <DragDropContext onDragEnd={props.handleSongDrag}>
//         <Droppable droppableId="songsArea">
//           {(provided) => (
//             <section ref={provided.innerRef} {...provided.droppableProps}>
//               {/* map each song to a song component */}
//               {props.songs.map((song, index) => {
//                 let { name, id } = song;
//                 return (
//                   <Song
//                     key={id}
//                     name={name}
//                     songID={id}
//                     index={index}
//                     songs={props.songs}
//                     PlayClickedSong={props.PlayClickedSong}
//                   />
//                 );
//               })}
//               {provided.placeholder}
//             </section>
//           )}
//         </Droppable>
//       </DragDropContext>
//     </>
//   );
// };

// /* ===================
//     Song Card Component
// =====================*/

// function Song({ name, index, songID, PlayClickedSong, addQueue }) {
//   return (
//     <Draggable index={index} draggableId={`song-${songID}`}>
//       {(provided) => (
//         <section
//           className="songCard"
//           ref={provided.innerRef}
//           {...provided.draggableProps}
//           {...provided.dragHandleProps}
//         >
//           <div className="displaySong-container">
//             <Icon
//               onClick={() => {
//                 PlayClickedSong(index);
//               }}
//               className="playSong-icon"
//               icon={playButtonIcon}
//               style={{ fontSize: "33px" }}
//             />

//             {/* fix troll glitch where people put long names using javascript */}
//             <div className="songName col-1">{name}</div>
//             <div className="songArtist col-2">Artists</div>
//             <div className="songFrequency col-3">432</div>

//             {/* add song to queue -- It's gonna be different for the users because they don't have a my fav */}
//             {/* <Icon icon={addQueueIcon} className="add-toQueue" onClick={()=>{addQueue()}} /> */}
//           </div>
//         </section>
//       )}
//     </Draggable>
//   );
// }

// // reducer
// function songPanelreducer(state, action) {
//   switch (action.type) {
//     case "SHUFFLE_SONGS": {
//       // why does this work?
//       for (var i = state.songs.length - 1; i > 0; i--) {
//         var j = Math.floor(Math.random() * (i + 1));
//         var temp = state.songs[i];
//         state.songs[i] = state.songs[j];
//         state.songs[j] = temp;
//       }

//       return {
//         ...state,
//       };
//     }

//     case "HANDLE_DRAG": {
//       let { start, end } = action.position;
//       let { songs } = state;

//       //dragging a song has two distinct motions either being dragged 'down' or 'up'
//       if (end !== null) {
//         let tempArray = [];
//         //moving song down
//         if (end.index > start.index) {
//           // copy from end of array to end index
//           for (let i = songs.length - 1; i > end.index; i--) {
//             tempArray.push(songs[i]);
//           }

//           //copy dragged song
//           tempArray.push(songs[start.index]);

//           //copy rest of array from the end index, skip the start index
//           for (let i = end.index; i >= 0; i--) {
//             if (i !== start.index) {
//               tempArray.push(songs[i]);
//             }
//           }

//           //reverse array
//           let array = tempArray.reverse();

//           return {
//             ...state,
//             songs: array,
//           };
//         }

//         //moving song up
//         if (end.index < start.index) {
//           //copy from start of array to end index
//           for (let i = 0; i < end.index; i++) {
//             tempArray.push(songs[i]);
//           }

//           //copy dragged song
//           tempArray.push(songs[start.index]);

//           //copy rest of array from end index to the end of array, skip the start index
//           for (let i = end.index; i < songs.length; i++) {
//             if (i !== start.index) {
//               tempArray.push(songs[i]);
//             }
//           }

//           return {
//             ...state,
//             songs: tempArray,
//             playOrder: tempArray,
//           };
//         }
//       }
//       return { ...state };
//     }

//     default: {
//       // helps us avoid typos!
//       throw new Error(`Unhandled action type: ${action.type}`);
//     }
//   }
// }

// export default SongPage;
