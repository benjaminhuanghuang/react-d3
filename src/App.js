import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
//
import Header from './components/Header';
import Home from './components/Home';
import Dashboard from './components/Dashboard';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/dashboard" component={Dashboard}/>
        </div>
       </BrowserRouter>
    );
  }
}

export default App;
