import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const projects = [
  { "title": "lwip" },
  { "title": "libev" },
  { "title": "mars" },
  { "title": "http-parser" },
  { "title": "mbedtls" },
  { "title": "sodium" },
  { "title": "maxminddb" },
  { "title": "protobuf" },

  { "title": "KSCrash" },
  { "title": "WCDB" },

  { "title": "react-native" },
  { "title": "prop-types" },
  { "title": "react-nativation" },
  { "title": "react-native-router-flux" },
  { "title": "redux" },
  { "title": "react-redux" },
  { "title": "redux-saga" },
  { "title": "native-base" },
]

export default class Thanks extends React.Component {

  renderItem({item, index}) {
    return (
      <View>
        <Text style={{marginBottom: 3, fontSize: 16, fontWeight: 'bold'}}>{item.title}</Text>
        <Text>license</Text>
      </View>
    );
  }

  render() {
    return (
      <FlatList 
        style={styles.container}
        contentContainerStyle={{paddingVertical: 10, paddingHorizontal: 8}}
        renderItem={this.renderItem}
        ItemSeparatorComponent={() => <View style={{height: 20}} />}
        keyExtractor={(item, index) => index.toString()}
        data={projects}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  }
});