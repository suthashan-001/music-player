import React from "react";

import zuko from "../../background-images/zuko.png";
import katara from "../../background-images/katara.png";
import toph from "../../background-images/toph.png";
import aang from "../../background-images/aang.png";

const MobileSleep = () => {
  return (
    <div className="mob-animepg-bg">
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
