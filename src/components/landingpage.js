import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { library } from '@fortawesome/fontawesome-svg-core'
import "./landing.css"
import FacebookImg from "./fbicon.png"


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%',color:"white"}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://i.ibb.co/yq0XG1W/635e976d-ec53-46ff-9309-ea0e87d2aa12-removebg-preview.png"
              alt="avatar"
              className="avatar-img"
              />
            {/* <h1 className="center text-light" style={{marginTop: '80px',color:"white",fontSize:"90px",fontFamily:"Georgia, 'Times New Roman', Times, serif"}}>Nauman Asif</h1> */}
            {/* <p className="center text-light" style={{color:"white",marginTop:"-30px",fontFamily:"monospace"}}><span style={{fontWeight:"lighter"}}>I am a </span><span style={{fontWeight:"bolder"}}>Web Developer</span> and <span style={{fontWeight:"bolder"}}>ardent learner</span> who is always <br/>creating and learing awesome stuff.Let's start scrolling and learn more <span style={{fontWeight:"bolder"}}>about me</span></p> */}
            
            <div className="banner-text" style={{marginTop: '-8px'}}>
              <h2 style={{margin: '15px'}}>Web Developer</h2>
              <p style={{marginTop: '-20px'}}>HTML/CSS | Bootstrap | PHP | Javascript | jQuery | Canvas/Animation | React JS</p>

        <div className="social-links" style={{marginTop: '-30px',padding:"1%"}}>

          {/* LinkedIn */}
          <a href="https://www.facebook.com/nauman.asif.507/" rel="noopener noreferrer" target="_blank">
		<img src={FacebookImg} style={{height:"30px"}} />           
          </a>

          <a href="https://www.fiverr.com/pro_nauman" rel="noopener noreferrer" target="_blank">
            <img src={'https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/fiverr-512.png'} className="icon3"/>
          </a>

          {/* Github */}
          <a href="https://www.facebook.com/SoftTouchSystemsltd" rel="noopener noreferrer" target="_blank">
            <img src={"https://www.pngfind.com/pngs/b/41-419791_fb-page-icon-png-facebook-page-logo-png.png"} className="icon2"/>
          </a>
        
        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
