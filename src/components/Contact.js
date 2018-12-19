import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
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
                         <h4>Interested in collaborating?</h4>
                         <hr />
                         <p>I’m always open to discussing product design work, feel
                             free to reach out at any time to the contact info provided.
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr/>

                <div className="contact-list">
                    <List>
                        <ListItem>
                            <ListItemContent className="list-item-content">
                            <i className="fa fa-envelope" aria-hidden="true"/>
                            danielhumgon@gmail.com
                            </ListItemContent>
                        </ListItem>

                        <ListItem>
                            <ListItemContent className="list-item-content">
                            <i className="fa fa-skype" aria-hidden="true"/>
                             live:danielhumgon
                            </ListItemContent>
                        </ListItem>

                        <ListItem>
                            <ListItemContent className="list-item-content">
                            <i className="fa fa-phone-square" aria-hidden="true"/>
                             (+58)412-119-1535
                            </ListItemContent>
                        </ListItem>
                        
                    </List>
                </div>
                    </Cell>
                </Grid>
            </div>
            
            
        );
    }
}

export default Contact;