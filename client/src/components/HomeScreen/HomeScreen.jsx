import React from "react";

import clsx from "clsx";
import css from "../HomeScreen/HomeScreen.module.css";

const HomeScreen = ({ children }) => {
  return (
    <div className={clsx(css.homeScreenBox)}>
      <svg
        className={clsx(css.homeScreenBox__pinkellipse)}
        width="368"
        height="383"
        viewBox="0 0 368 383"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M552.107 266.556C464.047 389.872 304.59 405.532 169.898 358.273C15.3836 296.022 -34.5853 121.79 24.0597 -23.7743C78.4665 -158.819 240.298 -106.092 378.52 -109.726C634.294 -114.397 718.967 49.4746 552.107 266.556Z"
          fill="#FFD8D0"
        />
      </svg>

      <svg
        className={clsx(css.homeScreenBox__purpellipse)}
        width="496"
        height="323"
        viewBox="0 0 496 323"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M426.671 362.925C349.878 493.555 192.436 523.277 54.0872 488.134C-105.334 439.813 -170.538 270.69 -125.016 120.504C-82.7835 -18.8283 83.0818 19.3577 220.438 3.49611C474.794 -23.8102 573.649 131.918 426.671 362.925Z"
          fill="#C5BAFF"
        />
      </svg>
      <div className={clsx(css.formBackground)}></div>
      {children}
    </div>
  );
};

export default HomeScreen;
