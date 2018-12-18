import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import './../images/contact.png';

class Contact extends Component {
    
    render() {
        return (

            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Daniel Gonzalez</h2>
                        <img src={require('./../images/contact.png')} 
                         alt="contact avatar"
                         className="contact-img"
                     />
                    </Cell>
                    <Cell col={6}>right side</Cell>
                </Grid>
            </div>
            
            
        );
    }
}

export default Contact;