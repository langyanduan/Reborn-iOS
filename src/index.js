import React from "react";
import { View } from "react-native";
import { Router } from "react-native-router-flux";
import { StyleProvider, Root } from "native-base";
import { Provider } from "react-redux";

import AppNavigator from "./navigators/AppNavigator";
import getTheme from '../native-base-theme/components'
import configureStore from './redux/store'

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <StyleProvider style={getTheme()}>
            <Router scenes={AppNavigator} />
          </StyleProvider>
        </Root>
      </Provider>
    );
  }
}