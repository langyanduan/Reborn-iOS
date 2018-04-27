import React from "react";
import { View, ScrollView, Text, Button } from "react-native";
import { Actions } from "react-native-router-flux";

import ListItem from "../components/ListItem";

export default class ServerEditor extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: "Add Server",
      headerRight: <Button title="add2" onPress={() => Actions.pop()} />,
    }
  }

  render() {
    return (
      <ScrollView>
        <View>
          <Text>ServerEditor</Text>
        </View>
        <View>
          <Text>ServerEditor</Text>
        </View>
        <View>
          <Text>ServerEditor</Text>
        </View>
      </ScrollView>
    );
  }
}