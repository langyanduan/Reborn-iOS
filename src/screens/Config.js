import React from "react";
import { View, Text, SectionList, StyleSheet } from "react-native";
import { Icon, Button } from "native-base";
import { Actions } from "react-native-router-flux";

import ListItem from "../components/ListItem";

export default class Config extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ['default'],
      // sections: [
      //   { data: ['Default'], title: 'Local' },
      //   { data: ['Add'], title: 'Remote' }
      // ]
    };

    this.renderListHeader = this.renderListHeader.bind(this);
    this.renderSectionHeader = this.renderSectionHeader.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.onPressRestoreDefault = this.onPressRestoreDefault.bind(this);
    this.onPressImportiCloud = this.onPressImportiCloud.bind(this);
    this.onPressWifiUpload = this.onPressWifiUpload.bind(this);
    this.onPressDownloadURL = this.onPressDownloadURL.bind(this);
  }

  onPressRestoreDefault() {}
  onPressImportiCloud() {}
  onPressWifiUpload() {}
  onPressDownloadURL() {}

  renderListHeader() {
    return (
      <View style={styles.listHeader}>
        <ListItem iconName="ios-add" title="Restore Default Config" onPress={this.onPressRestoreDefault} hasSeparator hasArrow />
        <ListItem iconName="ios-add" title="Import From iCloud" onPress={this.onPressImportiCloud} hasSeparator hasArrow />
        <ListItem iconName="ios-add" title="Download From URL" onPress={this.onPressDownloadURL} hasSeparator hasArrow />
        <ListItem iconName="ios-add" title="WiFi Upload" onPress={this.onPressWifiUpload} hasArrow />
      </View>
    );
  }

  renderSectionHeader() {
    return (
      <View style={styles.sectionHeader}>
        <Text>Header</Text>
      </View>
    );
  }

  renderItem(info) {
    const row = info.index;
    const item = info.item;
    return (
      <ListItem 
        style={{backgroundColor: 'white'}}
        iconName="ios-add"
        title="Default Config"
        onPress={() => {}}
        rightView={<Button style={{width: 40, height: 40, backgroundColor: 'red'}} onPress={() => Actions.configDetail() } />}
      />
    );
  }

  render() {
    const sections = [{data: this.state.items}]
    return (
      <SectionList
        ListHeaderComponent={this.renderListHeader}
        SectionSeparatorComponent={() => <View style={{backgroundColor: 'black', height: StyleSheet.hairlineWidth}} />}
        contentContainerStyle={{paddingVertical: 20}}
        renderSectionHeader={this.renderSectionHeader}
        renderItem={this.renderItem}
        sections={sections}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

const styles = StyleSheet.create({
  listHeader: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
  },
  sectionHeader: {
    height: 30,
    marginTop: 20,
    justifyContent: 'center',
  },
});
