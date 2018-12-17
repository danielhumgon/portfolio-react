import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './../images/avatar.jpg';


class LandingPage extends Component {
    state = {  }
    render() {
        return (

            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img src={require('./../images/avatar.jpg')} 
                         alt="Daniel Gonzalez avatar"
                         className="avatar-img"
                     />
                    <div className="banner-text">
                        <h1>Front-end Web Developer</h1>

                        <hr />

                        <p>HTML5 | CSS3 | Bootstrap 4 | JavaScript | React | jQuery | Sass</p>

                    

                    <div className="social-links">

                        <a href="https://github.com/danielhumgon" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true" />
                        </a>

                         <a href="https://github.com/danielhumgon" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true" />
                        </a>

                         <a href="https://github.com/danielhumgon" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true" />
                        </a>

                         <a href="https://github.com/danielhumgon" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-github-square" aria-hidden="true" />
                        </a>

                    </div>

                    </div>

                    </Cell>
                </Grid>
                
            </div>
            
        );
    }
}

export default LandingPage;