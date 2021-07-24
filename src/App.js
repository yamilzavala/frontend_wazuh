import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Alerts} from './components/alerts';
import {Agents} from './components/agents';
import {Rules} from './components/rules';
import {Details} from './components/details';
import { NavbarComponent } from './components/navbar';

function App() {
  return (    
      <BrowserRouter>
        <NavbarComponent/>
        <Switch>
          <Route path="/" exact component={Alerts}/>
          <Route path="/alerts" exact component={Alerts}/>
          <Route path="/agents" exact component={Agents}/>
          <Route path="/rules" exact component={Rules}/>
          <Route path="/details/:id" exact component={Details}/>
          <Route path="/" render={() => <div><h1>Page not found</h1></div>}/>
        </Switch>
      </BrowserRouter>   
  );
}

export default App;
