import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';

class NavBar extends Component {
    state = {  }
    render() {
        return (

            <div className="demo-big-content">
    <Layout>
        <Header title="Home" scroll>
            <Navigation>
                <a href="#">About</a>
                <a href="#">Portfolio</a>
                <a href="#">Contact</a> 
            </Navigation>
        </Header>
        <Drawer title="Home">
            <Navigation>
                <a href="#">About</a>
                <a href="#">Portfolio</a>
                <a href="#">Contact</a>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
        </Content>
    </Layout>
</div>
            
        );
    }
}

export default NavBar;