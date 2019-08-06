import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MainHome() {
  return (
    <View style={styles.container}>
      <Text>MainHome</Text>
    </View>
  );
}

const backgroundColor = '#FFF';
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: backgroundColor,
    flex: 1,
    justifyContent: 'center'
  },
});
