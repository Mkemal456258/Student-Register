import React, { Component } from 'react';
import {View} from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import Router from './src/Router';

class Main extends Component {
  
  render(){
    const store = createStore (reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
      <View style={{flex:1}}>
        <Router/>
      </View>
      </Provider>
    );
  }
}

export default Main;