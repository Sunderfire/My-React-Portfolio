import React from "react";

function Header({ handlePageChange }) {
  return (
    <div>
      <header>
        <h1>Griffin Pelletier's Portfolio</h1>
        <nav>
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
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
