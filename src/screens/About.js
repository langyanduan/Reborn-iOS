import React from "react";
import { View, ScrollView, Text, Image, StyleSheet } from "react-native";
import ListItem from "../components/ListItem";

export default class About extends React.Component {
  render() {
    return (
      <ScrollView>
        <Image style={{height: 100}} />
        <View style={styles.section}>
          <ListItem title="版本" subtitle="1.0.2(412)" />
        </View>

        <View style={[styles.section, {marginTop: 30}]}>
          <ListItem iconName="ios-add" title="在 App Store 评分" hasArrow hasSeparator />
          <ListItem iconName="ios-add" title="在 Twitter 关注我" hasArrow hasSeparator />
          <ListItem iconName="ios-add" title="Telegram" hasArrow hasSeparator />
          <ListItem iconName="ios-add" title="Reborn for macOS" hasArrow />
        </View>

        <Text style={{marginTop: 30, height: 30, lineHeight: 30}}>致谢</Text>
        <View style={[styles.section, {marginTop: 10}]}>
          <ListItem iconName="ios-add" title="Reborn" hasArrow hasSeparator />
          <ListItem iconName="ios-add" title="RebornTunnel" hasArrow hasSeparator />
          <ListItem iconName="ios-add" title="RebornToday" hasArrow />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  section: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: 'black',
  }
});