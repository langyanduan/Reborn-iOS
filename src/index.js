import React from "react";
import { View } from "react-native";
import { Router } from "react-native-router-flux";
import { StyleProvider } from "native-base";

import AppNavigator from "./navigators/AppNavigator";
import getTheme from '../native-base-theme/components'

export default class App extends React.Component {
  render() {
    return (
      <StyleProvider style={getTheme()}>
        <Router scenes={AppNavigator} />
      </StyleProvider>
    );
  }
}