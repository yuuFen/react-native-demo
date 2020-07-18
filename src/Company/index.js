import {createStackNavigator} from 'react-navigation-stack';
import CompanyScreen from './CompanyScreen';
import CompanyDetail from './CompanyDetail';

const CompanyNavigator = createStackNavigator(
  {
    Company: {
      screen: CompanyScreen,
      navigationOptions: {
        title: '公司',
      },
    },
    CompanyDetail: {
      screen: CompanyDetail,
      navigationOptions: {
        title: '公司详情',
      },
    },
  },
  {
    defaultNavigationOptions: {
      headerTitleStyle: {color: '#fff'},
      headerStyle: {backgroundColor: '#38b48b'},
    },
    navigationOptions: ({navigation}) => {
      if (navigation.state.index > 0) {
        return {
          tabBarVisible: false,
        };
      }
    },
  },
);

export default CompanyNavigator;
