import React from "react";
import "./styles.css";
// import { Link } from 'react-router-dom';

function About() {
  return (
  <div>
  <main className="aboutpage">
    <div>
      {/* <Header /> */}
      
        <h2 className="margins highlighted">BackLog</h2>
        <p className="margins">
          Hometown: Alma, Michigan.<br></br>
          Full Stack Web Dev (JavaScript) Certificate - 2021. <br></br>
          Central Michigan University Alumnus<br></br>
          B.A.A: Integrative Public Relations Minor: Public Affairs - 2017.
          <br></br>
          Senior Graphic Designer @ Three Rivers Media - August 2017. <br></br>
          Freelance Graphic Designer - 2016.<br></br>
          {/* Photography - hobby.<br></br>             */}
        </p>
        <hr className="skillLine"></hr>
        <h2 className="margins highlighted">Skills</h2>
        <h3 className="listHead">Graphic Design</h3>
        <ul className="listItem">
          <li>Indesign</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>Photography</li>
          <li>Social Media</li>
          <li>Typography</li>
        </ul>
        <h3 className="listHead">WebDev</h3>
        <ul className="listItem">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>Git/GitHub</li>
          {/* <li>Trello</li> */}
          <li>Figma</li>
        </ul>
        <h3 className="listHead">General</h3>
        <ul className="listItem">
          <li>Project Management</li>
          <li>Positive Mental Attitude</li>
          <li>Adaptability</li>
          <li>Teamwork</li>
          <li>Attention to Detail</li>
          <li>Organized</li>
        </ul>
      </div>
      </main>
  </div>
  );
}
export default About;