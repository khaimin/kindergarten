/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, 
  Image
} from 'react-native';

import Welcome from './src/components/Welcome/Welcome';
import Login from './src/components/Login/Login';
import ListData from './src/components/Main/ListData';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timePassed: false
    }
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setTimePassed();
    }, 2000);
  }

  setTimePassed = () => {
    this.setState({
      timePassed: true
    })
  }
  render() {
    if(!this.state.timePassed){
      return <Welcome></Welcome>
    }else{
      return (
        <Login></Login>
      );
    }
  }
}

