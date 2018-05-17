import React from "react";
import { View } from "react-native";
import { Router } from "react-native-router-flux";
import { StyleProvider } from "native-base";
import { Provider } from "react-redux";

import AppNavigator from "./navigators/AppNavigator";
import getTheme from '../native-base-theme/components'
import configureStore from './redux/store'
import localStorage from "./storage";

const store = configureStore();

localStorage.syncDataToServerState();
localStorage.syncDataToServerState();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme()}>
          <Router scenes={AppNavigator} />
        </StyleProvider>
      </Provider>
    );
  }
}