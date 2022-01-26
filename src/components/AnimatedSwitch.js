import React from 'react'
import { Route, Switch, withRouter } from "react-router-dom"
import { TransitionGroup, CSSTransition } from "react-transition-group"

import Main from '../Pages/Main'
import Skills from '../Pages/Skills'
import About from '../Pages/About'
import PageNotFound from '../Pages/PageNotFound'

const AnimatedSwitch = withRouter(({ location }) => (
    <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={500}>
            <Switch location={location}>
                <Route exact path='/' component={Main} />
                <Route path="/skills" component={Skills} />
                <Route path="/about" component={About} />
                <Route path="*" component={PageNotFound} />
            </Switch>
        </CSSTransition>
    </TransitionGroup>
));

export default AnimatedSwitch;