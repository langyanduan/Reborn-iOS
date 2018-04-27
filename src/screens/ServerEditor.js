import React from "react";
import { StyleSheet, View, ScrollView, Text, Button } from "react-native";
import { Actions } from "react-native-router-flux";

import ListItem from "../components/ListItem";
import ListInputItem from "../components/ListInputItem";

export default class ServerEditor extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: "Add Server",
      headerRight: <Button title="add2" onPress={() => Actions.pop()} />,
    }
  }

  render() {
    const FormShadowsocks = () => {
      return [
        <ListInputItem title="server" />,
        <ListInputItem title="port" />,
        <ListItem title="方法" />,
        <ListInputItem title="password" />,
      ];
    }

    const FormSocks = () => {
      return [
        <ListInputItem title="server" />,
        <ListInputItem title="port" />,
        <ListInputItem title="account" />,
        <ListInputItem title="password" />,
      ];
    }
    const FormHTTP = FormSocks;

    const Form = () => FormShadowsocks().map((element, index) => React.cloneElement(element, {key: index.toString()}))

    return (
      <ScrollView contentContainerStyle={{paddingVertical: 20}}>
        <View style={styles.section}>
          <ListItem 
            title="Type"
            subtitle="Shadowsocks"
            hasArrow
          />
        </View>
        <View style={[styles.section, {marginTop: 30}]}>
          <Form />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  section: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'black',
  },
});