import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';

import About from './components/About';
import Education from './components/Education';
import Error from './components/Error';
import Experience from './components/Experience';
import Home from './components/Home';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="menubox">
            <input type="checkbox" name="" id="btn" />
            <label htmlFor="btn"><i className="fas fa-bars"></i></label>
            <div className="menu">
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/education">Education</NavLink></li>
                <li><NavLink to="/experience">Experience</NavLink></li>
              </ul>
            </div>
          </div>
          <div>
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
              <Route path="/education" component={Education} />
              <Route path="/experience" component={Experience} />
              <Route component={Error} />
            </Switch>
          </div>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;


/*
<div className="menubox">
                <input type="checkbox" name="" id="btn" />
                <label htmlFor="btn"><Icon c_name="fas fa-bars" /></label>
                <div className="menu">
                    <ul>
                        <Btn c_name={props.h1name} url_source={props.h1url} descrip={props.h1descrip} />
                        <Btn c_name={props.h2name} url_source={props.h2url} descrip={props.h2descrip} />
                        <Btn c_name={props.h3name} url_source={props.h3url} descrip={props.h3descrip} />
                    </ul>
                </div>
            </div>
*/