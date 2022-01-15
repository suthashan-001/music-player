import React from "react";
import { Icon } from "@iconify/react";
import home_icon from "@iconify/icons-fluent/home-12-regular";
import discovery_icon from "@iconify/icons-bi/gem";
import elevate_icon from "@iconify/icons-ant-design/heart-outlined";
import sleep24Regular from "@iconify/icons-fluent/sleep-24-regular";
import googleDocs from "@iconify/icons-iconoir/google-docs";

const SideBar = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="sidebar">
      {/* Resonate Logo */}

      <Navigation setCurrentPage={(currentPage, setCurrentPage)} />

      {/* Playlists */}
    </div>
  );
};

const Navigation = ({ currentPage, setCurrentPage }) => {
  // use conditional rendering for active page
  return (
    <div className="nav-wrapper">
      {/* Logo */}
      <div className="resonate-logo">
        <h1 className="logo-title">
          Resonate <span className="logo-colour-change">432</span>hz{" "}
        </h1>
      </div>

      <a href="https://www.gazersuthy.com" className="built-by">
        created by <span className="logo-colour-change">GazerSuthy</span>
      </a>

      <nav>
        {/* ul always have default paddings, it likes to catch you of guard*/}

        <ul className="sidebar-navigation">
          <li
            className="Home-li sidebar-tab"
            onClick={() => {
              setCurrentPage("Home");
            }}
          >
            <button className="navigation-links">
              <div className="nav-link-container">
                <Icon
                  className="nav-icon home-icon"
                  icon={home_icon}
                  style={{ color: "#ffffff", fontSize: "28px" }}
                />
                <p className="nav-link-text">Home</p>
              </div>
            </button>
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
                  icon={home_icon}
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
            <button className="navigation-links">
              <div className="nav-link-container">
                <Icon
                  className="nav-icon elevate-icon"
                  icon={elevate_icon}
                  style={{ color: "#ffffff", fontSize: "28px" }}
                />
                <p className="nav-link-text">Elevate</p>
              </div>
            </button>
          </li>
          {/* Anime-tab */}
          <li
            className="Anime-li sidebar-tab"
            onClick={() => {
              setCurrentPage("Anime");
            }}
          >
            <button className="navigation-links">
              <div className="nav-link-container">
                <Icon
                  className="nav-icon anime-icon"
                  icon={discovery_icon}
                  style={{ color: "#ffffff", fontSize: "28px" }}
                />
                <p className="nav-link-text">Anime</p>
              </div>
            </button>
          </li>
          {/* Sleep Tab */}
          <li
            className="Blog-li sidebar-tab"
            onClick={() => {
              setCurrentPage("Sleep");
            }}
          >
            <button className="navigation-links">
              <div className="nav-link-container">
                <Icon
                  className="nav-icon sleep-icon"
                  icon={sleep24Regular}
                  style={{ color: "#fff9f9", fontSize: "31px" }}
                />
                <p className="nav-link-text">Sleep</p>
              </div>
            </button>
          </li>
          {/* Docs Tab */}
          <li
            className="Blog-li sidebar-tab"
            onClick={() => {
              setCurrentPage("Docs");
            }}
          >
            <button className="navigation-links">
              <div className="nav-link-container">
                <Icon
                  className="nav-icon docs-icon"
                  icon={googleDocs}
                  style={{ color: "#fff9f9", fontSize: "31px" }}
                />
                <p className="nav-link-text">About 432hz</p>
              </div>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
