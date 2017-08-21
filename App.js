import React from 'react';
import { View, StyleSheet } from 'react-native';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [
        'red',
        '#ff7f00',
        'yellow',
        'rgb(0, 255, 0)',
        'blue',
        '#4b0082',
        '#8b00ff',
      ],
    };
  }

  componentDidMount() {
    setInterval(() => {
      const lastColor = this.state.colors.slice(-1);
      const listWithoutLast = this.state.colors.slice(0, -1);

      this.setState({ colors: lastColor.concat(listWithoutLast) });
    }, 1000);
  }

  render() {
    const views = this.state.colors.map(color => (
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
