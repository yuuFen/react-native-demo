import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './HomeScreen';

const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: '首页',
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: {color: '#fff'},
      headerStyle: {backgroundColor: '#38b48b'},
    },
  },
);

export default HomeNavigator;
