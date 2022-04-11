import React from "react";

import HeartIcon from "../img/heart.svg";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <p>
        Made with &nbsp;
        <img src={HeartIcon} alt="love icon" />
        &nbsp; by &nbsp;
        <a
          href="https://https://github.com/deepblue633/"
          target="_blank"
          rel="noreferrer"
        >
          Abdulrahman Emad
        </a>
      </p>
    </footer>
  );
}

export default Footer;
