import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './../images/avatar.jpg';

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
                        <h5>Address</h5>
                        <p>some Address</p>
                        <hr />
                        <h5>Phone</h5>
                        <p>(+58)119-1535</p>
                    </Cell>
                    <Cell className="about-right-col" col={8}>
                        right
                    </Cell>
                </Grid>
            </div>
            
        );
    }
}

export default About;