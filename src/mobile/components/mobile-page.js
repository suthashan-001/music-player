import React from "react";

import MobileHome from "../pages/mobile-homepage";
import MobileAbout from "../pages/mobile-about";
import MobileAnime from "../pages/mobile-anime";
import MobileSleep from "../pages/mobile-sleep";

const MobilePage = (props) => {
  // conditional rendering based on the current page prop
  if (props.currentPage === "Home") {
    return (
      <div className="mobilePage">
        <MobileHome
          isPlaying={props.isPlaying}
          setNewRequest={props.setNewRequest}
          setIsPlaying={props.setIsPlaying}
          setSongQueue={props.setSongQueue}
          setCurrentPage={props.setCurrentPage}
        ></MobileHome>
      </div>
    );
  } else if (props.currentPage === "About") {
    return (
      <div className="mobilePage">
        <MobileAbout></MobileAbout>
      </div>
    );
  } else if (props.currentPage === "Anime") {
    return (
      <div className="mobilePage">
        <MobileAnime
          isPlaying={props.isPlaying}
          setNewRequest={props.setNewRequest}
          setIsPlaying={props.setIsPlaying}
          setSongQueue={props.setSongQueue}
        ></MobileAnime>
      </div>
    );
  } else if (props.currentPage === "Sleep") {
    return (
      <div className="mobilePage">
        <MobileSleep></MobileSleep>
      </div>
    );
  }
};

export default MobilePage;
