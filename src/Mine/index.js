import {createStackNavigator} from 'react-navigation-stack';
import MineScreen from './MineScreen';

const MineNavigator = createStackNavigator(
  {
    Mine: {
      screen: MineScreen,
      navigationOptions: {
        title: '个人中心',
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

export default MineNavigator;
