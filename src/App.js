import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("homepage");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <Header handlePageChange={handlePageChange} />
      <Body currentPage={currentPage}></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
