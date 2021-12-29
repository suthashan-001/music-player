// import React from "react";

// const MobileAbout = () => {
//   return (
//     <div className="mob-about-bg">
//       <AboutContainer
//         title={"BLOGS"}
//         color={"lightblue"}
//         links_url={[
//           "",
//           "https://docs.google.com/document/d/e/2PACX-1vTmckZjqYvdn8IUF2od7FjUaA4ztVfKMeKCIa1yp-ylUgKuTutZbe2VlgPkyGeN5jDYfcgBSc9Z0v67/pub",
//         ]}
//         links_text={["The Power of Music", "Converting Music to 432hz"]}
//       ></AboutContainer>
//       <AboutContainer
//         title={"VIDEOS"}
//         color={"green"}
//         links_url={[
//           "https://www.youtube.com/watch?v=dL1UMZjNlqU",
//           "https://www.youtube.com/watch?v=rTJVWCUpJEI",
//           "https://www.youtube.com/watch?v=EKTZ151yLnk",
//         ]}
//         links_text={[
//           "Truth About Music",
//           "Why 440hz Is Bad",
//           "Benefits of 432hz",
//         ]}
//       ></AboutContainer>
//       <AboutContainer
//         title={"Articles"}
//         color={"red"}
//         links_url={[]}
//         links_text={["The Power of Music", "Converting Music to 432hz"]}
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

// export default MobileAbout;
