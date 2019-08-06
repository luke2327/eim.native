import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
}

const backgroundColor = '#FFF';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: backgroundColor,
    flex: 1,
    justifyContent: 'center',
  },
});
