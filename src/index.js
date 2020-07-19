import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeNavigator from './Home';
import MessageNavigator from './Message';
import MineNavigator from './Mine';
import CompanyNavigator from './Company';
import Welcome from './Welcome';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from 'react-navigation-stack';

const tabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        title: '首页',
      },
    },
    Company: {
      screen: CompanyNavigator,
      navigationOptions: {
        title: '公司',
      },
    },
    Message: {
      screen: MessageNavigator,
      navigationOptions: {
        title: '消息',
      },
    },
    Mine: {
      screen: MineNavigator,
      navigationOptions: {
        title: '我的',
      },
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarIcon: ({focused, tintColor, horizontal}) => {
        const {
          state: {key},
        } = navigation;
        const iconMap = {
          Home: 'home',
          Message: 'envelope-o',
          Mine: 'user',
          Company: 'newspaper-o',
        };
        return <Icon name={iconMap[key]} size={20} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#38b48b',
      inactiveTintColor: 'grey',
    },
  },
);

const WelcomeNavigator = createStackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const WelcomeSwitchNavigator = createSwitchNavigator({
  Init: WelcomeNavigator,
  Main: tabNavigator,
});

const AppContainer = createAppContainer(WelcomeSwitchNavigator);
export default AppContainer;
