import React, { Component } from 'react';
import "./aboutme.css"
import "./stylesheet.css"
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return(
      <div>
        <div className="hero-body">
        <div className="container">
          <div className="columns is-centered">
            <div className="column">
              <h2 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile" style={{fontFamily:"eurostilebold",marginTop:"50px"}}>Designer &amp; Front-end Developer</h2>
              <h4 className="subtitle is-size-4-desktop" style={{fontFamily:"Europa",marginTop:"-20px"}}>I design and code beautifully simple things, and I love what I do.</h4><img class="avatar" src="https://mattfarley.ca/img/mf-avatar.svg"/>
             </div>
          </div>
        </div>
      </div>
      <div className="hero-foot">
        <div className="container"><img class="is-bottom" src="https://mattfarley.ca/img/hero.svg" /></div>
      </div>
      <div className="section is-medium is-primary has-text-centered is-long">
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-three-fifths">
            <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile" style={{fontFamily:"eurostilebold"}}>Hi, I’m Nauman. Nice to meet you.</h1>
            <h5 class="subtitle is-size-5-desktop" style={{fontFamily:"Europa"}}>Since beginning my journey as a freelance Developer nearly 4 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</h5>
          </div>
        </div>
      </div>
    </div>
    <section class="section skills has-text-centered">
      <div class="container is-narrow">
        <div class="box">
          <div class="content">
            <div class="columnsd is-centered">
              <div class="columnd">
                <figure class="image"><img class="is-skill-icon" src="https://mattfarley.ca/img/icons/designer.svg"/></figure>
                <h3 class="title is-size-4 is-spaced" style={{fontFamily:"eurostilebold"}}>Designer</h3>
                <p style={{fontFamily:"Europa",fontSize:"16px"}}>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                <p class="list-title has-text-primary has-text-weight-normal" style={{fontFamily:"Europa",color:"#7527F7"}}>Things I enjoy designing:</p>
                <p style={{fontFamily:"Europa"}}>UX, UI, Web, Mobile, Apps, Logos,Brochure, Flyers</p>
                <p class="list-title has-text-primary has-text-weight-normal" style={{fontFamily:"Europa",color:"#7527F7"}}>Design Tools:</p>
                <ul style={{fontFamily:"Europa"}}>
                  <li style={{fontFamily:"Europa"}}>Adobe Ilustrator</li>
                  <li style={{fontFamily:"Europa"}}>Adobe Photoshop</li>
                  <li style={{fontFamily:"Europa"}}>Corel Draw</li>
                  <li style={{fontFamily:"Europa"}}>Adobe xd</li>
                </ul>
              </div>
              <div class="columnd" >
                <figure class="image"><img class="is-skill-icon" src="https://mattfarley.ca/img/icons/frontend.svg"/></figure>
                <h3 class="title is-size-4 is-spaced" style={{fontFamily:"eurostilebold"}}>Front-end Developer</h3>
                <p style={{fontFamily:"Europa",fontSize:"16px"}}>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                <p style={{fontFamily:"Europa",color:"#7527F7"}} class="list-title has-text-primary has-text-weight-normal">Languages I speak:</p>
                <p style={{fontFamily:"Europa"}}>HTML,CSS,Bootstrap,JavaScript/jQuery,PHP, React JS</p>
                <p style={{fontFamily:"Europa",color:"#7527F7"}} class="list-title has-text-primary has-text-weight-normal">Dev Tools:</p>
                <ul style={{fontFamily:"Europa"}}>
                  <li style={{fontFamily:"Europa"}}>Atom</li>
                  <li style={{fontFamily:"Europa"}}>Visual Code</li>
                  <li style={{fontFamily:"Europa"}}>Bootstrap</li>
                  <li style={{fontFamily:"Europa"}}>Github</li>
                  
                </ul>
              </div>
              <div class="columnd nocolumnd"> 
                <figure class="image"><img class="is-skill-icon" src="https://mattfarley.ca/img/icons/mentor.svg"/></figure>
                <h3 class="title is-size-4 is-spaced" style={{fontFamily:"eurostilebold"}}>Mentor</h3>
                <p style={{fontFamily:"Europa",fontSize:"16px"}}>I genuinely care about people, and love helping fellow designers work on their craft.</p>
                <p style={{fontFamily:"Europa",color:"#7527F7"}} class="list-title has-text-primary has-text-weight-normal">Experiences I draw from:</p>
                <p style={{fontFamily:"Europa"}}>Freelancing</p>
                <p style={{fontFamily:"Europa",color:"#7527F7"}} class="list-title has-text-primary has-text-weight-normal">Mentor Stats:</p>
                <ul style={{fontFamily:"Europa"}}>
                  <li style={{fontFamily:"Europa"}}>4 years experience</li>
                  <li style={{fontFamily:"Europa"}}>5 short courses</li>
                  <li style={{fontFamily:"Europa"}}>5 bootcamps</li>
                  <li style={{fontFamily:"Europa"}}>20+ students</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div className="container is-narrow">
        <div className="box1">
          <div class="columns level">
            <div className="column2 level-item">
              <h1 className="title" style={{fontFamily:"eurostilebold"}}>Start a project</h1>
            </div>
            <div className="column3 level-item">
              <p style={{fontFamily:"eurostilebold"}}>Interested in working together? We should queue up a chat. I’ll buy the coffee.</p>
            </div>
            <div className="column4 level-item "><Link to="/contact" className="btnstyle">Let's Do this</Link></div>
          </div>
        </div>
      </div>
      <p style={{fontFamily:"eurostilebold",fontSize:"20px",margin:"40px",textAlign:"center"}}>Crafted with love<img src={"https://icon-library.com/images/red-heart-icon-png/red-heart-icon-png-12.jpg"} style={{height:"25px"}}/>By Nauman</p>
      </div>
    )
  }
}

export default About;
