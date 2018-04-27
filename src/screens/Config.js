import React from "react";
import { View, Text, SectionList, StyleSheet } from "react-native";

import ListItem from "../components/ListItem";

export default class Config extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        { data: ['Default'], title: 'Local' },
        { data: ['Add'], title: 'Remote' }
      ]
    };

    this.renderHeader = this.renderHeader.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.onPressRestoreDefault = this.onPressRestoreDefault.bind(this);
    this.onPressImportCloud = this.onPressImportCloud.bind(this);
    this.onPressWifiUpload = this.onPressWifiUpload.bind(this);
    this.onPressTestRule = this.onPressTestRule.bind(this);
  }

  onPressRestoreDefault() {}
  onPressImportCloud() {}
  onPressWifiUpload() {}
  onPressTestRule() {}

  renderHeader() {
    return (
      <View style={styles.header}>
        <ListItem iconName="ios-add" title="Restore Default Config" onPress={this.onPressRestoreDefault} hasSeparator hasArrow />
        <ListItem iconName="ios-add" title="Import From Cloud..." onPress={this.onPressImportCloud} hasSeparator hasArrow />
        <ListItem iconName="ios-add" title="WiFi Upload" onPress={this.onPressWifiUpload} hasSeparator hasArrow />
        <ListItem iconName="ios-add" title="Test Rule" onPress={this.onPressTestRule} hasArrow />
      </View>
    );
  }

  renderItem(info) {
    const section = info.section.sectionIndex;
    const row = info.index;
    const item = info.item;
    return (
      <View style={{height: 20, borderColor: 'black', borderWidth: 1}}></View>
    );
  }

  render() {
    const sections = this.state.sections.map((value, index) => {
      value.sectionIndex = index;
      return value;
    });
    return (
      <SectionList
        ListHeaderComponent={this.renderHeader}
        contentContainerStyle={{paddingVertical: 20}}
        renderItem={this.renderItem}
        sections={sections}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 20,
  }
});