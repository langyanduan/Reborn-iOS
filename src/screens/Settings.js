import React from "react";
import { View, Text, SectionList, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import ListItem from "../components/ListItem";
import ItemSeparator from "../components/ItemSeparator";

export default class Settings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        { 
          title: 'General',
          data: [
            { title: 'Language', subtitle: 'Chinese', onPress: () => Actions.language() }
          ]
        },
        { 
          title: 'Advanced',
          data: [
            { title: 'Cert', subtitle: 'Chinese' },
            { title: 'Ping', subtitle: 'ICMP' },
            { title: 'Widge', subtitle: '' },
          ]
        },
        { 
          title: '',
          data: [
            { title: 'About', onPress: () => Actions.about() }
          ]
        },
      ]
    }

    this.renderItem = this.renderItem.bind(this);
    this.renderSectionHeader = this.renderSectionHeader.bind(this);
  }

  renderItem(info) {
    const item = info.item;
    const { title, subtitle, onPress } = item;
    return (
      <ListItem 
        onPress={onPress}
        style={{backgroundColor: 'white'}}
        title={title}
        subtitle={subtitle}
        hasArrow
      />
    );
  }

  renderSectionHeader(info) {
    const section = info.section;
    if (section.sectionIndex === this.state.sections.length - 1) {
      return <View style={{height: 30}} />
    }
    return (
      <View style={{height: 40, justifyContent: 'center'}}>
        <Text>hahaah</Text>
      </View>
    );
  }

  render() {
    const sections = this.state.sections.map((value, index) => {
      value.sectionIndex = index;
      return value;
    });
    return (
      <SectionList 
        SectionSeparatorComponent={() => <ItemSeparator stretch />}
        ItemSeparatorComponent={ItemSeparator}
        sections={sections}
        renderSectionHeader={this.renderSectionHeader}
        renderItem={this.renderItem}
        stickySectionHeadersEnabled={false}
      />
    );
  }
}