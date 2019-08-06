import { StyleSheet, Text, View, Button } from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text>Header</Text>
      <Button
        title="go to mainApp"
        onPress={
          () => {}
        }
      />
      <Text>{ this.props === undefined ? 'Hello' : 'World' }</Text>
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
