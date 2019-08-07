import React, { Component } from 'react';
import { Platform } from 'react-native';
import { Icon } from 'native-base';

import HomeTab from '../footer/homeTab';
import SearchTab from '../footer/searchTab';
import AddMediaTab from '../footer/addMediaTab';
import LikesTab from '../footer/likesTab';
import ProfileTab from '../footer/profileTab';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';

export default class MainHome extends Component {
  static navigationOptions = {
    headerLeft: <Icon name='ios-camera' style={{ paddingLeft: 10 }}/>,
    title: '메이플의 모든 것',
    headerRight: <Icon name='ios-send' style={{ paddingRight: 10 }}/>,
  }

  render () {
    return (
      <MainAppTabContainer></MainAppTabContainer>
    );
  }
}

// 하단 탭 네비게이터 생성
const MainAppTabNavigator = createMaterialTopTabNavigator({
  HomeTab: { screen: HomeTab },
  SearchTab: { screen: SearchTab },
  AddMediaTab: { screen: AddMediaTab },
  LikesTab: { screen: LikesTab },
  ProfileTab: { screen: ProfileTab }
}, {
  animationEnabled: true,
  swipeEnabled: true,
  tabBarPosition: 'bottom',
  tabBarOptions: {
    style: {
      ...Platform.select({
        ios: {
          backgroundColor: 'white',
        }
      })
    },
    iconStyle: { height: 100 },
    activeTintColor: '#000',
    inactiveTintColor: '#d1cece',
    upperCaseLabel: false,
    showLabel: false,
    showIcon: true,
  }
});
const MainAppTabContainer = createAppContainer(MainAppTabNavigator);
