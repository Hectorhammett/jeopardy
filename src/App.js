import '@fortawesome/fontawesome-free/css/all.css';
import './scss/main.scss';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './pages/main/main.jsx'; 
import CreateSet from './pages/createSet/createSet.jsx';

function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/' exact component={ Main } />
                    <Route path='/createSet' component={ CreateSet } />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
