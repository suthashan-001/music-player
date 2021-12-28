import React from "react";
import { Icon } from "@iconify/react";
import circleXFill from "@iconify/icons-akar-icons/circle-x-fill";
import chibiAsta from "../background-images/chibi-asta.png";

const Popup = ({ setMessageToggled, setDesktopMode }) => {
  return (
    <div className="dark-overlay">
      <div className="Popup-container">
        <img src={chibiAsta} alt="Chibi Asta" className="chibi-asta" />
        <Icon
          icon={circleXFill}
          className="popup-x"
          onClick={() => {
            setMessageToggled(true);
            setDesktopMode(true);
          }}
        />
        <p className="Popup-message">
          Web Player is currently only supported for{" "}
          <span className="popup-highlight">desktop</span>. The mobile version
          is on it's way!
          <br></br>- GazerSuthy
        </p>
      </div>
    </div>
  );
};

export default Popup;
