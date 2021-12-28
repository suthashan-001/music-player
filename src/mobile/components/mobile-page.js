import React from "react";
import MobileHome from "../pages/mobile-homepage";
import MobileAbout from "../pages/mobile-about";

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
  } else {
    return <div></div>;
  }
};

export default MobilePage;
