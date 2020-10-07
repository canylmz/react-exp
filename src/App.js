import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from '../src/routes/home'
import CountryDetail from '../src/routes/countryDetail'
import {Switch, Route} from 'react-router-dom';

class App extends Component {

  render() {
    return (
        <Switch >
          <Route path="/" exact component={Home} />
          <Route path='/countries/:iso3' component={CountryDetail}/>
        </Switch >
    );
  }
}

export default App;
