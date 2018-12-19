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
                        <p>Lorem Ipsum is simply dummy text of the printing 
                           and typesetting industry. Lorem Ipsum has been the 
                           industry's standard dummy text ever since the 1500s
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
                            schoolDescription={"Universidad Nacional Experimental de Guayana"}
                             />
                             <hr />
                        
                        <h2>Experience</h2>

                            <Experience 
                            startYear={2015} 
                            endYear={2016}
                            jobName={"First Job"}
                            jobDescription={"Lorem Ipsum Dolor"}
                             />
                             <Experience 
                            startYear={2016} 
                            endYear={2017}
                            jobName={"Second Job"}
                            jobDescription={"Lorem Ipsum Dolor"}
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
                            skill={"React"} progress={69} />
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