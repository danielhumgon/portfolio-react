import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './../images/avatar.jpg';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';

class About extends Component {
    state = {  }
    render() {
        return (

            <div className="about-grid">
                <Grid>
                    <Cell col={4}>
                        <div className="left-side-div">
                          <img src={require('./../images/avatar.jpg')} 
                           alt="Daniel Gonzalez avatar"
                           className="about-img"
                          />
                        </div>

                        <h2>Daniel Gonzalez</h2>
                        <h4>Web Developer</h4>
                        <hr />
                        <p>I'm Daniel Gonzalez, from Venezuela, i'm an experienced, 
                           detailed-oriented, Front-End Web Developer. I have three 
                           years of hands-on experience efficiently coding websites 
                           and applications using modern HTML5, CSS3, React.js and 
                           JavaScript. This has allowed me to deliver great work to 
                           all of my employers, including those I've worked for on a 
                           project basis.
                        </p>
                        <hr />
                        <h5>Email</h5>
                        <p>danielhumgon@gmail.com</p>
                        <h5>Skype</h5>
                        <p>live:danielhumgon</p>
                        <h5>Phone</h5>
                        <p>(+58) 119-1535</p>
                        <hr />
                    </Cell>
                    <Cell className="about-right-col" col={8}>
                        <h2>Education</h2>

                            <Education 
                            startYear={2010} 
                            endYear={2015}
                            schoolName={"Universidad Nacional Experimental de Guayana"}
                            schoolDescription={"Bachelor's Degree in Computer Science"}
                             />
                             <hr />
                        
                        <h2>Experience</h2>

                            <Experience 
                            startYear={2015} 
                            endYear={2016}
                            jobName={"Freelance Front-end Web Developer | App Globals, Bogota,Col"}
                            jobDescription={"Creating modular, responsive templates using modern CSS techniques and JavaScript libraries."}
                             />
                             <Experience 
                            startYear={2016} 
                            endYear={2017}
                            jobName={"Freelance Front-end Web Developer | iMediaBay, California,USA"}
                            jobDescription={"Translated designs to front-end code, determined developer requirements and specifications, and worked with cross-functional team to define and develop product roadmaps."}
                             />
                            <Experience 
                            startYear={2018} 
                            endYear={2019}
                            jobName={"Freelance Front-end Web Developer | Zuluaga Media Inc, Toronto,CA"}
                            jobDescription={"Designing and implementing HTML email templates and newsletters for marketing campaigns."}
                             />
                             <Experience 
                            startYear={2018} 
                            endYear={2019}
                            jobName={"Freelance Front-end Web Developer | Hill Tribe Solutions, California,USA"}
                            jobDescription={"Building stable and maintainable codebases using React"}
                             />
                             
                             <hr />
                        
                        <h2>Skills</h2>

                            <Skills
                            skill={"HTML5"} progress={90} />
                            <Skills
                            skill={"CSS3"} progress={85} />
                            <Skills
                            skill={"Bootstrap 4"} progress={77} />
                            <Skills
                            skill={"JavaScript"} progress={75} />
                            <Skills
                            skill={"React"} progress={80} />
                            <Skills
                            skill={"jQuery"} progress={70} />
                            <Skills
                            skill={"Sass"} progress={80} />

                    </Cell>
                </Grid>
            </div>
            
        );
    }
}

export default About;