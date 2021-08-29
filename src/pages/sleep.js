import React from "react";
import spongebob from "../Songs/Sleep/spongebob.jpg";
import gumball from "../Songs/Sleep/gumball.jpg";
import stewie from "../Songs/Sleep/stewie.jpg";
import bart from "../Songs/Sleep/bart-sleep.jpg";

const Sleep = () => {
  return (
    <div className="page page-background">
      <div className="page-pannel anime-opening-pannel sleep-pannel">
        <div className="Dub-card sleep-card">
          <img src={spongebob} alt="" className="card-image sleep-img" />

          <a
            className="music-link"
            href="https://www.youtube.com/watch?v=GsoKBLGr6WY&t=0s"
          >
            Sleep Music 1
          </a>
        </div>

        <div className="Dub-card sleep-card">
          <img src={gumball} alt="" className="card-image sleep-img" />

          <a
            className="music-link"
            href="https://www.youtube.com/watch?v=Bf1S1M7WPHE&t=0s"
          >
            Sleep Music 2
          </a>
        </div>

        <div className="Dub-card sleep-card">
          <img src={stewie} alt="" className="card-image sleep-img" />

          <a
            className="music-link"
            href="https://www.youtube.com/watch?v=YMZA4wnBa7s&t=0s"
          >
            Sleep Music 3
          </a>
        </div>

        <div className="Dub-card sleep-card">
          <img src={bart} alt="" className="card-image sleep-img" />

          <a
            className="music-link"
            href="https://www.youtube.com/watch?v=9SZhVXmnXtU&t=0s"
          >
            Sleep Music 4
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sleep;
