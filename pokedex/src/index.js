import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Search from './Search';

class Body extends React.Component {

  fetchData(pokemon) {
    fetch('https://pokeapi.co/api/v2/pokemon/' + pokemon)
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log('An error occured : ' + err));
  }

  render() {
    return (
      <div className="nav">
        <Search fetchData={this.fetchData.bind(this)} />
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
