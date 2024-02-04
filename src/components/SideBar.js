import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import home_icon from "@iconify/icons-fluent/home-12-regular";
import discovery_icon from "@iconify/icons-bi/gem";

const SideBar = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="sidebar">
      {/* Logo */}
      <Link to="/musicapp" className="logo-link">
        <div className="resonate-logo">
          <h1 className="logo-title">Keys of Anime </h1>
          <h5>
            <em>
              by <span className="logo-colour-change">Suthashan</span>
            </em>
          </h5>
        </div>
      </Link>
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {/* Future Playlists */}
    </div>
  );
};

const Navigation = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="nav-wrapper">
      <nav>
        <ul className="sidebar-navigation">
          {currentPage === "Home" ? (
            <li
              className="Home-li sidebar-tab"
              onClick={() => {
                setCurrentPage("Home");
              }}
            >
              <button className="navigation-links active-button-link">
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
          ) : (
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
          )}

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

          {/* Anime-tab */}
          {currentPage === "Anime" ? (
            <li
              className="Anime-li sidebar-tab"
              onClick={() => {
                setCurrentPage("Anime");
              }}
            >
              <button className="navigation-links active-button-link">
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
          ) : (
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
          )}
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
