import React, {Component} from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

const buttonStyle = {width:'150px', border: '1px solid white', borderRadius:'8px', color:'white', background: 'gray'};

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }


    card (props) {
        const {bgUrl,title, text } = props;
        return (
         <div className='projects-grid'>
            <Card className="shadow-hover" shadow={5} style={{width: '100%', maxWidth: '300px', margin:'0 auto'}}>
                <CardTitle style={{color: '#fff', height: '200px', background: `url(${bgUrl}) center / cover`}}>
                    {title}
                </CardTitle>
                <CardText>
                    {text}
                </CardText>
                <CardActions border>
                    <Button className='button'style={buttonStyle} colored>GitHub</Button>
                </CardActions>
                <CardMenu style={{color:'#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
            </Card>
        </div>
        );
    }

    toggleCategories() {
        if(this.state.activeTab === 0 ){
            console.log('funcionando')
            return(
            <div className='projects-grid'>
                {this.card({bgUrl:"https://miro.medium.com/max/2400/1*rpHtt5VicGT3T-mVJJ2jFw.gif", title:'React', text:"Lorem Ipsum is simply dummy text of the printiy"})}
                {this.card({bgUrl:"https://miro.medium.com/max/2400/1*rpHtt5VicGT3T-mVJJ2jFw.gif", title:'React', text:"Lorem Ipsum is simply dummy text of the printiy"})}
            </div>
            )
        }  if(this.state.activeTab === 1 ){
            return(
            <div className='projects-grid'>
                {this.card({bgUrl:"https://miro.medium.com/max/2400/1*rpHtt5VicGT3T-mVJJ2jFw.gif", title:'React', text:"Lorem Ipsum is simply dummy text of the printiy"})}
                {this.card({bgUrl:"https://miro.medium.com/max/2400/1*rpHtt5VicGT3T-mVJJ2jFw.gif", title:'React', text:"Lorem Ipsum is simply dummy text of the printiy"})}
            </div>

            )
            
        }
    }

    render() {
        return(
            <div className='container-projects'>
                <Tabs style={{background: '#blue', marginTop:'3em', borderBottom:'4px solid white', textShadow: '3px 3px 3px black'}}  activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab:tabId})} ripple>
                <Tab className='button' style={{color: 'white', fontSize: '3em'}}> React </Tab>
                <Tab className='button' style={{color: 'white', fontSize: '3em'}}> Java </Tab>
                </Tabs>

                <Grid align='center' className='project-grid'>
                    <Cell col={12}>
                        {this.toggleCategories()}

                    </Cell>
                </Grid>
            </div>
       
        );

    }
}
export default Projects;