import React from "react";

import { Link } from "react-router-dom";

// cover art img
import coverArt from "./intro-imgs/cover-art.jpg";
import logoDesign from "./intro-imgs/logo-design.png";
import gazerLogo from "./intro-imgs/gazersuthy_logo.png";

// appImg
import appImg from "./intro-imgs/appImg.png";

// icons
import { Icon } from "@iconify/react";
import musicNoteLine from "@iconify/icons-clarity/music-note-line";
import musicNoteThin from "@iconify/icons-ph/music-note-thin";
import musicNotesThin from "@iconify/icons-ph/music-notes-thin";
import playButtonIcon from "@iconify/icons-gg/play-button-o";
import bxsDonateHeart from "@iconify/icons-bx/bxs-donate-heart";
import moneyBillWave from "@iconify/icons-fa-solid/money-bill-wave";
import fastForwardSolid from "@iconify/icons-clarity/fast-forward-solid";

const IntroPage = () => {
  return (
    <div className="IntroPage">
      <header>
        <div className="intro-logo">
          <img src={logoDesign} alt="" className="intro-logo-shape" />
          <h1 className="intro-title">Resonate 432hz</h1>
        </div>
        {/* cover art */}
        <img src={coverArt} alt="" className="cover-art" />
        <img src={gazerLogo} alt="" className="intro-gazersuthy-logo" />
      </header>

      {/* body */}
      <section className="webplayer-container">
        <img src={appImg} alt="" className="appImg" />

        <div className="webplayer-btn-container">
          {/* music note styles */}
          <div className="music-note-container-1">
            <Icon
              icon={musicNoteLine}
              className="music-note-design music-note-1"
            />
          </div>

          <div className="music-note-container-2">
            <Icon
              icon={musicNoteThin}
              className="music-note-design music-note-2"
            />
          </div>
          <div className="music-note-container-3">
            <Icon
              icon={musicNotesThin}
              className="music-note-design music-note-3"
            />
          </div>

          <Link className="intro-button-link" to="/player">
            <div className="intro-button">
              Player <Icon icon={playButtonIcon} className="btn-logo" />
            </div>
          </Link>
        </div>
        <div className="web-player-description">
          <div className="line-style"></div>
          <p className="intro-description">
            <p>
              <span className="highlight1">Listen</span> to high
            </p>
            <p>
              {" "}
              <span className="highlight2">quality</span> anime and
            </p>
            <p>
              {" "}
              <span className="highlight3">elevating</span> music
            </p>
            <p>
              <span className="highlight4">tuned</span> to 432 hertz
            </p>
            <p>
              <span className="highlight5">frequency</span>
            </p>
          </p>
        </div>
      </section>

      <section className="cards">
        <div className="info-card card-1">
          <div className="card-head">
            <h3 className="card-title">Why 432hz ?</h3>
            <Icon icon={bxsDonateHeart} className="giveHeart-icon" />
          </div>
          <p className="info-card-description">
            432hz is the universal sound frequency as 432hz is linked to the
            schumann resonance 8hz, which is the heart beat of planet earth.
          </p>
        </div>
        <div className="info-card card-2">
          <div className="card-head">
            <h3 className="card-title">Its Free.</h3>
            <Icon icon={moneyBillWave} className="money-icon" />
          </div>
          <p className="info-card-description">
            That’s right! This is a free web player app built to share the magic
            of the 432hz frequency. It is also a gift to celebrate my first app
            creation!
          </p>
        </div>
        <div className="info-card card-3">
          <div className="card-head">
            <h3 className="card-title">Can't Skip</h3>
            <Icon icon={fastForwardSolid} className="cantskip-icon" />
          </div>
          <p className="info-card-description">
            Web player contains the full version of the openings that you cannot
            skip, from classics such as Naruto to trending anime such as Black
            Clover and Demon Slayer.{" "}
          </p>
        </div>
      </section>
    </div>
  );
};

export default IntroPage;
