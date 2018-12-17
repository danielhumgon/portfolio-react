import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Portfolio extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            activeTab: 0
        };
     }

     toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px',
                    background: 'url(https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png) center / cover' }}>
                    WeatherApp</CardTitle>
                    <CardText>
                    Weather App Created with React.js and Redux 
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>Heroku</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        } else if(this.state.activeTab === 1) {
            return (
                <div>
                    <h1>This is Bootstrap</h1>
                </div> 
            )
        } else if(this.state.activeTab === 2) {
            return (
                <div>
                    <h1>This is JavaScript</h1>
                </div> 
            )
     }

    }


    render() {
        return (

            <div className="category-tabs">
               <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                <Tab>React</Tab>
                <Tab>Bootstrap</Tab>
                <Tab>JavaScript</Tab>
               </Tabs> 

               <section className="portfolio-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                    
               </section>
            </div>
            
        );
    }
}

export default Portfolio;