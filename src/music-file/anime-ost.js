import Rengoku_OST from "../Songs/OST/Rengoku.mp3";
import Rengoku_img from "../Songs/OST/Ost-imgs/Rengoku_img.jpg";

import PerfectTime from "../Songs/OST/Perfect Time.mp3";
import PerfectTime_img from "../Songs/OST/Ost-imgs/meliodas.png";

import Clavar from "../Songs/OST/Clavar La Espada.mp3";
import Clavar_img from "../Songs/Bleach/Afterdark-img.jpg";

import Binke from "../Songs/One Piece/Binks.mp3";
import shanksBuggy from "../Songs/One Piece/shanksbuggy.jpg";

let Ost_data = [
  {
    name: "Binks no Sake",
    songfile: Binke,
    id: 4,
    songImage: shanksBuggy,
    artist: "One Piece",
    anime: "One Piece",
  },
  {
    name: "Perfect Time (Now)",
    songfile: PerfectTime,
    id: 1,
    songImage: PerfectTime_img,
    artist: "Seven Deadly Sins ",
    anime: "Seven Deadly Sins",
  },
  {
    name: "Rengoku vs Akaza",
    songfile: Rengoku_OST,
    id: 2,
    songImage: Rengoku_img,
    artist: "Demon Slayer",
    anime: "Demon Slayer",
  },
  {
    name: "Clavar La Espada",
    songfile: Clavar,
    id: 3,
    songImage: Clavar_img,
    artist: "Bleach",
    anime: "Bleach",
  },
];

export default Ost_data;
