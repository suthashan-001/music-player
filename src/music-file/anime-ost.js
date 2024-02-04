import song1_img from "../Songs/piano/song4_img.jpg";

import Beautiful from "../Songs/black clover/Beautiful.mp3";
import Beautiful_img from "../Songs/black clover/Asta.jpeg";

import Snow_Fairy from "../Songs/Snow Fairy.mp3";
import Snow_Fairy_img from "../Songs/Snow Fairy-img.png";

import DemonSlayer from "../Songs/Demon Slayer/Demon Slayer.mp3";

import After_Dark from "../Songs/Bleach/After Dark.mp3";
import After_Dark_img from "../Songs/Bleach/Afterdark-img.jpg";

let anime_ost_data = [
  {
    name: "Opening 1",
    songfile: DemonSlayer,
    id: 29,
    songImage: song1_img,
    anime: "Demon Slayer",
    artist: "Demon Slayer",
  },
  {
    name: "Beautiful",
    songfile: Beautiful,
    id: 30,
    songImage: Beautiful_img,
    anime: "Black Clover",
    artist: "Black Clover",
  },
  {
    name: "After Dark",
    songfile: After_Dark,
    id: 32,
    songImage: After_Dark_img,
    anime: "Bleach",
    artist: "Bleach",
  },
  {
    name: "Snow Fairy",
    songfile: Snow_Fairy,
    id: 33,
    songImage: Snow_Fairy_img,
    anime: "Fairy Tail",
    artist: "Fairy Tail",
  },
];

export default anime_ost_data;
