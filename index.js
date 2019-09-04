import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';
import * as _ from 'lodash';

import MainApp from './src/components/mainApp';

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(MainApp);
