import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Smartwatch from './SmartWatch';

function App() {
  return (
    <div className="App">
      <Router>
      <nav className="nav-bar">
        <ul className="nav-links">
          <Link to="/"style={{textDecoration:"none"}}><li>Home</li></Link>
          <Link to="/contacts"style={{textDecoration:"none"}}><li>Contact</li></Link>
        </ul>
      </nav>
      <Route path="/"exact component={Home}/>
      <Route path="/smartwatch"exact component={Smartwatch}/>
      </Router>
   
    </div>
  );
}

export default App;
