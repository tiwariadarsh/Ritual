import React from 'react';
import Navbar from './components/Navbar';
import Top from './components/Top';
import Bottom from './components/Bottom';
import Middle from './components/Middle';
import { Route } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';
import Cartpage from './components/Cartpage';
import Menu from './components/Menu';

const App = () => {
    return (
        <Router>
            <Navbar />
            <switch>
            <Route exact path='/'>
            <Top />
            <Middle />
            <Bottom />
            </Route>
            <Route exact path='/cart'>
             <Cartpage/>
            </Route>
            <Route exact path='/menu'>
             <Menu/>
            </Route>
            </switch>
        </Router>
    );
};

export default App;