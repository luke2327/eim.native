import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';

import MainApp from './src/components/mainApp';

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(MainApp);
