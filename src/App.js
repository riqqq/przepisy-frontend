import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PrzepisyList from './components/PrzepisyList';
import PrzepisEdit from './components/PrzepisEdit';


class App extends Component {
  
  render() {
    
    return (
      <Router>
        <Switch>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/przepisy' exact={true} component={PrzepisyList}/>
          <Route path='/przepisy/:id' component={PrzepisEdit}/>
        </Switch>
      </Router>
    )
  }
}

export default App;
