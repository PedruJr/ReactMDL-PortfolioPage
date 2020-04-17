import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

const linkStyle = { fontSize: '1.3em' };

function App() {
  return (
    <div >
    <Layout  fixedHeader>
        <Header className='header-style' style={{marginBottom:'2px' }} transparent title={<span style={{ color: '#FFFFFF' }}>
            <Link style={{color: 'white', textDecoration: 'none'}} to="/">HomePage</Link> </span>} >
            <Navigation >
                <Link style={linkStyle}to="/aboutme">About Me</Link>
                <Link style={linkStyle}to="/projects">Projects</Link>
                <Link style={linkStyle}to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer style={linkStyle} title="Menu">
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content />
            <div className='main-container' style={{width: '1200px', height:'1200px'}}>

            <Main className='main-container'/>
            </div>
    </Layout>
</div>
  );
}

export default App;
