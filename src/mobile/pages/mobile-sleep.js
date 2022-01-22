import React from "react";

import spongebob from "../../Songs/Sleep/spongebob.jpg";
import gumball from "../../Songs/Sleep/gumball.jpg";
import stewie from "../../Songs/Sleep/stewie.jpg";
import bart from "../../Songs/Sleep/bart-sleep.jpg";

import zuko from "../../background-images/zuko.png";
import katara from "../../background-images/katara.png";
import toph from "../../background-images/toph.png";
import aang from "../../background-images/aang.png";

const MobileSleep = () => {
  return (
    <div className="mob-animepg-bg">
      <h1 className="mob-anime-head">Sleep Music</h1>
      {/* <h4>
        The 432hz frequency calms the mind which allows the brain to reach the
        theta (sleep) state with ease.
      </h4> */}
      <div className="mob-page-pannel mob-sleep-pannel">
        <div className="Dub-card sleep-card mobile-sleep-card">
          <a
            className="mobile-music-link"
            href="https://www.youtube.com/watch?v=GsoKBLGr6WY&t=0s"
          >
            <img src={spongebob} alt="" className="card-image sleep-img" />
            <h3>Sleep Music 1</h3>
          </a>
        </div>
        <div className="Dub-card sleep-card mobile-sleep-card">
          <a
            className="mobile-music-link"
            href="https://www.youtube.com/watch?v=GsoKBLGr6WY&t=0s"
          >
            <img src={stewie} alt="" className="card-image sleep-img" />
            <h3>Sleep Music 2</h3>
          </a>
        </div>
        <div className="Dub-card sleep-card mobile-sleep-card">
          <a
            className="mobile-music-link"
            href="https://www.youtube.com/watch?v=GsoKBLGr6WY&t=0s"
          >
            <img src={gumball} alt="" className="card-image sleep-img" />
            <h3>Sleep Music 3</h3>
          </a>
        </div>
        <div className="Dub-card sleep-card mobile-sleep-card">
          <a
            className="mobile-music-link"
            href="https://www.youtube.com/watch?v=GsoKBLGr6WY&t=0s"
          >
            <img src={bart} alt="" className="card-image sleep-img" />
            <h3>Sleep Music 4</h3>
          </a>
        </div>
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="mob-page-pannel mob-sleep-pannel">
        <h1 className="mob-anime-head">Elemental Music</h1>
        <div className="Dub-card sleep-card mobile-sleep-card">
          <a
            className="mobile-music-link"
            href="https://www.youtube.com/watch?v=szMB0jn4mIo"
          >
            <img src={zuko} alt="" className="card-image sleep-img" />
            <h3>Fire Rhythm</h3>
          </a>
        </div>

        <div className="Dub-card sleep-card mobile-sleep-card">
          <a
            className="mobile-music-link"
            href="https://www.youtube.com/watch?v=UiueCXInj3Y"
          >
            <img src={katara} alt="" className="card-image sleep-img" />
            <h3>Water Rhythm</h3>
          </a>
        </div>
        <div className="Dub-card sleep-card mobile-sleep-card">
          <a
            className="mobile-music-link"
            href="https://www.youtube.com/watch?v=u4d7Fvdb654"
          >
            <img src={toph} alt="" className="card-image sleep-img" />
            <h3>Earth Rhythm</h3>
          </a>
        </div>
        <div className="Dub-card sleep-card mobile-sleep-card">
          <a
            className="mobile-music-link"
            href="https://www.youtube.com/watch?v=KgshcWhi7VA"
          >
            <img src={aang} alt="" className="card-image sleep-img" />
            <h3>Air Rhythm</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileSleep;
