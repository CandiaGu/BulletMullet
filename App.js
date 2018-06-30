import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={{fontSize:96}}>HELOOO</Text>
        <Text style={{fontSize:96}}>Changes you make will automatically reload.</Text>
        <Text style={{fontSize:96}}>Shake your phone to open the developer menu.</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
