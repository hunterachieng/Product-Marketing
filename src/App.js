import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Smartwatch from './SmartWatch';
import SonyHeadPhones from './SonyHeadPhones';
import HeadPhones from './HeadPhones';
import Contact from './Contact';

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
      <Route path="/contacts"exact component={Contact}/>
      <Route path="/smartwatch"exact component={Smartwatch}/>
      <Route path="/sonyheadphones"exact component={SonyHeadPhones}/>
      <Route path="/headphones"exact component={HeadPhones} />
      </Router>
   
    </div>
  );
}

export default App;
