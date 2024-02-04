import React from "react";
import { Link } from "react-router-dom";

// image imports
import codesnip from "../images/codesnip_1.png";
import app_img from "../images/musicPlayer-img.png";

const Portfolio = () => {
  return (
    <section className="portfolio">
      {/* Hero section */}

      <div className="portfolio-hero">
        <div className="hero-flex">
          <div className="hero-picture"></div>

          <div className="right-column-hero">
            <nav className="nav-bar">
              <div className="name-div">
                <h2 className="logo-text">
                  SU<span className="underscore">-</span>N
                </h2>
                <h5 className="text-name">Suthashan Tharmarajah</h5>
              </div>

              <svg
                className="logo-img"
                onclick="show()"
                xmlns="http://www.w3.org/2000/svg"
                width="256"
                height="256"
                viewBox="0 0 256 256"
              >
                <path
                  fill="currentColor"
                  d="M120 40V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0m72 88a64 64 0 1 1-64-64a64.07 64.07 0 0 1 64 64m-16 0a48 48 0 1 0-48 48a48.05 48.05 0 0 0 48-48M58.34 69.66a8 8 0 0 0 11.32-11.32l-16-16a8 8 0 0 0-11.32 11.32Zm0 116.68l-16 16a8 8 0 0 0 11.32 11.32l16-16a8 8 0 0 0-11.32-11.32M192 72a8 8 0 0 0 5.66-2.34l16-16a8 8 0 0 0-11.32-11.32l-16 16A8 8 0 0 0 192 72m5.66 114.34a8 8 0 0 0-11.32 11.32l16 16a8 8 0 0 0 11.32-11.32ZM48 128a8 8 0 0 0-8-8H16a8 8 0 0 0 0 16h24a8 8 0 0 0 8-8m80 80a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0v-24a8 8 0 0 0-8-8m112-88h-24a8 8 0 0 0 0 16h24a8 8 0 0 0 0-16"
                />
              </svg>
            </nav>

            {/* For desktop only (skill-tree & menu) */}
            <div className="skill-tree">
              <h4 className="skill">Web.3 developer</h4>
              <h4 className="skill">Ux Engineer</h4>
              <h4 className="skill">Sage mode</h4>
            </div>

            <div class="design-div"></div>

            <div className="menu">
              <h5 className="link menu-link Project">Courageous</h5>
              <h5 className="link menu-link Aboutme">indefatigable</h5>
              <h5 className="link menu-link Contacts">Perspicacious</h5>
            </div>
          </div>
        </div>

        <div className="skill-tree-mobile">
          <h4 className="skill">Web.3 developer</h4>
          <h4 className="skill">Ux Engineer</h4>
          <h4 className="skill">Sage mode</h4>
        </div>
      </div>

      {/* music player showcase */}
      <section className="project-showcase-1">
        <div className="project-container">
          <section className="project-img">
            <img
              className="proj-pic-1"
              src={app_img}
              alt="Music player homescreen"
            />
          </section>
          <article className="proj-desc-container">
            <h3 className="project-subline">Personal Project (for fun)</h3>
            <h2 className="project-headline">Music player web app</h2>

            <section className="project-img-mobile">
              <img
                className="proj-pic-1"
                src={app_img}
                alt="Music player homescreen"
              />
            </section>
            <article className="proj-desc">
              <p>
                This was my first entry-level project to get myself into the
                world of development. Going beyond the traditional university
                projects to experience the process of building a robust
                application from scratch to production.{" "}
              </p>
              <p>
                I made a lot of mistakes while creating this app which allowed
                me to learn things quickly. Countless re-do’s, redesigns, google
                searches, and bug-fixing, but a whole lot of fun. Slowly but
                surely refining my skills with each iteration.{" "}
              </p>
              <p>
                This project outside the university curriculum gave me an
                insight of the various different roles of app development and
                how the “ingredients” merged together and cross-pollinated to
                build these amazing applications we now see today. Focusing on a
                large scale project helped me develop character traits of
                discipline to stay focused on one big project without quitting
                when faced with obstacles and difficulties.
              </p>
            </article>

            <div className="icons">
              <svg
                className="react-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="128"
                viewBox="0 0 128 128"
              >
                <g fill="#61DAFB">
                  <circle cx="64" cy="64" r="11.4" />
                  <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3c.6-2.4 1.1-4.8 1.5-7.1c2.1-13.2-.2-22.5-6.6-26.1c-1.9-1.1-4-1.6-6.4-1.6c-7 0-15.9 5.2-24.9 13.9c-9-8.7-17.9-13.9-24.9-13.9c-2.4 0-4.5.5-6.4 1.6c-6.4 3.7-8.7 13-6.6 26.1c.4 2.3.9 4.7 1.5 7.1c-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3c-.6 2.4-1.1 4.8-1.5 7.1c-2.1 13.2.2 22.5 6.6 26.1c1.9 1.1 4 1.6 6.4 1.6c7.1 0 16-5.2 24.9-13.9c9 8.7 17.9 13.9 24.9 13.9c2.4 0 4.5-.5 6.4-1.6c6.4-3.7 8.7-13 6.6-26.1c-.4-2.3-.9-4.7-1.5-7.1c2.4-.7 4.7-1.4 6.9-2.3c12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8M92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3c-.3 2.1-.8 4.3-1.4 6.6c-5.2-1.2-10.7-2-16.5-2.5c-3.4-4.8-6.9-9.1-10.4-13c7.4-7.3 14.9-12.3 21-12.3c1.3 0 2.5.3 3.5.9M81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6c-3.7.3-7.4.4-11.2.4c-3.9 0-7.6-.1-11.2-.4c-2.2-3.2-4.2-6.4-6-9.6c-1.9-3.3-3.7-6.7-5.3-10c1.6-3.3 3.4-6.7 5.3-10c1.8-3.2 3.9-6.4 6.1-9.6c3.7-.3 7.4-.4 11.2-.4c3.9 0 7.6.1 11.2.4c2.2 3.2 4.2 6.4 6 9.6c1.9 3.3 3.7 6.7 5.3 10c-1.7 3.3-3.4 6.6-5.3 10m8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3c-3.4.8-7 1.4-10.8 1.9c1.2-1.9 2.5-3.9 3.6-6c1.2-2.1 2.3-4.2 3.4-6.2M64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3c2.3.1 4.6.2 6.9.2c2.3 0 4.6-.1 6.9-.2c-2.2 2.9-4.5 5.7-6.9 8.3m-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9c1.1-3.3 2.3-6.8 3.8-10.3c1.1 2 2.2 4.1 3.4 6.1c1.2 2.2 2.4 4.1 3.6 6.1m-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3c3.4-.8 7-1.4 10.8-1.9c-1.2 1.9-2.5 3.9-3.6 6c-1.2 2.1-2.3 4.2-3.4 6.2M64 30.2c2.4 2.6 4.7 5.4 6.9 8.3c-2.3-.1-4.6-.2-6.9-.2c-2.3 0-4.6.1-6.9.2c2.2-2.9 4.5-5.7 6.9-8.3m22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9c-1.1 3.3-2.3 6.8-3.8 10.3c-1.1-2.1-2.2-4.2-3.4-6.2M31.7 35c-1.7-10.5-.3-17.9 3.8-20.3c1-.6 2.2-.9 3.5-.9c6 0 13.5 4.9 21 12.3c-3.5 3.8-7 8.2-10.4 13c-5.8.5-11.3 1.4-16.5 2.5c-.6-2.3-1-4.5-1.4-6.6M7 64c0-4.7 5.7-9.7 15.7-13.4c2-.8 4.2-1.5 6.4-2.1c1.6 5 3.6 10.3 6 15.6c-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64m28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3c.3-2.1.8-4.3 1.4-6.6c5.2 1.2 10.7 2 16.5 2.5c3.4 4.8 6.9 9.1 10.4 13c-7.4 7.3-14.9 12.3-21 12.3c-1.3 0-2.5-.3-3.5-.9M96.3 93c1.7 10.5.3 17.9-3.8 20.3c-1 .6-2.2.9-3.5.9c-6 0-13.5-4.9-21-12.3c3.5-3.8 7-8.2 10.4-13c5.8-.5 11.3-1.4 16.5-2.5c.6 2.3 1 4.5 1.4 6.6m9-15.6c-2 .8-4.2 1.5-6.4 2.1c-1.6-5-3.6-10.3-6-15.6c2.4-5.3 4.5-10.5 6-15.5c13.8 4 22.1 10 22.1 15.6c0 4.7-5.8 9.7-15.7 13.4" />
                </g>
              </svg>
              <svg
                className="js-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="256"
                height="256"
                viewBox="0 0 256 256"
              >
                <path fill="#F7DF1E" d="M0 0h256v256H0z" />
                <path d="m67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371c7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259c-19.245 0-30.416-9.967-36.087-21.996m85.07-2.576l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607c9.969 0 16.325-4.984 16.325-11.858c0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257c0-18.044 13.747-31.792 35.228-31.792c15.294 0 26.292 5.328 34.196 19.247l-18.732 12.03c-4.125-7.389-8.591-10.31-15.465-10.31c-7.046 0-11.514 4.468-11.514 10.31c0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804c0 21.654-17.012 33.51-39.867 33.51c-22.339 0-36.774-10.654-43.819-24.574" />
              </svg>
              <svg
                className="html-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="256"
                height="361"
                viewBox="0 0 256 361"
              >
                <path
                  fill="#E44D26"
                  d="m255.555 70.766l-23.241 260.36l-104.47 28.962l-104.182-28.922L.445 70.766z"
                />
                <path
                  fill="#F16529"
                  d="m128 337.95l84.417-23.403l19.86-222.49H128z"
                />
                <path
                  fill="#EBEBEB"
                  d="M82.82 155.932H128v-31.937H47.917l.764 8.568l7.85 88.01H128v-31.937H85.739zm7.198 80.61h-32.06l4.474 50.146l65.421 18.16l.147-.04V271.58l-.14.037l-35.568-9.604z"
                />
                <path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0zm68.65 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88zm62.74 0h16.235v32.508h22.824v16.05h-39.06z" />
                <path
                  fill="#FFF"
                  d="M127.89 220.573h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08l.779-8.576H127.89zm0-64.719v.078h77.143l.64-7.178l1.456-16.191l.763-8.568H127.89z"
                />
              </svg>

              <svg
                className="css-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="256"
                height="361"
                viewBox="0 0 256 361"
              >
                <path
                  fill="#264DE4"
                  d="M127.844 360.088L23.662 331.166L.445 70.766h255.11l-23.241 260.36z"
                />
                <path
                  fill="#2965F1"
                  d="m212.417 314.547l19.86-222.49H128V337.95z"
                />
                <path
                  fill="#EBEBEB"
                  d="m53.669 188.636l2.862 31.937H128v-31.937zm-5.752-64.641l2.903 31.937H128v-31.937zM128 271.58l-.14.037l-35.568-9.604l-2.274-25.471h-32.06l4.474 50.146l65.421 18.16l.147-.04z"
                />
                <path d="M60.484 0h38.68v16.176H76.66v16.176h22.506v16.175H60.484zm46.417 0h38.681v14.066h-22.505v2.813h22.505v32.352h-38.68V34.46h22.505v-2.813H106.9zm46.418 0H192v14.066h-22.505v2.813H192v32.352h-38.681V34.46h22.505v-2.813H153.32z" />
                <path
                  fill="#FFF"
                  d="m202.127 188.636l5.765-64.641H127.89v31.937h45.002l-2.906 32.704H127.89v31.937h39.327l-3.708 41.42l-35.62 9.614v33.226l65.473-18.145l.48-5.396l7.506-84.08z"
                />
              </svg>
            </div>
          </article>
        </div>
      </section>

      {/* Code showcase */}
      <section className="code-showcase ">
        <div className="code-container">
          <div className="showcase-col-1">
            <h3>code showcase - under the hood</h3>
            <div className="mob-code-pic"></div>
            <img className="code-pic" src={codesnip} alt="" />
          </div>

          <div className="showcase-col-2">
            <article className="showcase-desc">
              <p>
                In the initial stages of developing the music web application, I
                opted for a seemingly efficient method by centralizing all
                application states in one component. However, this approach
                quickly showed its limitations. As the application's complexity
                increased, managing, testing, and debugging the interconnected
                states became a daunting task.{" "}
              </p>
              <p>
                The situation was typical: a single adjustment could
                inadvertently disrupt multiple components. This realization,
                after two weeks of intensive coding on the first prototype, was
                a crucial turning point.
              </p>
              <p>
                It was during this phase that I truly grasped the essence of
                software design and the critical need for a robust,
                well-considered structure. This is when I took the bold step of
                reconstructing the application from the ground up. This process
                was not just about building a music app; it was a journey of
                professional evolution while deepening my expertise in complex
                software design.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="code-showcase mob-app-container">
        <div className="mobile-app-pic-container">
          <div className="btn-container">
            <Link className="visit-btn-link" to="/player">
              <button className="visit-btn">Visit Project</button>
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-text">
          <div className="footer-div-logo">
            <svg
              className="email-logo"
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              viewBox="0 0 77 77"
              fill="none"
            >
              <path
                d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z"
                fill="black"
              />
            </svg>
          </div>
          <div>
            <h3 className="contacts-title">Contacts</h3>
            <h2 className="email">suthashan1234@gmail.com</h2>
          </div>
        </div>
        {/* <div className="footer-cont">
          <h3 className="contacts-title">Linkedln</h3>
          <h2 className="email"></h2>
        </div> */}

        <div className="footer-text">
          <div className="footer-div-logo">
            <svg
              className="github-logo"
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="55"
              viewBox="0 0 77 77"
              fill="none"
            >
              <path
                d="M38.5 6.41669C34.2868 6.41669 30.1148 7.24655 26.2222 8.85889C22.3297 10.4712 18.7929 12.8345 15.8137 15.8137C9.79686 21.8305 6.41666 29.991 6.41666 38.5C6.41666 52.6809 15.6246 64.7121 28.3617 68.9792C29.9658 69.2359 30.4792 68.2413 30.4792 67.375V61.9529C21.5921 63.8779 19.6992 57.6538 19.6992 57.6538C18.2233 53.9321 16.1379 52.9375 16.1379 52.9375C13.2183 50.9484 16.3625 51.0125 16.3625 51.0125C19.5708 51.2371 21.2712 54.3171 21.2712 54.3171C24.0625 59.1938 28.7787 57.75 30.6075 56.98C30.8962 54.8946 31.7304 53.4829 32.6287 52.6809C25.5062 51.8788 18.0308 49.1196 18.0308 36.8959C18.0308 33.3346 19.25 30.4792 21.3354 28.2013C21.0146 27.3992 19.8917 24.0625 21.6562 19.7313C21.6562 19.7313 24.3512 18.865 30.4792 23.0038C33.0137 22.2979 35.7729 21.945 38.5 21.945C41.2271 21.945 43.9862 22.2979 46.5208 23.0038C52.6487 18.865 55.3437 19.7313 55.3437 19.7313C57.1083 24.0625 55.9854 27.3992 55.6646 28.2013C57.75 30.4792 58.9692 33.3346 58.9692 36.8959C58.9692 49.1517 51.4617 51.8467 44.3071 52.6488C45.4621 53.6434 46.5208 55.6004 46.5208 58.5842V67.375C46.5208 68.2413 47.0342 69.2679 48.6704 68.9792C61.4075 64.68 70.5833 52.6809 70.5833 38.5C70.5833 34.2868 69.7535 30.1148 68.1411 26.2223C66.5288 22.3297 64.1656 18.7929 61.1863 15.8137C58.2071 12.8345 54.6703 10.4712 50.7778 8.85889C46.8852 7.24655 42.7132 6.41669 38.5 6.41669Z"
                fill="#424242"
              />
            </svg>
          </div>
          <div className="footer-cont">
            <h3 className="contacts-title">Github</h3>
            <h2 className="email">suthashan-001</h2>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Portfolio;
