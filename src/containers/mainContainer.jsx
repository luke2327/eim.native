import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Header from '../components/header/header';
import MainHome from '../components/main/main';

export default function MainAppRouterContainer () {
  return (
    <Router>
      <Scene key="root">
        <Scene key="MainHome" component={MainHome} title="Main Home" initial={true} />
        <Scene key="Header" component={Header} title="Header" />
      </Scene>
    </Router>
  );
}
