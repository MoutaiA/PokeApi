import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Homepage from './Homepage';
import Footer from './Footer';
import NotFound from './NotFound';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

function Test(props) {
  return (
    <div>
      <h1>Yo</h1>
    </div>
  )
}

class Body extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header className="header-container">
            <div className="header-logo">
              <Link to="/"><img alt="Logo of the PokeAPI" src="images/logo.png" /></Link>
            </div>
            <nav className="nav-bar">
              <Link to="/" className="nav-bar-menu">Home</Link>
              <Link to="/about" className="nav-bar-menu">About</Link>
            </nav>
          </header>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/about" component={Test} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Body />
  </React.StrictMode>,
  document.getElementById('root')
);