import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import "./stylesheet.css"
import "./contact.css"


class Contact extends Component {
  
  sendMessage=()=>{
    const name=document.getElementsByTagName('input')[0].value
    const email=document.getElementsByTagName('input')[1].value
    const typeOfProject=document.getElementsByTagName('select')[0].value
    const budget=document.getElementsByTagName('input')[2].value
    const msg=document.getElementsByTagName('textarea')[0].value
    const encodedmsg=`Hi My Name is ${name} I want to Do ${typeOfProject} in ${budget} brief <${msg}> here is my email ${email}`
    window.location =`https://api.whatsapp.com/send?phone=923224895195&text=${encodedmsg}`
    
  }
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <img
              src="https://mattfarley.ca/img/mf-avatar.svg"
              alt="avatar"
              style={{height: '250px'}}
               />
             <h1 style={{fontFamily:"eurostilebold", width: '100%', margin: 'auto', paddingTop: '1em'}}>I’m excited to learn about your project. Ready to get started?</h1>

          </Cell>
          <Cell col={6} style={{marginTop:"-20px"}}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list" style={{marginTop:"-25px"}}>
              
              <List>
                <ListItem>
                  <ListItemContent>
    
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <select>
                <option selected value="">Type of Project</option>
                <option value="Graphic Designing">Graphic Designing</option>
                <option value="Responsive Design">Responsive Design</option>
                <option value="Web App">Web App</option>
                <option value="Mobile App">Mobile App</option>
                <option value="Custom Work">Custom Work</option>
                </select>
                <input type="number" placeholder="Budget"/>
                <textarea placeholder="Additional Detail" rows="7" cols="60" name="comment" form="usrform">
</textarea>
                <button onClick={this.sendMessage} className="btn btn-success btn-lg">Message Now <i className="fa fa-whatsapp" aria-hidden="true" style={{fontSize:"24px",marginLeft:"6 px"}}/></button>
    
              </ListItemContent>  

                </ListItem>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-whatsapp" aria-hidden="true"/>
                   +92 322 4895 195
                  </ListItemContent>
                </ListItem>


                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    izaid57@gmail.com
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;
