import React from "react";

import chibiAsta from "../background-images/chibi-asta.png";

const Popup = () => {
  return (
    <div className="dark-overlay">
      <div className="Popup-container">
        <img src={chibiAsta} alt="Chibi Asta" className="chibi-asta" />
        <p className="Popup-message">
          Web Player has crashed. Please report the problem to
          GazerSuthy@outlook.com or direct message on instagram @gazersuthy.
          Thank you for your cooperation!
          <br></br>-{" "}
          <a
            href="https://www.resonate432hz.com/player"
            className="gazersuthy-link"
          >
            Back to Web Player
          </a>
        </p>
      </div>
    </div>
  );
};

export default Popup;
