import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './main';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    state = {  }
    render() {
        return (

            <div className="demo-big-content">
    <Layout>
        <Header title="Home" scroll>
            <Navigation>
                <Link to="/about">About</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link> 
            </Navigation>
        </Header>
        <Drawer title="Home">
            <Navigation>
                <Link to="/about">About</Link>
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