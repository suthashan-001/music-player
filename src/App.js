import "./App.css";
import React from "react";
import SideBar from "./components/SideBar";
import Player from "./components/Player";
import SongPage from "./pages/songs";
import FullScreen from "./components/FullScreen";
import Page from "./components/Page";

/* 
  Don't be afraid of trying, you are gonna fail but you are gonna learn! 
  Don't let failure get to your heart and success get to your head 
    
  - Ralph Smart ❤️  
*/

function App() {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [newRequest, setNewRequest] = React.useState(false);
  const [songQueue, setSongQueue] = React.useState([]);
  const [queueIndex, setQueueIndex] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState("Home");
  const [displayQueue, setDisplayQueue] = React.useState(false);

  return (
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
  );
}

export default App;
