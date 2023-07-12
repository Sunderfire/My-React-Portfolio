import React from "react";
import recentPhoto from "../../images/recent-picture.jpg";
import "./aboutMe.css";

function AboutMe() {
  return (
    <div class="aboutMe">
      <h2>About Me</h2>
      <img src={recentPhoto} alt="Picture of Griffin" />
      <p>
        My name is Griffin Pelletier. I'm an up and coming full stack web
        developer with an intermediate knowledge or JavascScript. I'm also
        versed in SQL, Mongoose, Express, React, Node and Graphsql. I've spent
        many years working in various fields and am looking to make a home in
        IT. I'm exited too continue to explore the world of coding, please feel
        free to take a look at some of my work.
      </p>
    </div>
  );
}

export default AboutMe;
