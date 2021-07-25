import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NavbarComponent } from './components/navbar';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {Alerts} from './components/alerts';
import {Agents} from './components/agents';
import {Rules} from './components/rules';
import {Details} from './components/details';
import {RuleDetails} from './components/rule-details';
import {AgentDetails} from './components/agent-details';

function App() {
  return (    
      <BrowserRouter>
        <NavbarComponent/>
        <Switch>
          <Route path="/" exact component={Alerts}/>
          <Route path="/alerts" exact component={Alerts}/>
          <Route path="/details/:id" exact component={Details}/>
          <Route path="/agents" exact component={Agents}/>
          <Route path="/agent/details/:id" exact component={AgentDetails}/>
          <Route path="/rules" exact component={Rules}/>
          <Route path="/rule/details/:id" exact component={RuleDetails}/>
          <Route path="/" render={() => <div><h1>Page not found</h1></div>}/>
        </Switch>
      </BrowserRouter>   
  );
}

export default App;
