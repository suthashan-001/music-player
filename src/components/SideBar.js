import React from "react";
// icons
import { Icon, InlineIcon } from "@iconify/react";
import home_icon from "@iconify/icons-fluent/home-12-regular";
import discovery_icon from "@iconify/icons-bi/gem";
import songs_icon from "@iconify/icons-fluent/music-note-2-20-regular";
import elevate_icon from "@iconify/icons-ant-design/heart-outlined";
import upload_icon from "@iconify/icons-ant-design/cloud-upload-outlined";

const SideBar = () => {
  return (
    <div className="sidebar">
      {/* logo */}
      <h1>logo</h1>
      {/* navigation */}
      <Navigation activePage={"Songs"} />

      {/* Playlists */}
    </div>
  );
};

const Navigation = ({ activePage }) => {
  /* Highlights active nav link 
  {Remember}: accessing dom is last thing to occur, which means page will be painted by the time dom is accessed, thats why useEffect will trigger rerender to apply the added classList*/
  React.useEffect(() => {
    let nav_li = document.getElementsByClassName(`${activePage}`);
    nav_li[0].classList.add("active-page");
  });

  return (
    <div className="nav-wrapper">
      <nav className>
        {/* ul always have default paddings, it likes to catch you of guard*/}
        <ul className="sidebar-navigation">
          <li className="Home-li Home">
            <a className="navigation-links" href="#">
              <div className="nav-link-container">
                <Icon
                  className="nav-icon"
                  icon={home_icon}
                  style={{ color: "#ffffff", fontSize: "33px" }}
                />
                <p className="nav-link-text">Home</p>
              </div>
            </a>
          </li>
          <li className="Discovery-li Discovery">
            <a className="navigation-links" href="#">
              <div className="nav-link-container">
                <Icon
                  className="nav-icon"
                  icon={discovery_icon}
                  style={{ color: "#ffffff", fontSize: "30px" }}
                />
                <p className="nav-link-text">Discovery</p>
              </div>
            </a>
          </li>
          <li className="Songs-li Songs">
            <a className="navigation-links" href="#">
              <div className="nav-link-container">
                <Icon
                  className="nav-icon"
                  icon={songs_icon}
                  style={{ color: "#ffffff", fontSize: "33px" }}
                />
                <p className="nav-link-text">Songs</p>
              </div>
            </a>
          </li>
          <li className="Elevate-li Elevate">
            <a className="navigation-links" href="#">
              <div className="nav-link-container">
                <Icon
                  className="nav-icon"
                  icon={elevate_icon}
                  style={{ color: "#fff8f8", fontSize: "33px" }}
                />
                <p className="nav-link-text">Elevate</p>
              </div>
            </a>
          </li>
          <li className="Upload-li Upload">
            <a className="navigation-links" href="#">
              <div className="nav-link-container">
                <Icon
                  className="nav-icon"
                  icon={upload_icon}
                  style={{ color: "#fff9f9", fontSize: "36px" }}
                />
                <p className="nav-link-text">Upload</p>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideBar;
