import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AboutMe from './about/AboutMe';
import Skills from './skills/Skills';
import './Content.css';

const Content = () => {
    return (
        <div id="content-container">
            <Switch>
                <Route exact path="/">
                    <AboutMe />
                </Route>
                <Route path="/skills">
                    <Skills />
                </Route>
            </Switch>
        </div>
    );
};

export default Content;