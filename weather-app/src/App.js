import './index.css';
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import Weather from './components/Home/Weather';
import SignIn from './components/SignIn';

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Stocks from './components/Stocks/stocks';
import Home from './components/Home/Home';

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>

          <Route path="/home">
            <Weather/>
          </Route>
          
          <Route path="/stocks">
            <Stocks/>
          </Route>

          <Route path="/login">
            <SignIn/>
          </Route>

        </Switch>
      
      </div>
    </Router>
  );
}

export default App;
