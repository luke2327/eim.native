import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainHome from './main/main';

const AppStackNavigator = createStackNavigator({
  Main: {
    screen: MainHome // MainScreen 컴포넌트를 네비게이터에 등록
  }
});

export default createAppContainer(AppStackNavigator);
