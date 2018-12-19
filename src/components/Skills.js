import React, { Component } from 'react';
import { Grid, Cell, ProgressBar } from 'react-mdl';

class Skills extends Component {
    
    render() {
        return (
            <Grid className="skills-grid">
                <Cell col={12}>
                    <div className="skills-cell-div">
                    {this.props.skill} 
                    <ProgressBar className="progress-bar" progress={this.props.progress} />
                    </div>
                </Cell>
            </Grid>   
        );
    }
}

export default Skills;