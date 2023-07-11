import React from "react";
import "./body.css";
import AboutMe from "../AboutMe";
import BodyContent from "../BodyContent";
import Portfolio from "../Portfolio";
import ContactMe from "../ContactMe";
import Resume from "../Resume";

function Body({ currentPage }) {
  const renderPage = () => {
    switch (currentPage) {
      case "aboutMe":
        return <AboutMe />;
      case "portfolio":
        return <Portfolio />;
      case "contactMe":
        return <ContactMe />;
      case "resume":
        return <Resume />;
    }
  };
  return (
    <div class="body">
      <BodyContent>{renderPage()}</BodyContent>
    </div>
  );
}

export default Body;
