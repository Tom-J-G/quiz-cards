import React from 'react';
import {Switch, BrowserRouter, Route} from 'react-router-dom'
import Home from './components/Home'

export default class App extends React.Component {
    render() {
        return (
            <div id="toDoList">
                <BrowserRouter>
                    <Switch>
                    <Route exact path='/' component={Home} />
                    </Switch>
                </BrowserRouter>
            </div>
        );

    }
}

