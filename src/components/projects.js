import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import Project1 from "./ss-img/1.png"
import Project2 from "./ss-img/2.png"
import Project3 from "./ss-img/3.png"
import Project4 from "./ss-img/4.png"
import Project5 from "./ss-img/5.png"
import Project6 from "./ss-img/6.jpg"
import Project7 from "./ss-img/7.png"
import Project8 from "./ss-img/8.jpg"



class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: '3%'}}>
            <CardTitle style={{color: '#ff6602', height: '176px', background: `url(${Project6}) center / cover`}} >Vestidos By HH</CardTitle>
            <CardText>
            This Website is for all those people who want gorgeous wedding Dresses
            </CardText>
            <CardActions border>
              <Button colored><a href="https://vestidos.pk/" target="_blank">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: '3%'}}>
            <CardTitle style={{color: '#ff6602', height: '176px', background: `url(${Project2}) center / cover`}} >Butchers Construction Company</CardTitle>
            <CardText>
            We are a company that does not just meet our project expectations; we exceed them. With a history riched... 
            </CardText>
            <CardActions border>
              <Button colored><a href="https://www.butchersconstructioncompany.com/" target="_blank">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}

          <Card shadow={5} style={{minWidth: '450', margin: '3%'}}>
            <CardTitle style={{color: '#ff6602', height: '176px', background: `url(${Project7}) center / cover`}} >Bigotube</CardTitle>
            <CardText>
            Bigotube is dedicated to bringing you the latest trending videos everyday. Other websites or apps seem to have a trending section.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://www.bigotube.com/" target="_blank">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: '3%'}}>
            <CardTitle style={{color: '#ff6602', height: '176px', background: `url(${Project3}) center / cover`}} >Prime Shield Health</CardTitle>
            <CardText>
            We are a family-run online store offering best Coronavirus medical supplies at affordable prices.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://www.primeshieldusa.com/" target="_blank">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: '3%'}}>
            <CardTitle style={{color: '#ff6602', height: '176px', background: `url(${Project4}) center / cover`}} >Metro Key LockSmith</CardTitle>
            <CardText>
            Metro-Keys locksmith Service in Carrollton and Dallas, Tx area has expanded to the West Coast to service the San Bernardino, 
            </CardText>
            <CardActions border>
              <Button colored><a href="https://www.metrokeys.com/" target="_blank">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: '3%'}}>
            <CardTitle style={{color: '#ff6602', height: '176px', background: `url(${Project5}) center / cover`}} >VALLIANI JEWELERS</CardTitle>
            <CardText>
            FOUNDED BY KASHIF VALLIANI IN 1999, VALLIANI JEWELERS STRIVES AND HAS PROVEN TO PROVIDE.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://www.vallianijewelers.com/" target="_blank">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: '3%'}}>
            <CardTitle style={{color: '#ff6602', height: '176px', background: `url(${Project1}) center / cover`}} >NH Siding</CardTitle>
            <CardText>
            JMR Siding We are a family owned business since 1979 specializing in vinyl siding and replacement windows. 
            </CardText>
            <CardActions border>
              <Button colored><a href="https://nhsiding.com/" target="_blank">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: '3%'}}>
            <CardTitle style={{color: '#ff6602', height: '176px', background: `url(${Project8}) center / cover`}} >Mirat ul Uroos</CardTitle>
            <CardText>
            In Pakistan, Mirat ul Uroos is Pioneer in devising a multidimensional training program boosting, physical, emotional and intellectual capabilities of its participants.
            </CardText>
            <CardActions border>
              <Button colored><a href="https://www.miratuluroos.com/" target="_blank">Live Demo</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

        </div>


      ) 
    } else if(this.state.activeTab === 1) {
      return (
        <div><h1>This is Angular</h1></div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>This is VueJS</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>This is MongoDB</h1></div>
      )
    }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>All</Tab>
          {/* <Tab >HTML/CSS</Tab>
          <Tab>React JS</Tab>
          <Tab>PHP</Tab> */}
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
