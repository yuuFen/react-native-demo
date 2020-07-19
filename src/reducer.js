import {combineReducers} from 'redux';
import {createNavigationReducer} from 'react-navigation-redux-helpers';

import AppContainer from './index';

import message from './Message/reducer'
const navReducer = createNavigationReducer(AppContainer);

export default appReducer = combineReducers({
  nav: navReducer,
  message
});
