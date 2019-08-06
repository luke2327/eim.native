import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default function MainHome() {
  return (
    <View style={styles.container}>
      <Text>MainHome</Text>
      <Button title="go to header page" onPress={Actions.Header}></Button>
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
