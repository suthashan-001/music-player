import React from "react";
import { Icon } from "@iconify/react";
import home_icon from "@iconify/icons-fluent/home-12-regular";
import anime_icon from "@iconify/icons-bi/gem";
import elevate_icon from "@iconify/icons-ant-design/heart-outlined";
import sleep_icon from "@iconify/icons-fluent/sleep-24-regular";

const MobileNav = ({ currentPage, setCurrentPage }) => {
  return (
    <div className="mob-nav-container">
      {/* Navigation tab */}
      <nav className="mob-nav">
        {/* conditional rendering based on active page {adds mob-active-page class}*/}
        <ul>
          {currentPage === "Home" ? (
            <li className="mob-nav-tab">
              <div className="mob-nav-link-container mob-active-page">
                <Icon className="mob-nav-icon mob-home-icon" icon={home_icon} />
                <p className="mob-nav-link-text">Home</p>
              </div>
            </li>
          ) : (
            <li className="mob-nav-tab">
              <div
                className="mob-nav-link-container"
                onClick={() => {
                  setCurrentPage("Home");
                }}
              >
                <Icon className="mob-nav-icon mob-home-icon" icon={home_icon} />
                <p className="mob-nav-link-text">Home</p>
              </div>
            </li>
          )}

          {currentPage === "Elevate" ? (
            <li className="mob-nav-tab">
              <div className="mob-nav-link-container mob-active-page">
                <Icon
                  className="mob-nav-icon mob-elevate-icon"
                  icon={elevate_icon}
                />
                <p className="mob-nav-link-text">Elevate</p>
              </div>
            </li>
          ) : (
            <li className="mob-nav-tab">
              <div
                className="mob-nav-link-container"
                onClick={() => {
                  setCurrentPage("Elevate");
                }}
              >
                <Icon
                  className="mob-nav-icon mob-elevate-icon"
                  icon={elevate_icon}
                />
                <p className="mob-nav-link-text">Elevate</p>
              </div>
            </li>
          )}

          {currentPage === "Anime" ? (
            <li className="mob-nav-tab">
              <div className="mob-nav-link-container mob-active-page">
                <Icon
                  className="mob-nav-icon mob-anime-icon"
                  icon={anime_icon}
                />
                <p className="mob-nav-link-text">Anime</p>
              </div>
            </li>
          ) : (
            <li className="mob-nav-tab">
              <div
                className="mob-nav-link-container"
                onClick={() => {
                  setCurrentPage("Anime");
                }}
              >
                <Icon
                  className="mob-nav-icon mob-anime-icon"
                  icon={anime_icon}
                />
                <p className="mob-nav-link-text">Anime</p>
              </div>
            </li>
          )}

          {currentPage === "Sleep" ? (
            <li className="mob-nav-tab">
              <div className="mob-nav-link-container mob-active-page">
                <Icon
                  className="mob-nav-icon mob-sleep-icon"
                  icon={sleep_icon}
                />
                <p className="mob-nav-link-text">Sleep</p>
              </div>
            </li>
          ) : (
            <li className="mob-nav-tab">
              <div
                className="mob-nav-link-container"
                onClick={() => {
                  setCurrentPage("Sleep");
                }}
              >
                <Icon
                  className="mob-nav-icon mob-sleep-icon"
                  icon={sleep_icon}
                />
                <p className="mob-nav-link-text">Sleep</p>
              </div>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default MobileNav;
