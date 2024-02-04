import React from "react";

import { Link } from "react-router-dom";
import tengen from "../background-images/tengen.png";
import profilepic from "../background-images/dev-profile-pic.png";

const IntroPage = () => {
  return (
    <div className="intro-page">
      <div className="hero">
        <div className="hero-col1"></div>
        <div className="hero-col2">
          <div className="hero-headings">
            <h1 className="app-title">Keys of Anime</h1>
            <h3 className="app-title-mobile">
              music <span className="golden-highlight">web player</span> app
              <h6 className="developed">By Suthashan Tharmarajah </h6>
            </h3>
          </div>
          <div className="character-icon">
            <img src={tengen} alt="not found" className="chibi-zen" />
          </div>
          <article className="app-desc">
            <p className="p1">
              In the heart of every anime enthusiast beats a rhythm that
              resonates with their beloved genre.{" "}
              <span className="pink-text-highlight">"Keys of Anime"</span> is
              more than just a music player; it's a tribute to this rhythm, a
              creation born from a blend of cutting-edge web technologies such
              as <span className="blue-text-highlight">React</span>{" "}
              <span className="golden-text-highlight">JS</span>
            </p>
            <p className="p2">
              This web player effortlessly bridges the vibrant world of original
              anime tracks with their spellbinding piano interpretations. A
              simple <span className="green-text-highlight">click</span>{" "}
              transports you between these two captivating musical dimensions.
            </p>
            <p className="p3">
              Whether you're reliving your favorite anime moments or discovering
              new tunes, Keys of Anime ensures a flawless and emotionally
              resonant listening experience.
            </p>
          </article>

          {/* CTA - link to player */}
          <Link className="cta-btn" to="/player">
            <button className="intro-button">Listen Now</button>
          </Link>
        </div>
      </div>
      <div className="developer-section">
        {/* Developer info secion */}
        <article className="mobile-app-desc">
          <p className="p1">
            In the heart of every anime enthusiast beats a rhythm that resonates
            with their beloved genre.{" "}
            <span className="pink-text-highlight">"Keys of Anime"</span> is more
            than just a music player!
          </p>
          <p className="p2">
            This <span className="blue-text-highlight">React</span>{" "}
            <span className="golden-text-highlight">Js</span> built web player
            effortlessly bridges the vibrant world of original anime tracks with
            their spellbinding piano interpretations.
          </p>
          <p className="p3">
            A simple click will transport you between these two captivating
            musical dimensions.
          </p>
        </article>
        <h2 className="developer-section-title">Developer info</h2>
        <svg
          className="developer-icon"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="M13.5 6L10 18.5m-3.5-10L3 12l3.5 3.5m11-7L21 12l-3.5 3.5"
          />
        </svg>
        <div className="flex-container">
          <div className="dev-stats">
            <img
              src={profilepic}
              alt="Pic not loaded"
              className="profile-pic"
            />
            <Link className="visit-btn-link" to="/">
              <button className="visit-btn">Visit Portfolio</button>
            </Link>
          </div>
          <div className="dev-icons">
            <div className="github-div icon-div">
              <svg
                className="github-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="69"
                height="69"
                viewBox="0 0 77 77"
                fill="none"
              >
                <path
                  d="M38.5 6.41669C34.2868 6.41669 30.1148 7.24655 26.2222 8.85889C22.3297 10.4712 18.7929 12.8345 15.8137 15.8137C9.79686 21.8305 6.41666 29.991 6.41666 38.5C6.41666 52.6809 15.6246 64.7121 28.3617 68.9792C29.9658 69.2359 30.4792 68.2413 30.4792 67.375V61.9529C21.5921 63.8779 19.6992 57.6538 19.6992 57.6538C18.2233 53.9321 16.1379 52.9375 16.1379 52.9375C13.2183 50.9484 16.3625 51.0125 16.3625 51.0125C19.5708 51.2371 21.2712 54.3171 21.2712 54.3171C24.0625 59.1938 28.7787 57.75 30.6075 56.98C30.8962 54.8946 31.7304 53.4829 32.6287 52.6809C25.5062 51.8788 18.0308 49.1196 18.0308 36.8959C18.0308 33.3346 19.25 30.4792 21.3354 28.2013C21.0146 27.3992 19.8917 24.0625 21.6562 19.7313C21.6562 19.7313 24.3512 18.865 30.4792 23.0038C33.0137 22.2979 35.7729 21.945 38.5 21.945C41.2271 21.945 43.9862 22.2979 46.5208 23.0038C52.6487 18.865 55.3437 19.7313 55.3437 19.7313C57.1083 24.0625 55.9854 27.3992 55.6646 28.2013C57.75 30.4792 58.9692 33.3346 58.9692 36.8959C58.9692 49.1517 51.4617 51.8467 44.3071 52.6488C45.4621 53.6434 46.5208 55.6004 46.5208 58.5842V67.375C46.5208 68.2413 47.0342 69.2679 48.6704 68.9792C61.4075 64.68 70.5833 52.6809 70.5833 38.5C70.5833 34.2868 69.7535 30.1148 68.1411 26.2223C66.5288 22.3297 64.1656 18.7929 61.1863 15.8137C58.2071 12.8345 54.6703 10.4712 50.7778 8.85889C46.8852 7.24655 42.7132 6.41669 38.5 6.41669Z"
                  fill="#424242"
                />
              </svg>

              <h5 className="github-username">suthashan-001</h5>
            </div>
            <div className="insta-div icon-div">
              <svg
                className="insta-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
              >
                <g clip-path="url(#clip0_29_96)">
                  <path
                    d="M42.1094 0H12.8906C5.77133 0 0 5.77133 0 12.8906V42.1094C0 49.2287 5.77133 55 12.8906 55H42.1094C49.2287 55 55 49.2287 55 42.1094V12.8906C55 5.77133 49.2287 0 42.1094 0Z"
                    fill="url(#paint0_radial_29_96)"
                  />
                  <path
                    d="M42.1094 0H12.8906C5.77133 0 0 5.77133 0 12.8906V42.1094C0 49.2287 5.77133 55 12.8906 55H42.1094C49.2287 55 55 49.2287 55 42.1094V12.8906C55 5.77133 49.2287 0 42.1094 0Z"
                    fill="url(#paint1_radial_29_96)"
                  />
                  <path
                    d="M27.5019 6.01562C21.6672 6.01562 20.9348 6.04119 18.6433 6.14539C16.3561 6.25023 14.7948 6.61225 13.4288 7.14355C12.0156 7.69227 10.817 8.42639 9.62285 9.62092C8.42768 10.8152 7.69355 12.0138 7.14313 13.4264C6.61031 14.7929 6.24787 16.3548 6.14496 18.6409C6.04248 20.9327 6.01562 21.6653 6.01562 27.5002C6.01562 33.3352 6.04141 34.0652 6.14539 36.3567C6.25066 38.6439 6.61268 40.2052 7.14355 41.5712C7.6927 42.9844 8.42682 44.183 9.62135 45.3771C10.8152 46.5723 12.0138 47.3082 13.426 47.8569C14.7931 48.3882 16.3546 48.7502 18.6413 48.855C20.9331 48.9592 21.6648 48.9848 27.4994 48.9848C33.3347 48.9848 34.0648 48.9592 36.3563 48.855C38.6435 48.7502 40.2065 48.3882 41.5736 47.8569C42.9862 47.3082 44.183 46.5723 45.3767 45.3771C46.5719 44.183 47.3058 42.9844 47.8564 41.5718C48.3845 40.2052 48.7472 38.6435 48.8546 36.3571C48.9575 34.0656 48.9844 33.3352 48.9844 27.5002C48.9844 21.6653 48.9575 20.9331 48.8546 18.6413C48.7472 16.3541 48.3845 14.7931 47.8564 13.4271C47.3058 12.0138 46.5719 10.8152 45.3767 9.62092C44.1818 8.42596 42.9866 7.69184 41.5723 7.14377C40.2026 6.61225 38.6405 6.25002 36.3533 6.14539C34.0615 6.04119 33.3319 6.01562 27.4953 6.01562H27.5019ZM25.5746 9.88732C26.1467 9.88646 26.785 9.88732 27.5019 9.88732C33.2385 9.88732 33.9182 9.90795 36.1836 10.0109C38.2783 10.1067 39.4152 10.4567 40.1726 10.7508C41.1752 11.1401 41.89 11.6056 42.6415 12.3578C43.3935 13.1098 43.8588 13.8258 44.2492 14.8285C44.5433 15.5848 44.8938 16.7217 44.9891 18.8164C45.0921 21.0813 45.1144 21.7615 45.1144 27.4953C45.1144 33.229 45.0921 33.9094 44.9891 36.1741C44.8933 38.2688 44.5433 39.4058 44.2492 40.1622C43.8599 41.1649 43.3935 41.8788 42.6415 42.6304C41.8896 43.3823 41.1757 43.8477 40.1726 44.2372C39.4161 44.5326 38.2783 44.8817 36.1836 44.9775C33.9187 45.0804 33.2385 45.1028 27.5019 45.1028C21.7652 45.1028 21.0852 45.0804 18.8205 44.9775C16.7258 44.8809 15.5888 44.5309 14.8309 44.2368C13.8284 43.8472 13.1121 43.3819 12.3602 42.6299C11.6082 41.878 11.1429 41.1636 10.7525 40.1605C10.4584 39.4041 10.108 38.2671 10.0126 36.1724C9.90967 33.9075 9.88904 33.2273 9.88904 27.4899C9.88904 21.7527 9.90967 21.076 10.0126 18.8111C10.1084 16.7163 10.4584 15.5794 10.7525 14.8221C11.142 13.8194 11.6082 13.1033 12.3604 12.3514C13.1123 11.5994 13.8284 11.1338 14.8311 10.7437C15.5884 10.4483 16.7258 10.0992 18.8205 10.0029C20.8025 9.91332 21.5705 9.88646 25.5746 9.88195V9.88732ZM38.9703 13.4546C37.547 13.4546 36.3922 14.6083 36.3922 16.0319C36.3922 17.4552 37.547 18.61 38.9703 18.61C40.3936 18.61 41.5484 17.4552 41.5484 16.0319C41.5484 14.6085 40.3936 13.4537 38.9703 13.4537V13.4546ZM27.5019 16.4669C21.409 16.4669 16.4688 21.407 16.4688 27.5002C16.4688 33.5934 21.409 38.5312 27.5019 38.5312C33.5951 38.5312 38.5335 33.5934 38.5335 27.5002C38.5335 21.4072 33.5947 16.4669 27.5015 16.4669H27.5019ZM27.5019 20.3386C31.457 20.3386 34.6635 23.5447 34.6635 27.5002C34.6635 31.4553 31.457 34.6618 27.5019 34.6618C23.5467 34.6618 20.3405 31.4553 20.3405 27.5002C20.3405 23.5447 23.5467 20.3386 27.5019 20.3386Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <radialGradient
                    id="paint0_radial_29_96"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(14.6094 59.2361) rotate(-90) scale(54.5091 50.6978)"
                  >
                    <stop stop-color="#FFDD55" />
                    <stop offset="0.1" stop-color="#FFDD55" />
                    <stop offset="0.5" stop-color="#FF543E" />
                    <stop offset="1" stop-color="#C837AB" />
                  </radialGradient>
                  <radialGradient
                    id="paint1_radial_29_96"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(-9.21271 3.96193) rotate(78.681) scale(24.3659 100.437)"
                  >
                    <stop stop-color="#3771C8" />
                    <stop offset="0.128" stop-color="#3771C8" />
                    <stop offset="1" stop-color="#6600FF" stop-opacity="0" />
                  </radialGradient>
                  <clipPath id="clip0_29_96">
                    <rect width="55" height="55" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <h5 className="insta-username">@suthashan_</h5>
            </div>
            <div className="glitch-div icon-div">
              <svg
                className="glitch-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="55"
                height="55"
                viewBox="0 0 66 66"
                fill="none"
              >
                <path
                  d="M64.1667 31.1667C64.1667 48.3798 39.9245 66 33 66C26.0737 66 1.83337 48.3798 1.83337 31.1667C1.83337 13.9535 15.7869 0 33 0C50.2132 0 64.1667 13.9535 64.1667 31.1667Z"
                  fill="#CCD6DD"
                />
                <path
                  d="M24.7554 27.2159C30.4828 32.9432 32.8038 39.908 29.9401 42.7717C27.0764 45.6354 20.1116 43.3162 14.3843 37.587C8.65511 31.8597 6.33411 24.8949 9.19961 22.0312C12.0651 19.1675 19.0281 21.4885 24.7554 27.2159ZM41.2444 27.2159C35.5171 32.9432 33.1961 39.908 36.0598 42.7717C38.9234 45.6354 45.8883 43.3162 51.6156 37.587C57.3448 31.8579 59.6658 24.8949 56.8003 22.0312C53.9366 19.1675 46.9718 21.4867 41.2444 27.2159ZM32.9999 56.8334C28.6971 56.8334 26.4458 54.7067 26.2038 54.4629C25.8576 54.1215 25.6612 53.6567 25.6577 53.1705C25.6543 52.6843 25.8441 52.2167 26.1854 51.8705C26.5268 51.5243 26.9917 51.3279 27.4778 51.3245C27.964 51.321 28.4316 51.5109 28.7778 51.8522C28.8713 51.9384 30.2554 53.1667 32.9999 53.1667C35.7848 53.1667 37.1671 51.9035 37.2258 51.8485C37.5776 51.5183 38.0448 51.3389 38.5273 51.3488C39.0098 51.3588 39.4692 51.5572 39.8071 51.9017C40.1424 52.2439 40.3293 52.7045 40.3273 53.1836C40.3252 53.6627 40.1344 54.1217 39.7961 54.461C39.5541 54.7067 37.3028 56.8334 32.9999 56.8334Z"
                  fill="#292F33"
                />
              </svg>
              <h5 className="glitch-num">#6429</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
