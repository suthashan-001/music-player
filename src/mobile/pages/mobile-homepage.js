// import React from "react";

// import mobElevateSongs from "../../music-file/elevate-home";
// import mobAnimeDubSongs from "../../music-file/anime-dub-home";
// import mobRecentSongs from "../../music-file/recent-home";

// const MobileHome = ({
//   isPlaying,
//   setIsPlaying,
//   setNewRequest,
//   setSongQueue,
//   setCurrentPage,
// }) => {
//   const [playCardSong, setPlayCardSong] = React.useState([]);

//   // useEffect to rerender when user clicks a songCard
//   React.useEffect(() => {
//     if (playCardSong.length !== 0) {
//       if (isPlaying === true) {
//         setNewRequest(true);
//         setSongQueue([playCardSong]);
//         setPlayCardSong([]);
//       } else {
//         setSongQueue([playCardSong]);
//         setIsPlaying(true);
//         setPlayCardSong([]);
//       }
//     }
//   }, [playCardSong, isPlaying, setIsPlaying, setNewRequest, setSongQueue]);

//   return (
//     <div className="mob-home-bg">
//       <div className="learn-about-container">
//         <button
//           className="learn-about-btn"
//           onClick={() => {
//             setCurrentPage("About");
//           }}
//         >
//           Learn About 432hz
//         </button>
//       </div>

//       <DisplayMobileSongs
//         data={mobElevateSongs}
//         setPlayCardSong={setPlayCardSong}
//         title={"Elevate"}
//       ></DisplayMobileSongs>

//       <DisplayMobileSongs
//         data={mobAnimeDubSongs}
//         setPlayCardSong={setPlayCardSong}
//         title={"Dub"}
//       ></DisplayMobileSongs>

//       <DisplayMobileSongs
//         data={mobRecentSongs}
//         setPlayCardSong={setPlayCardSong}
//         title={"Can't Skip"}
//       ></DisplayMobileSongs>
//       {/* <DisplayMobileSongs data={Elevate_data}></DisplayMobileSongs>
//       <DisplayMobileSongs data={Ost_data}></DisplayMobileSongs>
//       <DisplayMobileSongs data={AnimeSub_data}></DisplayMobileSongs> */}
//     </div>
//   );
// };

// const DisplayMobileSongs = ({ data, setPlayCardSong, title }) => {
//   return (
//     <section className="display-song-wrapper">
//       <h1 className="display-title">{title}</h1>
//       <div className="mob-song-container">
//         {/* map each song to a MobileSongCard component */}
//         {data.map((song) => {
//           return (
//             <MobileSongCard
//               song={song}
//               key={song.id}
//               setPlayCardSong={setPlayCardSong}
//             ></MobileSongCard>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// const MobileSongCard = ({ song, setPlayCardSong }) => {
//   return (
//     <div
//       className="mob-song-card"
//       onClick={() => {
//         setPlayCardSong(song);
//       }}
//     >
//       <div className="mobcard-info-container">
//         <section className="mobcard-songImg-container">
//           <img src={song.songImage} alt="Not Found" className="mob-song-img" />
//         </section>

//         <section className="mobcard-song-info">
//           <p className="mobcard-song-name">{song.name}</p>
//           <p className="mobcard-song-artist">{song.artist}</p>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default MobileHome;
