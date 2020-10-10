'use strict';

import React, { Component } from 'react';

import {
  Text,
  Linking,
  StyleSheet,
  View,
} from 'react-native';

class App extends Component {
  componentDidMount = () => {
    alert(this.props.url)
    Linking.addEventListener(url => {
      alert(url)
    })
  }
  render() {
    return (
      <View style={{flex:1,backgroundColor:'black'}} >
      <Text style={{color:'#FFF',fontSize:17}}>this is your text: {this.props.url}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

});


export default App;