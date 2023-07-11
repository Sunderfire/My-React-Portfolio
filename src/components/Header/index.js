import React from "react";
import "./header.css";

function Header({ handlePageChange }) {
  return (
    <div>
      <header class="header">
        <h1>Griffin Pelletier's Portfolio</h1>
        <nav class="nav">
          <ul>
            <button
              type="button"
              class="btn"
              onClick={() => handlePageChange("aboutMe")}
            >
              About Me
            </button>
            <button
              type="button"
              class="btn"
              onClick={() => handlePageChange("portfolio")}
            >
              Portfolio
            </button>
            <button
              type="button"
              class="btn"
              onClick={() => handlePageChange("contactMe")}
            >
              Contact Me
            </button>
            <button
              type="button"
              class="btn"
              onClick={() => handlePageChange("resume")}
            >
              Resume
            </button>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
