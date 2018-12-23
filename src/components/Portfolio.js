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
        {/*React Projects */}
        if (this.state.activeTab === 0) {
            return (
                <div  className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{height: '176px',
                    background: 'url(https://danielhumgon.github.io/Portfolio/images/portfolio/port1.jpeg) center / cover' }}>
                    </CardTitle>
                    <CardText style={{fontWeight: 'bold', color: 'black'}}>
                    Weather App Created with React.js and Redux 
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/danielhumgon/WeatherApp" rel="noopener noreferrer" target="_blank">
                        <Button colored>Github</Button>
                        </a>
                        <a href="https://weather-app-178.herokuapp.com/" rel="noopener noreferrer" target="_blank">
                        <Button colored>Heroku</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{height: '176px',
                    background: 'url(https://d81pi4yofp37g.cloudfront.net/wp-content/uploads/firebase.jpg) center / cover' }}>
                    </CardTitle>
                    <CardText style={{fontWeight: 'bold', color: 'black'}}>
                    Food App Created with React.js and Firebase 
                    </CardText>
                    <CardActions border>
                        <a href="https://github.com/danielhumgon/food-app" rel="noopener noreferrer" target="_blank">
                        <Button colored>Github</Button>
                        </a>
                        <a href="https://food-app-80da4.firebaseapp.com/" rel="noopener noreferrer" target="_blank">
                        <Button colored>Live Demo</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>

               

                 
                </div>
                
            )
        } else if(this.state.activeTab === 1) {
            return (

                <div  className="projects-grid">
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{height: '176px',
                background: 'url(http://getbootstrap.com/docs/4.0/assets/brand/bootstrap-social.png) center / cover' }}>
                </CardTitle>
                <CardText style={{fontWeight: 'bold', color: 'black'}}>
                Portfolio Page created using HTML5, CSS3, JavaScript and Bootstrap 4 
                </CardText>
                <CardActions border>
                    <a href="https://danielhumgon.github.io/Portfolio/" rel="noopener noreferrer" target="_blank">
                    <Button colored>Web Page</Button>
                    </a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>

           

             
            </div>
                
            )
        } /* else if(this.state.activeTab === 2) {
            return (
                <div>
                    <h1>This is JavaScript</h1>
                </div> 
            )
     }*/

    }


    render() {
        return (

            <div className="category-tabs">
               <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                <Tab>React</Tab>
                <Tab>Bootstrap</Tab>
                {/*<Tab>JavaScript</Tab>*/}
               </Tabs> 

               
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                                {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                    
               
            </div>
            
        );
    }
}

export default Portfolio;