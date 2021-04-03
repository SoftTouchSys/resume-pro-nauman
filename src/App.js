import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color center" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">Pro_Nauman</Link>} scroll>
            <div className="animated"style={{border: '0px solid white',width:"69%"}}>
            <Navigation>
                <Link to="/resume" style={{color:"#D94A07",fontWeight:"900"}}>Resume</Link>
                <Link to="/aboutme" style={{color:"",fontWeight:"900"}}>About Me</Link>
                <Link to="/projects" style={{color:"",fontWeight:"900"}}>Projects</Link>
                <Link to="/contact" style={{color:"",fontWeight:"900"}}>Contact</Link>
            </Navigation>
            </div>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
