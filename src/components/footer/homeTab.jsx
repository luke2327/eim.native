import { Icon } from 'native-base';
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class HomeTab extends Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name='ios-home' style={{ color: tintColor }} />
    )
  }

  render () {
    return (
      <View>
        <Text>
          Hello
        </Text>
      </View>
    );
  }
}
