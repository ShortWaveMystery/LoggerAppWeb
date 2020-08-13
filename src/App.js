import React, { Component } from 'react';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import {Home} from './Home';
import {Login} from './Login';

class App extends Component
{
  render()
  {
    return(
      <React.Fragment>
        <Router>
        <Switch>
        
          <Route  exact path="/" component={Login}/>
          <Route  path="/Home" component={Home}/>
         
       
        </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
