import React from "react";
import { View, Text, Button, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import { Icon, Switch } from "native-base";

import ListItem from "../components/ListItem";

export default class Home extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerLeft: <Button title="scan" onPress={() => Actions.serverEditor()} />,
      headerRight: <Button title="add" onPress={() => Actions.serverEditor()} />,
    }
  }
  
  constructor(props) {
    super(props);

    this.state = {
      data: [
        "yourserver.com:8031",
        "yourserver.com:11111",
        "yourserver.com:12345",
        "yourserver.com:8031",
        "yourserver.com:8031",
        "yourserver.com:8031",
        "yourserver.com:8031",
        "yourserver.com:11111",
        "yourserver.com:12345",
        "yourserver.com:11111",
        "yourserver.com:12345",
        "yourserver.com:11111",
        "yourserver.com:12345",
        "yourserver.com:11111",
        "yourserver.com:12345",
      ]
    }
  }

  renderHeader() {
    return (
      <View style={headerStyles.container}>
        <View style={headerStyles.content}>
          <ListItem iconName="ios-add" title="Not Contect" rightView={<Switch />} hasSeparator />
          <ListItem iconName="ios-add" title="Routing Rules" subtitle="default" onPress={() => {}} hasArrow hasSeparator />
          <ListItem iconName="ios-add" title="PING test" onPress={() => {}} />
        </View>

        <View style={headerStyles.title}>
          <Text>CHOOSE A SERVER</Text>
          <Text>a</Text>
        </View>
      </View>
    );
  }

  renderFooter() {
    return (
      <ListItem 
        title="Add Server..." 
        hasArrow={true}
        style={{backgroundColor: 'white', borderBottomWidth: StyleSheet.hairlineWidth, borderColor: 'black'}} 
        onPress={() => Actions.serverEditor()} 
      />
    );
  }

  renderItem({item, index}) {
    return (
      <ListItem 
        title={item} 
        style={{backgroundColor: 'white'}} 
        hasArrow={true}
        hasSeparator={true}
        onPress={() => {}} 
      />
    );
  }

  render() {
    return (
      <FlatList 
        contentContainerStyle={{paddingTop: 30, paddingBottom: 30}}
        ListHeaderComponent={this.renderHeader}
        ListFooterComponent={this.renderFooter}
        data={this.state.data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={this.renderItem}
      />
    );
  }
}

const headerStyles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth, 
  },
  content: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  title: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    height: 30,
  },
});

