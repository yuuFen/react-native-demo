import {createStackNavigator} from 'react-navigation-stack';
import MessageScreen from './MessageScreen';

const MessageNavigator = createStackNavigator(
  {
    Message: {
      screen: MessageScreen,
      navigationOptions: {
        title: '消息',
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

export default MessageNavigator;
