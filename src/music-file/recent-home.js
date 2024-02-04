import Who from "../Songs/Naruto/Diver.mp3";
import Who_img from "../Songs/Naruto/who-img.jpg";

import Haruka from "../Songs/black clover/Haruka Mirai.mp3";
import Haruka_img from "../Songs/black clover/Asta1.jpg";

import Sanka from "../Songs/Demon Slayer/Zankyou Sanka.mp3";
import Sanka_img from "../Songs/Demon Slayer/Sanka.jpeg";

import Hana from "../Songs/black clover/Hana ga Saku Michi.mp3";
import Nacht from "../Songs/black clover/Nacht.jpeg";

import song1 from "../Songs/OST/Toji Fushiguro.mp3";
import Toji from "../Songs/toji-img.jpg";

let recent_data = [
  {
    name: "Thankyou Sanka",
    songfile: Sanka,
    id: 0,
    songImage: Sanka_img,
    anime: "Demon Slayer",
    artist: "Demon Slayer",
  },
  {
    name: "Haruka Mirai",
    songfile: Haruka,
    id: 1,
    songImage: Haruka_img,
    anime: "Black Clover",
    artist: "Black Clover",
  },
  {
    name: "Opening 10",
    songfile: Hana,
    id: 2,
    songImage: Nacht,
    anime: "Black Clover",
    artist: "Black Clover",
  },
  {
    name: "Deep Diver",
    songfile: Who,
    id: 3,
    songImage: Who_img,
    anime: "Boruto",
    artist: "Naruto",
  },
  {
    name: "Toji Fusiguro",
    songfile: song1,
    id: 4,
    songImage: Toji,
    anime: "Jujutsu Kaisen",
    artist: "Jujutsu Kaisen",
  },
];

export default recent_data;
