import React from "react";
import { View, Text, SectionList, StyleSheet } from "react-native";
import { Icon } from "native-base";

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

    this.renderListHeader = this.renderListHeader.bind(this);
    this.renderSectionHeader = this.renderSectionHeader.bind(this);
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

  renderListHeader() {
    return (
      <View style={styles.listHeader}>
        <ListItem iconName="ios-add" title="Restore Default Config" onPress={this.onPressRestoreDefault} hasSeparator hasArrow />
        <ListItem iconName="ios-add" title="Import From Cloud..." onPress={this.onPressImportCloud} hasSeparator hasArrow />
        <ListItem iconName="ios-add" title="WiFi Upload" onPress={this.onPressWifiUpload} hasSeparator hasArrow />
        <ListItem iconName="ios-add" title="Test Rule" onPress={this.onPressTestRule} hasArrow />
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
    const section = info.section.sectionIndex;
    const row = info.index;
    const item = info.item;
    return (
      <ListItem 
        style={{backgroundColor: 'white'}}
        iconName="ios-add"
        title="Add Config..."
        onPress={() => {}}
        hasArrow
      />
    );
  }

  render() {
    const sections = this.state.sections.map((value, index) => {
      value.sectionIndex = index;
      return value;
    });
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
