import { createStackNavigator, createAppContainer } from 'react-navigation';
import Header from '../header/index';
import MainHome from '../main/index';

const NavigationStack = createStackNavigator({
  Header: {
    screen: Header
  },
  MainHome: {
    screen: MainHome
  }
});

const MainContainer = createAppContainer(NavigationStack);

export default MainContainer;