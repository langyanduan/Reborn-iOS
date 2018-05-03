import React from "react";
import { ScrollView, View, Text } from "react-native";

export default class Tools extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text>dig</Text>
        <Text>ping</Text>
        <Text>tcping</Text>
        <Text>ifconfig</Text>
        <Text>route table</Text>
      </ScrollView>
    );
  }
}