import React from "react";
import { View, Text, Button, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import { Icon, Switch } from "native-base";

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
          <View style={headerStyles.cellRow}>
            <Icon name="ios-add" style={headerStyles.cellIcon} />
            <View style={[headerStyles.cellSeparator, headerStyles.cellContent, {justifyContent: 'space-between'}]}>
              <Text>Not Connect</Text>
              <Switch style={{marginRight: 8}} />
            </View>
          </View>
          <View style={headerStyles.cellRow}>
            <Icon name="ios-add" style={headerStyles.cellIcon} />
            <View style={[headerStyles.cellSeparator, headerStyles.cellContent, {justifyContent: 'flex-end'}]}>
              <Text  style={{position: 'absolute', left: 0}} >Routing Rules</Text>
              <Text>default</Text>
              <Icon name="ios-arrow-dropright" style={{marginHorizontal: 8}} />
            </View>
          </View>
          <View style={headerStyles.cellRow}>
            <Icon name="ios-add" style={headerStyles.cellIcon} />
            <View style={headerStyles.cellContent}>
              <Text>PING test</Text>
            </View>
          </View>
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
      <TouchableOpacity style={footerStyles.container} onPress={() => Actions.serverEditor()}>
        <Text>Add Server...</Text>
      </TouchableOpacity>
    );
  }

  renderItem({item, index}) {
    return (
      <TouchableOpacity style={itemStyles.cellRow}>
        <Text>{item}</Text>
        <View style={{position: 'absolute', left: 10, bottom: 0, right: 0, height: StyleSheet.hairlineWidth, backgroundColor: 'black'}} />
      </TouchableOpacity>
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
  cellRow: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
  },
  cellIcon: {
    marginLeft: 16,
    marginRight: 14,
  },
  cellContent: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  cellSeparator: {
    borderColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth, 
  },
  title: {
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    height: 30,
  },
});

const itemStyles = StyleSheet.create({
  container: {
  },
  cellRow: {
    height: 40,
    backgroundColor: 'white',
    paddingLeft: 16,
    justifyContent: 'center',
  }
});

const footerStyles = StyleSheet.create({
  container: {
    borderColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth, 
    backgroundColor: 'white',
    height: 40,
    paddingLeft: 16,
    justifyContent: 'center',
  }
});