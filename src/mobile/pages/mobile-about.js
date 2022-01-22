import React from "react";

import chibiLuffy from "../../background-images/chibi-luffy.png";
import chibiZen from "../../background-images/chibi-zen.png";
import logo from "../../background-images/gazersuthy_logo.png";

const MobileAbout = () => {
  return (
    <div className="mob-about-bg">
      <a href="https://www.gazersuthy.com" className="resonate-logo-container">
        <img
          src={logo}
          alt="sun with a diamond inside"
          className="mobile-logo"
        />

        <div className="logo-title-container">
          <h1>
            Resonate <span className="mob-highlight">432</span>hz
          </h1>
          <h5 className="by-gazer">
            <span className="mob-highlight"> by </span> Gazersuthy
          </h5>
        </div>
      </a>

      <div className="video-link-container">
        <div>
          <h3 className="video-link-title">Inspiring Videos</h3>
          <div className="about-underline"></div>
        </div>
        <a
          href="https://www.youtube.com/watch?v=dL1UMZjNlqU"
          className="mobile-link-container"
        >
          <img src={chibiLuffy} alt="" className="mob-chibiluffy" />
          <h3>Truth About Music</h3>
        </a>
        <a
          href="https://www.youtube.com/watch?v=dL1UMZjNlqU"
          className="mobile-link-container"
        >
          <img src={chibiZen} alt="" className="mob-chibiluffy" />
          <h3>Why 440hz is Mind Control</h3>
        </a>
      </div>
    </div>
  );
};

// const MobileAbout = () => {
//   return (
//     <div className="mob-about-bg">
//       <div className="mobile-logo-link-container">
//         <a
//           href="https://www.gazersuthy.com"
//           className="logo-link mobile-logo-link"
//         >
//           <div className="resonate-logo">
//             <h1 className="logo-title">
//               Resonate <span className="logo-colour-change">432</span>hz{" "}
//             </h1>
//             <h5>
//               <em>
//                 by <span className="logo-colour-change">GazerSuthy</span>
//               </em>
//             </h5>
//           </div>
//         </a>
//       </div>
//       <AboutContainer
//         title={"BLOGS"}
//         color={"lightblue"}
//         links_url={[
//           "https://docs.google.com/document/d/e/2PACX-1vTmckZjqYvdn8IUF2od7FjUaA4ztVfKMeKCIa1yp-ylUgKuTutZbe2VlgPkyGeN5jDYfcgBSc9Z0v67/pub",
//         ]}
//         links_text={["Converting Music to 432hz"]}
//       ></AboutContainer>
//       <AboutContainer
//         title={"VIDEOS"}
//         color={"green"}
//         links_url={[
//           "https://www.youtube.com/watch?v=dL1UMZjNlqU",
//           "https://www.youtube.com/watch?v=rTJVWCUpJEI",
//         ]}
//         links_text={["Truth About Music", "Why 440hz Is Bad"]}
//       ></AboutContainer>
//     </div>
//   );
// };

// const AboutContainer = ({ title, links_url, links_text, color }) => {
//   return (
//     <div className="mob-about-container">
//       <div className="about-head">
//         <h1 className="container-title">{title}</h1>
//         <div className="about-underline"></div>
//       </div>

//       {links_text.map((text, index) => {
//         return (
//           <div className="about-links-container">
//             <a href={`${links_url[index]}`} className={`about-link ${color}`}>
//               {text}
//             </a>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

export default MobileAbout;
