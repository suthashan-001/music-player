import brahms from "../Songs/Sleep/Brahms lullaby.mp3";
import brahms_img from "../Songs/Sleep/snoopy.jpg";

import star from "../Songs/Sleep/Twinkle Twinkle Little Star.mp3";
import star_img from "../Songs/Sleep/star.jpg";

import bus from "../Songs/Sleep/Wheels on the Bus.mp3";
import bus_img from "../Songs/Sleep/bus.jpg";

let lullabies = [
  {
    name: "Brahm's lullaby",
    songfile: brahms,
    id: 1,
    songImage: brahms_img,
    artist: "Johannes Brahm",
    freq: "432hz",
  },
  {
    name: "Twinkle Twinkle Little Star",
    songfile: star,
    id: 2,
    songImage: star_img,
    artist: "Jane Taylor",
    freq: "432hz",
  },
  {
    name: "The Wheels on the Bus",
    songfile: bus,
    id: 3,
    songImage: bus_img,
    artist: "Verna Hills",
    freq: "432hz",
  },
];

export default lullabies;
