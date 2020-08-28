import './bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/main.jsx'; 

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/' exact component={Main} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
