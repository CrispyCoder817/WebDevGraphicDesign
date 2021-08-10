import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import "./styles.css";
import Navigation from "../../Components/Navigation";
// import { Link } from 'react-router-dom';

function About() {
  return (
<div>
  <main className="aboutpage">
    <div>
          <Navigation />
          <h2 className="highlighted">About</h2>
          <p className="pstyle">
            Full Stack Web Dev (JavaScript) Certificate - 2021. <br></br>
            Central Michigan University Alumnus - 2017<br></br>
            B.A.A: Integrative Public Relations<br></br>
            Senior Graphic Designer - August 2017. <br></br>
            Freelancer - 2016.<br></br>
          </p>
          <hr className="skillLine"></hr>

          <h2 className="highlighted">Skills</h2>

          <Container>
            <Row className="rows SkillContainer">
              <Col className="columns">
              <h3 className="listHead">Graphic Design</h3>
              <ul className="listItems">
                <li className="slitems">Indesign</li>
                <li className="slitems">Photoshop</li>
                <li className="slitems">Illustrator</li>
                <li className="slitems">Photography</li>
                <li className="slitems">Social Media</li>
                <li className="slitems">Typography</li>
              </ul>
              </Col>
            </Row>
          </Container>

        <Container>
          <Row className="SkillContainer rows">
            <Col className="columns">
            <h3 className="listHead">WebDev</h3>
            <ul className="listItem">
              <li className="slitems">HTML</li>
              <li className="slitems">CSS</li>
              <li className="slitems">JavaScript</li>
              <li className="slitems">ReactJS</li>
              <li className="slitems">Git/GitHub</li>
              <li className="slitems">Figma</li>
            </ul>
            </Col>
          </Row>
        </Container>
            
        <Container>
          <Row className="SkillContainer rows">
            <Col className="columns">
            <h3 className="listHead">General</h3>
            <ul className="listItem">
              <li className="slitems">Project Management</li>
              <li className="slitems">Positive Mental Attitude</li>
              <li className="slitems">Adaptability</li>
              <li className="slitems">Teamwork</li>
              <li className="slitems">Attention to Detail</li>
              <li className="slitems">Organized</li>
            </ul>
            </Col>
          </Row>
        </Container>
    </div>
  </main>
</div>
  );
}
export default About;
