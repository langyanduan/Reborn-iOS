import React from "react";
import { View } from "react-native";
import { Router } from "react-native-router-flux";
import AppNavigator from "./navigators/AppNavigator";

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Router
          scenes={AppNavigator} 
        />
      </View>
    );
  }
}