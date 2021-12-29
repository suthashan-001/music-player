import "./App.css";
import React from "react";
import SideBar from "./components/SideBar";
import Player from "./components/Player";
import Page from "./components/Page";
import Popup from "./components/popup";

// import MobilePage from "./mobile/components/mobile-page";
// import MobilePlayer from "./mobile/components/mobile-player";
// import MobileNav from "./mobile/components/mobile-nav";
// import MobileFullScreen from "./mobile/components/mobile-fullscreen";

/* ======================
    GOAL: Mobile Version
   ======================
*/

/* 
  Don't be afraid of trying, you are gonna fail but you are gonna learn! 
  Don't let failure get to your heart and success get to your head 
    
  - Ralph Smart ❤️  
*/

function App() {
  // states
  const [isPlaying, setIsPlaying] = React.useState(false);
  // new request is when user click's a new song while a song is already playing
  const [newRequest, setNewRequest] = React.useState(false);
  const [songQueue, setSongQueue] = React.useState([]);
  const [queueIndex, setQueueIndex] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState("Home");
  const [displayQueue, setDisplayQueue] = React.useState(false);
  const [messageToggled, setMessageToggled] = React.useState(false);
  const [desktopMode, setDesktopMode] = React.useState(true);

  // inital render
  if (messageToggled === false) {
    if (window.innerWidth <= 1000 && desktopMode === true) {
      setDesktopMode(false);
    } else if (window.innerWidth >= 1000 && desktopMode === false) {
      setDesktopMode(true);
    }
  }

  /* ==================
    Mobile Version
    ===================*/

  // return (
  //   <div className="mobile-container">
  //     <MobilePage
  //       currentPage={currentPage}
  //       setCurrentPage={setCurrentPage}
  //       songQueue={songQueue}
  //       setSongQueue={setSongQueue}
  //       queueIndex={queueIndex}
  //       queueIndex={queueIndex}
  //       setQueueIndex={setQueueIndex}
  //       setNewRequest={setNewRequest}
  //       setIsPlaying={setIsPlaying}
  //     ></MobilePage>
  //     <section className="mob-player-nav-container">
  //       <MobilePlayer
  //         isPlaying={isPlaying}
  //         newRequest={newRequest}
  //         setNewRequest={setNewRequest}
  //         setIsPlaying={setIsPlaying}
  //         songQueue={songQueue}
  //         displayQueue={displayQueue}
  //         setDisplayQueue={setDisplayQueue}
  //         queueIndex={queueIndex}
  //         setQueueIndex={setQueueIndex}
  //       ></MobilePlayer>
  //       <MobileNav
  //         currentPage={currentPage}
  //         setCurrentPage={setCurrentPage}
  //       ></MobileNav>
  //     </section>
  //     {/* <MobileFullScreen></MobileFullScreen> */}
  //   </div>
  // );

  /* ==================
    Desktop Version
    ===================*/

  React.useEffect(() => {
    function handleResize() {
      // if the current width is less than 1000px change state
      if (window.innerWidth <= 1000 && desktopMode === true) {
        setDesktopMode(false);
      } else if (window.innerWidth >= 1000 && desktopMode === false) {
        setDesktopMode(true);
      }
    }

    //if the user hasn't been introduced to the popup message then the popup will apear
    if (messageToggled === false) {
      //event listener that tracks screen size
      window.addEventListener("resize", handleResize);
      // clean up
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  });

  return (
    <div className="page-layout">
      {desktopMode === false ? (
        <Popup
          setDesktopMode={setDesktopMode}
          setMessageToggled={setMessageToggled}
        />
      ) : (
        ""
      )}
      <SideBar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      ></SideBar>
      <Page
        currentPage={currentPage}
        isPlaying={isPlaying}
        setNewRequest={setNewRequest}
        setIsPlaying={setIsPlaying}
        setSongQueue={setSongQueue}
        displayQueue={displayQueue}
        songQueue={songQueue}
        queueIndex={queueIndex}
        setQueueIndex={setQueueIndex}
      ></Page>
      <Player
        isPlaying={isPlaying}
        newRequest={newRequest}
        setNewRequest={setNewRequest}
        setIsPlaying={setIsPlaying}
        songQueue={songQueue}
        displayQueue={displayQueue}
        setDisplayQueue={setDisplayQueue}
        queueIndex={queueIndex}
        setQueueIndex={setQueueIndex}
      ></Player>
    </div>
  );
}

export default App;
