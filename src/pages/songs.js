import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import upload_icon from "@iconify/icons-ant-design/cloud-upload-outlined";

const SongPage = () => {
  return (
    <div className="page songPage-background">
      <div className="song-pannel">
        <div className="pannel-header">
          <h1 className="page-title">My Songs</h1>
          <div className="page-buttons">
            <button className="play-btn btn">
              <p className="button-text">play</p>
            </button>
            <button className="upload-btn btn">
              <p className="button-text">upload</p>
              <Icon
                className="upload-icon"
                icon={upload_icon}
                style={{ color: "#fff9f9", fontSize: "36px" }}
              />
            </button>
          </div>
          <FilterSearch />
        </div>
        {/* filter search strictly searches through your own songs */}

        <DisplaySongs />
      </div>
    </div>
  );
};

const FilterSearch = () => {
  return (
    <form className="filterSongs">
      <input
        type="text"
        name="song-search"
        // value={formInput}
        // onChange={handleSearchInput}
        placeholder="filter"
      />
    </form>
  );
};

const DisplaySongs = () => {
  return (
    <>
      <div className="displaySong-head">
        <div className="displaySong-container">
          <p className="head-title col-1">Title</p>
          <p className="head-artist col-2">Artists</p>
          <p className="head-frequency col-3 ">Hz</p>
        </div>
      </div>
      <div className="songsArea">
        <div className="songCard">
          {/* play button on hover*/}
          <div className="displaySong-container">
            {/* fix troll glitch where people put long names using javascript */}
            <div className="songName col-1">Grandeur</div>
            <div className="songArtist col-2">Snow Man</div>
            <div className="songFrequency col-3">432</div>
          </div>
        </div>
        <div className="songCard">
          <div className="displaySong-container">
            <div className="songName">Beautiful</div>
            <div className="songArtist">Suthashan</div>
            <div className="songFrequency col-3">432</div>
          </div>
        </div>
        <div className="songCard">
          <div className="displaySong-container">
            <div className="songName">Lost In Paradise</div>
            <div className="songArtist">hee</div>
            <div className="songFrequency col-3">432</div>
          </div>
        </div>
        <div className="songCard">
          <div className="displaySong-container">
            <div className="songName">Lost In Paradise</div>
            <div className="songArtist">hee</div>
            <div className="songFrequency col-3">432</div>
          </div>
        </div>
        <div className="songCard">
          <div className="displaySong-container">
            <div className="songName">Lost In Paradise</div>
            <div className="songArtist">hee</div>
            <div className="songFrequency col-3">432</div>
          </div>
        </div>
        <div className="songCard">
          <div className="displaySong-container">
            <div className="songName">Lost In Paradise</div>
            <div className="songArtist">hee</div>
            <div className="songFrequency col-3">432</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SongPage;
