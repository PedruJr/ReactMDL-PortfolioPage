import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import avatarImg from '../assets/avatar-male.png';

import Education from './parts/education';
import Experience from './parts/experience';

class Aboutme extends Component {
    render() {
        return(
            <div className="aboutme-container">
               <Grid>
                   <Cell className="aboutme-left" style={{}} col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src={avatarImg} alt='avatar' style={{height: '200px', borderRadius: '8px'}} />
                            <h1>Pedro Junior</h1>
                            <h1 style={{opacity: '95%', fontSize:'2em',marginBottom: '-0.6em'}}>Junior Developper</h1>
                            <hr style={{borderTop: '4px solid #6DD5FA', width:'70%', marginLeft: '4em'}}/>
                            <p style={{fontSize: '1.2em', opacity: '90%'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            <hr style={{borderTop: '4px solid #6DD5FA', width:'70%', marginLeft: '4em'}}/>
                        </div>
                    
                    
                    </Cell>

                   <Cell className="aboutme-right" style={{}} col={8}>
                       <h1 style={{fontSize:'3.2em'}}> Formação </h1>
                       <Education
                       startYear={2013}
                       endYear={2017}
                       schoolName="Instituto Federal de Santa Catarina - IFSC-SJ"
                       schoolDescription=" Tecnico integrado em Telecomunicações"
                       />
                       <Education
                       startYear={2019}
                       endYear={2021}
                       schoolName="Senac - Palhoça"
                       schoolDescription=" Analise e desenvolvimento de sistemas - 3° Fase"
                       />
                       
                        <hr style={{borderTop:'3px solid #6DD5FA', margin: '1em'}} />

                       <h1 style={{fontSize:'3.2em'}}> Experiencia </h1>
                       <Experience
                       startYear={2013}
                       endYear={2017}
                       jobName="Instituto Federal de Santa Catarina - IFSC-SJ"
                       jobDescription=" Tecnico integrado em Telecomunicações"
                       />
                       <Experience
                       startYear={2019}
                       endYear={2021}
                       jobName="Senac - Palhoça"
                       jobDescription=" Analise e desenvolvimento de sistemas - 3° Fase"
                       />
                    </Cell>
               </Grid>
            </div>
        )
    }
}
export default Aboutme;