import React, { Component } from 'react';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import {Home} from './Home';
import {EntryLog} from './EntryLog';
import {FindLogStack} from './FindLogStack';
import {Timesheet} from './Timesheet';

class App extends Component
{
  render()
  {
    return(
      <React.Fragment>
        <Router>
        <Switch>
        
          <Route  exact path="/" component={Home}/>
          <Route  path="/entryLog" component={EntryLog}/>
          <Route  path="/findLogStack" component={FindLogStack}/>
          <Route  path="/Timesheet" component={Timesheet}/>
          <Route  path="/Timesheet" component={Timesheet}/>
       
        </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
