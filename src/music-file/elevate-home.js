//song imports
import gratitude from "../Songs/elevate/Gratitude.mp3";
import gratitude_img from "../Songs/elevate/Elevate Images/Gratitude.png";

import OneLove from "../Songs/elevate/One Love.mp3";
import OneLove_img from "../Songs/elevate/Elevate Images/One Love.jpg";

import Changes from "../Songs/elevate/Changes.mp3";
import Changes_img from "../Songs/elevate/Elevate Images/Change-jcole.jpg";

import NotAfraid from "../Songs/elevate/Not Afraid.mp3";
import NotAfraid_img from "../Songs/elevate/Elevate Images/NotAfraid.jpg";

let elevate_data = [
  {
    name: "Gratitude",
    songfile: gratitude,
    id: 1,
    songImage: gratitude_img,
    artist: "Lordelle",
    freq: "432hz",
  },
  {
    name: "One Love",
    songfile: OneLove,
    id: 2,
    songImage: OneLove_img,
    artist: "Bob Marley",
    freq: "432hz",
  },
  {
    name: "Changes",
    songfile: Changes,
    id: 3,
    songImage: Changes_img,
    artist: "J Cole",
    freq: "432hz",
  },
  {
    name: "Not Afraid",
    songfile: NotAfraid,
    id: 4,
    songImage: NotAfraid_img,
    artist: "Eminem",
    freq: "432hz",
  },
];

export default elevate_data;
