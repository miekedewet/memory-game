import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Help from './Components/Pages/help';
import Home from './Components/Pages/home';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/help' component={Help} />
      </Switch>
    </Router>
  );
}

export default App;
