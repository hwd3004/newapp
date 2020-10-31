/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';

const App = () => {
  return (
    <>
      <View>
        <TouchableOpacity
          onPress={() => alert('터치')}
          // onLongPress - 길게 누르면 실행
          // onPressIn - 누르자마자 실행
          // onPressOut - 터치했다가 손을 놓았을때 실행
        >
          <Text>터치하면 반짝이면서 이벤트 실행</Text>
        </TouchableOpacity>
        <TouchableWithoutFeedback onPress={() => alert('터치')}>
          <Text>터치하면 다른 효과 없이 이벤트 실행</Text>
        </TouchableWithoutFeedback>
      </View>
    </>
  );
};

// class App extends Component {

//   render() {
//     return (
//       <View style={styles.background}>
//         <Text style={styles.white}>텍스트</Text>
//       </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  white: {
    color: 'white',
  },
});

export default App;
