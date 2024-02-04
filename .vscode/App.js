import "./App.css";
import React from "react";
import SideBar from "./components/SideBar";
import Player from "./components/Player";
import Page from "./components/Page";

import MobilePage from "./mobile/components/mobile-page";
import MobilePlayer from "./mobile/components/mobile-player";
import MobileNav from "./mobile/components/mobile-nav";

import { ErrorBoundary } from "./errorBoundary";

import IntroPage from "./intro-page/introPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// This is the main react tree
function App() {
  return (
    <>
      {/* routing to either intro page or app based on url */}
      <BrowserRouter>
        <Switch>
          <Route path="/player">
            {/* calls function we created below called MusicApp */}
            <MusicApp></MusicApp>
          </Route>
          <Route path="/">
            <IntroPage></IntroPage>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

function MusicApp() {
  // states
  const [isPlaying, setIsPlaying] = React.useState(false);
  // new request is when user click's a new song while a song is already playing
  const [newRequest, setNewRequest] = React.useState(false);
  const [songQueue, setSongQueue] = React.useState([]);
  const [queueIndex, setQueueIndex] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState("Home");
  const [displayQueue, setDisplayQueue] = React.useState(false);
  const [desktopMode, setDesktopMode] = React.useState(true);
  const [modeChanged, setModeChanged] = React.useState(false);

  // inital render - we determine if the application is opened on a desktop or mobile application
  if (window.innerWidth <= 1000 && desktopMode === true) {
    setDesktopMode(false);
  } else if (window.innerWidth >= 1000 && desktopMode === false) {
    setDesktopMode(true);
  }

  //resize useEffect
  React.useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1000 && desktopMode === true) {
        setDesktopMode(false);
        setModeChanged(true);
      } else if (window.innerWidth >= 1000 && desktopMode === false) {
        setDesktopMode(true);
        setModeChanged(true);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  // reload useEffect ** look into this
  React.useEffect(() => {
    if (modeChanged === true) {
      window.location.reload();
    }
  }, [modeChanged]);

  // We return either the mobile version or the desktop version  based on the state "desktop mode"
  return (
    <>
      <ErrorBoundary>
        {desktopMode === false ? (
          // ==== Mobile Version ====
          <div className="mobile-container">
            <MobilePage
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              songQueue={songQueue}
              setSongQueue={setSongQueue}
              queueIndex={queueIndex}
              setQueueIndex={setQueueIndex}
              setNewRequest={setNewRequest}
              setIsPlaying={setIsPlaying}
            ></MobilePage>
            <section className="mob-player-nav-container">
              {isPlaying === true ? (
                <MobilePlayer
                  isPlaying={isPlaying}
                  newRequest={newRequest}
                  setNewRequest={setNewRequest}
                  setIsPlaying={setIsPlaying}
                  songQueue={songQueue}
                  displayQueue={displayQueue}
                  setDisplayQueue={setDisplayQueue}
                  queueIndex={queueIndex}
                  setQueueIndex={setQueueIndex}
                ></MobilePlayer>
              ) : (
                ""
              )}
              <MobileNav
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              ></MobileNav>
            </section>
          </div>
        ) : (
          // ==== Desktop Version ====
          <div className="page-layout">
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
        )}
      </ErrorBoundary>
    </>
  );
}

export default App;
