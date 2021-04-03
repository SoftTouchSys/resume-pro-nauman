import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import "./resume.css"



class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://cdn0.iconfinder.com/data/icons/occupation-002/64/programmer-programming-occupation-avatar-512.png"
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '1em'}}>Nauman Asif</h2>
            <h4 style={{color: 'grey'}}>Dev / Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h7>A freelance Software Developer specialized in  both front-end and back-end, I build interactive websites that run across platforms & devices. </h7>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Gulberg, Lahore-Pakistan.</p>
            <h5>Phone</h5>
            <p>+92 322 4895 195</p>
            <h5>Email</h5>
            <p>izaid57@gmail.com</p>
            <h5>Facebook Page</h5>
            <p>https://www.facebook.com/SoftTouchSystemsltd/</p>
            <h5>Hobbies</h5>
            <p>Internet Surfing, <br/>Book Reading,<br/> Traveling,<br/> IT Maniac,<br/> Exploring <br/></p>
            <h5>Languages</h5>
            <p>English,<br/> Urdu, <br/>Punjabi,<br/> Hindi, <br/>Arabic</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            
          <h2>Experience</h2>


      

<Experience
  startYear={2017}
  endYear={"Present"}
  jobName="Freelance Web Developer on Fiverr"
  jobDescription="I offer my Services on Fiverr as a Front-end and Back-end Developer as wel as to locals"
  />

<Experience
  startYear={2015}
  endYear={"Present"}
  jobName="Manager IT and Accounts"
  jobDescription="Preparing Sales Invoicing and the upkeep of an accurate accounts filling system. Preparation and input of Month end journal vouchers. Inputting,Matching, batching, and coding of invoices. Debtors and Creditors Reconciliations. Preparation of various reports for senior managers.Responsible for financial accounts. supervising junior financial staff. Ensuring tha information is accurately collacted and entered into system."
  />

<Experience
  startYear={2013}
  endYear={2014}
  jobName="Data Entry Operator (DEO)"
  jobDescription="A Contract base job in Semi Govt. Department,  Doing a project of Excise and Taxation for Online Record access of All Properties for taxation purpose."
  />

  <Experience
    startYear={2010}
    endYear={2013}
    jobName={"Data Entry Operator/Computer  Operator/Office Assistant/Clerk"}     
    jobDescription="Filling of Income Tax Return annually and Sales Tax Return Monthly ,
    Online and manual both on FBR Pakistan Website,
    Registration Of National Tax Number (NTN)
    Sales Tax Registration Number(STRN),
    Firm Registration, Trade Mark and Copy Right Registration (IPO)
    Companies Registration Security and Exchange Commision Pakistan (SECP)
    Chamber of Commerce, Manage Activites."
    />
                <hr style={{borderTop: '3px solid #e22947'}} />

            
              <h2>Skills</h2>
              <Skills
                  skill="HTML/CSS"
                  progress={90}
                  />
                <Skills
                skill="Javascript / jQuery"
                progress={70}
                />

                  <Skills
                    skill="Bootstrap"
                    progress={90}
                    />
                    <Skills
                    skill="PHP / Laravel"
                    progress={60}
                    />

                <Skills
                    skill="eCommerce Development"
                    progress={90}
                    />
                <Skills
                    skill="Canvas/Animation"
                    progress={80}
                    />
                    <Skills
                      skill="React JS"
                      progress={80}
                      />
              <hr style={{borderTop: '3px solid #e22947'}} />
<h2>Education</h2>
<Education
  startYear={2018}
  endYear={"Continue..."}
  schoolName="Virtual University (BS-CS)"
   />


<Education
  startYear={2008}
  endYear={2010}
  schoolName="Govt. M.A.O College LHR (I.COM)"
  schoolDescription="Lahore Board"
   />

   <Education
     startYear={2006}
     endYear={2008}
     schoolName="Matric (Science)"
     schoolDescription="Lahore Board"
      />

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
