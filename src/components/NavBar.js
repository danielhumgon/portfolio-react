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
        <Header className="header-color2" title={<Link style={{textDecoration: 'none', color: 'white'}}
         to={`${process.env.PUBLIC_URL}/`}>Home</Link>} scroll>
            <Navigation>
                <Link to={`${process.env.PUBLIC_URL}/portfolio`}>Portfolio</Link>
                <Link to={`${process.env.PUBLIC_URL}/about`}>About me</Link>
                <Link to={`${process.env.PUBLIC_URL}/contact`}>Contact</Link> 
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'gray'}}
         to={`${process.env.PUBLIC_URL}/`}>Home</Link>}>
            <Navigation>
                <Link to={`${process.env.PUBLIC_URL}/portfolio`}>Portfolio</Link>
                <Link to={`${process.env.PUBLIC_URL}/about`}>About me</Link>
                <Link to={`${process.env.PUBLIC_URL}/contact`}>Contact</Link>
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