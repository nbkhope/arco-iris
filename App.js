import React from 'react';
import { View, StyleSheet } from 'react-native';

class App extends React.Component {
  render() {
    const colors = [
      'red',
      '#ff7f00',
      'yellow',
      'rgb(0, 255, 0)',
      'blue',
      '#4b0082',
      '#8b00ff',
    ];
    const views = colors.map(color => (
      <View key={color} style={{ flex: 1, backgroundColor: color }} />
    ));

    return (
      <View style={{ flex: 1 }}>
        {views}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: 'red'
  },
  greenContainer: {
    flex: 8,
    backgroundColor: 'green'
  }
});

export default App;
