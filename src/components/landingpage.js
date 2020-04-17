import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from '../assets/avatar-new.png'
import { FaWhatsappSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";

class Landing extends Component {
    render() {
        return(
            <div className="main-container">
                <Grid align='center' className="landing-grid">
                    <Cell col={12}>
                        <img
                        src={avatar}
                        alt="avatar"
                        className="avatar-img"
                         />
                         <h1> Pedro Junior &#128432;</h1>
                         <div className="content-banner">
                             
                             <h2> Junior Developer </h2>
                             <hr />
                             <p> Java | JavaScript | React | Node | SQL | Business </p>
                         <div className="content-links">

                             <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                 <FaLinkedin size={'5em'} />
                             </a>

                             <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                 <FaGithubSquare size={'5em'} />
                             </a>

                             <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <FaWhatsappSquare size={'5em'} />
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