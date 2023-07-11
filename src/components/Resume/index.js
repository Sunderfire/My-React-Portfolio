import React from "react";
import resume from "../../Resume/GPresume.docx";

function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <p>Download my resume below:</p>
      <a href={resume} download>
        Download Resume
      </a>
    </div>
  );
}

export default Resume;
