import React from "react";
import AboutMe from "../AboutMe";
import BodyContent from "../BodyContent";
import Portfolio from "../Portfolio";
import ContactMe from "../ContactMe";

function Body({ currentPage }) {
  const renderPage = () => {
    switch (currentPage) {
      case "aboutMe":
        return <AboutMe />;
      case "portfolio":
        return <Portfolio />;
      case "contactMe":
        return <ContactMe />;
    }
  };
  return (
    <div>
      <BodyContent>{renderPage()}</BodyContent>
    </div>
  );
}

export default Body;
