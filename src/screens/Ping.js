import React from "react";
import { View, Text, Button } from "native-base";
import { Actions } from "react-native-router-flux";

export default class Ping extends React.Component {
  render() {
    return (
      <View>
        <Button onPress={() => Actions.tools()}>
          <Text>ping</Text>
        </Button>
      </View>
    );
  }
}