import React from "react";

import chibiLuffy from "../background-images/chibi-luffy.png";
import chibiZen from "../background-images/chibi-zen.png";

const Docs = () => {
  return (
    <div className="page page-background">
      <br></br>
      <br></br>
      <h1 className="section-title">Docs</h1>
      <div className="page-pannel anime-opening-pannel">
        <h3 className="doc-head">Blog </h3>
        <a
          className="doc-blog-link"
          href="http://docs.google.com/document/d/e/2PACX-1vTmckZjqYvdn8IUF2od7FjUaA4ztVfKMeKCIa1yp-ylUgKuTutZbe2VlgPkyGeN5jDYfcgBSc9Z0v67/pub"
        >
          How to convert your music from 440hz to 432hz
        </a>

        <div className="page-pannel anime-opening-pannel sleep-pannel">
          <h2 className="video-doc-head">Videos:</h2>
          <div className="Dub-card sleep-card doc-card">
            <img
              src={chibiLuffy}
              alt=""
              className="card-image sleep-img doc-img"
            />

            <a
              className="music-link"
              href="https://www.youtube.com/watch?v=dL1UMZjNlqU&t=0s"
            >
              Truth About Music by Infinite Waters
            </a>
          </div>

          <div className="Dub-card sleep-card doc-card">
            <img
              src={chibiZen}
              alt=""
              className="card-image sleep-img doc-img"
            />

            <a
              className="music-link"
              href="https://www.youtube.com/watch?v=rTJVWCUpJEI"
            >
              Why the standard 440hz frequency is bad
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// const Docs = () => {
//   return (
//     <div className="page page-background">
//       <br></br>
//       <br></br>
//       <h1 className="section-title">Docs</h1>

//       <div className="page-pannel anime-opening-pannel">
//         <h3 className="doc-head">Blog </h3>
//         <a
//           className="doc-blog-link"
//           href="http://docs.google.com/document/d/e/2PACX-1vTmckZjqYvdn8IUF2od7FjUaA4ztVfKMeKCIa1yp-ylUgKuTutZbe2VlgPkyGeN5jDYfcgBSc9Z0v67/pub"
//         >
//           How to convert your music from 440hz to 432hz
//         </a>

//         <h3 className="doc-head">Videos</h3>

//         <div className="page-pannel anime-opening-pannel sleep-pannel">

//           <div className="Dub-card sleep-card doc-card">
//             <img
//               src={chibiLuffy}
//               alt=""
//               className="card-image sleep-img doc-img"
//             />

//             <a
//               className="music-link"
//               href="https://www.youtube.com/watch?v=dL1UMZjNlqU&t=0s"
//             >
//               Truth About Music by Infinite Waters
//             </a>
//           </div>

// <div className="Dub-card sleep-card doc-card">
//   <img
//     src={chibiZen}
//     alt=""
//     className="card-image sleep-img doc-img"
//   />

//   <a
//     className="music-link"
//     href="https://www.youtube.com/watch?v=rTJVWCUpJEI"
//   >
//     Why the standard 440hz frequency is bad
//   </a>
// </div>
//         </div>
//     </div>
//   );
// };

export default Docs;
