import React from "react";
import { Icon } from "@iconify/react";
import home_icon from "@iconify/icons-fluent/home-12-regular";
import discovery_icon from "@iconify/icons-bi/gem";
import songs_icon from "@iconify/icons-fluent/music-note-2-20-regular";
import elevate_icon from "@iconify/icons-ant-design/heart-outlined";
import upload_icon from "@iconify/icons-ant-design/cloud-upload-outlined";
import sleep24Regular from "@iconify/icons-fluent/sleep-24-regular";

const SideBar = ({ setCurrentPage }) => {
  return (
    <div className="sidebar">
      {/* Resonate Logo */}

      <Navigation setCurrentPage={setCurrentPage} />

      {/* Playlists */}
    </div>
  );
};

const Navigation = ({ setCurrentPage }) => {
  // deleted code of useEffect and magically sidebar started behaving how I planned it to without coding, jut deleting code.

  // #edit never mind have to code it LOL

  return (
    <div className="nav-wrapper">
      {/* Logo */}
      <div className="resonate-logo">
        <h1 className="logo-title">
          Resonate <span className="logo-colour-change">432</span>hz{" "}
          <div className="beta-div">
            <em>Beta</em>
          </div>
        </h1>
      </div>

      <nav className>
        {/* ul always have default paddings, it likes to catch you of guard*/}

        {/* Home tab */}
        <ul className="sidebar-navigation">
          <li
            className="Home-li sidebar-tab"
            onClick={() => {
              setCurrentPage("Home");
            }}
          >
            <a className="navigation-links" href="#">
              <div className="nav-link-container">
                <Icon
                  className="nav-icon"
                  icon={home_icon}
                  style={{ color: "#ffffff", fontSize: "28px" }}
                />
                <p className="nav-link-text">Home</p>
              </div>
            </a>
          </li>
          {/* MySongs tab */}
          {/* <li
            className="Songs-li sidebar-tab"
            onClick={() => {
              //remove previous current page class
              setCurrentPage("Songs");
            }}
          >
            <a className="navigation-links" href="#">
              <div className="nav-link-container">
                <Icon
                  className="nav-icon"
                  icon={songs_icon}
                  style={{ color: "#ffffff", fontSize: "28px" }}
                />
                <p className="nav-link-text">Songs</p>
              </div>
            </a>
          </li> */}
          {/* Elevate tab */}
          <li
            className="Elevate-li sidebar-tab"
            onClick={() => {
              setCurrentPage("Elevate");
            }}
          >
            <a className="navigation-links" href="#">
              <div className="nav-link-container">
                <Icon
                  className="nav-icon"
                  icon={elevate_icon}
                  style={{ color: "#ffffff", fontSize: "28px" }}
                />
                <p className="nav-link-text">Elevate</p>
              </div>
            </a>
          </li>
          {/* Anime-tab */}
          <li
            className="Anime-li sidebar-tab"
            onClick={() => {
              setCurrentPage("Anime");
            }}
          >
            <a className="navigation-links" href="#">
              <div className="nav-link-container">
                <Icon
                  className="nav-icon"
                  icon={discovery_icon}
                  style={{ color: "#ffffff", fontSize: "28px" }}
                />
                <p className="nav-link-text">Anime</p>
              </div>
            </a>
          </li>
          <li
            className="Blog-li sidebar-tab"
            onClick={() => {
              setCurrentPage("Sleep");
            }}
          >
            <a className="navigation-links" href="#">
              <div className="nav-link-container">
                <Icon
                  className="nav-icon"
                  icon={sleep24Regular}
                  style={{ color: "#fff9f9", fontSize: "31px" }}
                />
                <p className="nav-link-text">Sleep</p>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
