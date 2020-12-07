import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Homepage from './Homepage';
import Footer from './Footer';

class Body extends React.Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Homepage />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Body />
  </React.StrictMode>,
  document.getElementById('root')
);