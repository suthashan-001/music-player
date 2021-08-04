import React from "react";
import SongPage from "../pages/songs";
import HomePage from "../pages/home";
import ElevatePage from "../pages/elevate";
import AnimePage from "../pages/anime";
import QueuePage from "../pages/queue";
import SleepPage from "../pages/sleep";

const Page = (props) => {
  if (props.displayQueue === true) {
    return (
      <QueuePage
        songQueue={props.songQueue}
        queueIndex={props.queueIndex}
        setQueueIndex={props.setQueueIndex}
      ></QueuePage>
    );
  }

  if (props.currentPage === "Songs") {
    return (
      <SongPage
        isPlaying={props.isPlaying}
        setNewRequest={props.setNewRequest}
        setIsPlaying={props.setIsPlaying}
        setSongQueue={props.setSongQueue}
      ></SongPage>
    );
  }

  if (props.currentPage === "Home") {
    return (
      <HomePage
        isPlaying={props.isPlaying}
        setNewRequest={props.setNewRequest}
        setIsPlaying={props.setIsPlaying}
        setSongQueue={props.setSongQueue}
      ></HomePage>
    );
  }

  if (props.currentPage === "Elevate") {
    return (
      <ElevatePage
        isPlaying={props.isPlaying}
        setNewRequest={props.setNewRequest}
        setIsPlaying={props.setIsPlaying}
        setSongQueue={props.setSongQueue}
      ></ElevatePage>
    );
  }

  if (props.currentPage === "Anime") {
    return (
      <AnimePage
        isPlaying={props.isPlaying}
        setNewRequest={props.setNewRequest}
        setIsPlaying={props.setIsPlaying}
        setSongQueue={props.setSongQueue}
      ></AnimePage>
    );
  }

  if (props.currentPage === "Sleep") {
    return <SleepPage></SleepPage>;
  }

  return <div></div>;
};

export default Page;
