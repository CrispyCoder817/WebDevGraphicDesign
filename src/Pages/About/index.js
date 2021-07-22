import React from 'react';
import Header from '../../Components/Header';
// import { Link } from 'react-router-dom';

function About() {
    return (
        <div>
            <Header/>
            <h1>About</h1>
            <p> Born and raised in Alma, Michigan.<br></br>
                Central Michigan University Alumnus with a Bachelor's of Integrative Public Relations and minor of Public Affairs - 2017.<br></br>
                Full Stack Web Development (JavaScript) Certificate - 2021. <br></br>
                Senior Graphic Designer for Three Rivers Media - August 2017. <br></br>
                Freelance graphic designer since 2016.<br></br>
                Photography is a hobby.<br></br>            
            </p>
            <h2>Skills</h2>
            <ul>
                <h3>Graphic Design</h3>
                <li>Indesign</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Photography</li>
                <li>Social Media</li>
                <li>Typography</li>

                <h3>WebDev</h3>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Git/GitHub</li>
                <li>Trello</li>
                <li>Figma</li>

                <h3>General</h3>
                <li>Project Management</li>
                <li>Positive Mental Attitude</li>
                <li>Adaptability</li>
                <li>Teamwork</li>
                <li>Attention to Detail</li>
                <li>Organized</li>
                
            </ul>
        </div>
    )
}

export default About;