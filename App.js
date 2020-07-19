/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, View} from 'react-native';
import AppContainer from './src';
import {
  createReduxContainer,
  createReactNavigationReduxMiddleware,
} from 'react-navigation-redux-helpers';
import {createStore, applyMiddleware} from 'redux';
import {Provider, connect} from 'react-redux';
import appReducer from './src/reducer';

const AppReduxContainer = createReduxContainer(AppContainer);
const AppNavReduxMiddleWare = createReactNavigationReduxMiddleware(
  (state) => state.nav,
);
const mapStateToProps = (state) => ({
  state: state.nav,
});

const AppWithNavState = connect(mapStateToProps)(AppReduxContainer);
const store = createStore(appReducer, applyMiddleware(AppNavReduxMiddleWare));

const App = () => {
  return (
    <Provider store={store} style={{flex: 1}}>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor="rgba(0, 0, 0, 0)"
      />
      <AppWithNavState />
    </Provider>
  );
};

export default App;
