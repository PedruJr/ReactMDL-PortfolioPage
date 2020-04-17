import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Landing from './landingpage';
import Contact from './contact';
import Aboutme from './aboutme';
import Projects from './projects';

const Main = () => {
    return(
    <Switch>
    <Route exact path="/" component={Landing} />
    <Route  path="/contact" component={Contact} />
    <Route  path="/aboutme" component={Aboutme} />
    <Route  path="/projects" component={Projects} />
    </Switch>
    );
}

export default Main;