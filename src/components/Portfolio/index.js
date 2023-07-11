import React from "react";
import "./portfolio.css";
import animeAppScreenshot from "../../images/Anime-App-Screenshot.png";
import bookAppScreenshot from "../../images/Book-App-Screenshot.png";
import codingQuizScreenshot from "../../images/Coding-Quiz-Screenshot.png";
import workDaySchedulerScreenshot from "../../images/Work-Day-Scheduler-Screenshot.png";
import weatherDashboardScreenshot from "../../images/Weather-Dashboard-Screenshot.png";
import noteTakerAppScreenshot from "../../images/Note-Taker-Screenshot.png";

function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>
      <div class="container">
        <ul class="row">
          <li class="col-4">
            <h3>Anime Directory App</h3>
            <a
              href="https://rudrijoshi.github.io/Anime-App-Group-Project-1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={animeAppScreenshot} alt="Anime Group Project" />
            </a>
            <a
              href="https://github.com/rudrijoshi/Anime-App-Group-Project-1.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Anime Group Project Github
            </a>
          </li>
          <li class="col-4">
            <h3>Book Directory App</h3>
            <a
              href="https://stormy-atoll-29529-b51ffbbd6de0.herokuapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={bookAppScreenshot} alt="Book Database Group Project" />
            </a>
            <a
              href="https://github.com/JohnDavidSmith/Book-Database.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book Directory Github
            </a>
          </li>
          <li class="col-4">
            <h3>Coding Quiz</h3>
            <a
              href="https://sunderfire.github.io/my-coding-quiz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={codingQuizScreenshot} alt="Coding Quiz" />
            </a>
            <a
              href="https://github.com/Sunderfire/my-coding-quiz.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Coding Quiz Github
            </a>
          </li>
          <li class="col">
            <h3>Work Day Schheduler</h3>
            <a
              href="https://sunderfire.github.io/work-day-planner-app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={workDaySchedulerScreenshot} alt="Work Day Scheduler" />
            </a>
            <a
              href="https://github.com/Sunderfire/work-day-planner-app.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Work Day Scheduler Github
            </a>
          </li>
          <li class="col">
            <h3>Weather Dashboard App</h3>
            <a
              href="https://sunderfire.github.io/my-weather-dashboard/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={weatherDashboardScreenshot} alt="Weather Dashboard" />
            </a>
            <a
              href="https://github.com/Sunderfire/my-weather-dashboard.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Weather Dashboard Github
            </a>
          </li>
          <li class="col">
            <h3>Note Taker App</h3>
            <a
              href="https://warm-badlands-78419.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={noteTakerAppScreenshot} alt="Note Taker App" />
            </a>
            <a
              href="https://github.com/Sunderfire/note-taker-app.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              Note Taker Github
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Portfolio;
