import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ComponentScreen from './Screen/ComponentScreen';
export default function App() {
  return (
    <View style={styles.container}>
      <ComponentScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
