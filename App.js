/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

class App extends Component {
  state = {
    sampleText: 'sample text'
  }
  render() {
    return (
      <View style={styles.background}>
        {/* <Text>{this.state.sampleText}</Text> */}
        <Text>{`${this.state.sampleText}`}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
