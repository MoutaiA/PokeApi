import React from 'react';
import ReactDOM from 'react-dom';
import './common/index.css';
import Header from './common/Header';
import Main from './common/Main';
import Footer from './common/Footer';
import {
  BrowserRouter as Router,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    </Router>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);