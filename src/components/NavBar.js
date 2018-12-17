import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './main';
import { Link } from 'react-router-dom';
import './../App.css';

class NavBar extends Component {
    state = {  }
    render() {
        return (

            <div className="demo-big-content">
    <Layout>
        <Header className="header-color2" title="My Portfolio" scroll>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About me</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link> 
            </Navigation>
        </Header>
        <Drawer title="My Portfolio">
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/about">About me</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
            
        );
    }
}

export default NavBar;