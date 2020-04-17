import React, {Component} from 'react';
import { Grid, Cell, ListItem, ListItemContent, List} from 'react-mdl';
import avatarImg from '../assets/avatar-male.png'

import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

class Contact extends Component {
    render() {
        return(
            <div className='contact-container'>
            <Grid className='contact-grid'>
                <Cell col={6}>
                    <h1>
                        Pedro Junior
                    </h1>
                    <img src={avatarImg}
                    alt='myAvatar'
                    style={{height: '250px'}}
                    />
                    <p style={{width:'75%', margin: 'auto', paddingTop:'1em'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </Cell>
                <Cell col={6}>
                <h1> Contact Me</h1>
                <hr/>
                <div className='contact-list'>
                <List>

                    <ListItem>
                        <ListItemContent style={{ fontSize: '2em', fontWeight:'bold'}}><FaWhatsapp size={50} /> (48) 999365112</ListItemContent>
                    </ListItem>

                    <ListItem>
                        <ListItemContent style={{ fontSize: '2em', fontWeight:'bold'}}><AiOutlineMail size={50} /> Pedrotark@gmail.com </ListItemContent>
                    </ListItem>

                    <ListItem>
                        <ListItemContent style={{ fontSize: '2em', fontWeight:'bold'}}><FaLinkedin size={50} /> <a href="https://www.linkedin.com/in/pedrodev/"> /PedroDev</a></ListItemContent>
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