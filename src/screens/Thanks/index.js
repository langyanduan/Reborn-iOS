import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import {
  LICENSE_GCDWEBSERVER, 
  LICENSE_HTTP_PARSER, 
  LICENSE_KSCRASH, 
  LICENSE_LIBEV, 
  LICENSE_LWIP, 
  LICENSE_MARS, 
  LICENSE_MAXMINDDB, 
  LICENSE_MBEDTLS, 
  LICENSE_PROTOBUF, 
  LICENSE_SODIUM, 
  LICENSE_WCDB,
} from "./license";

const projects = [
  { title: "lwip", license: LICENSE_LWIP },
  { title: "libev", license: LICENSE_LIBEV },
  { title: "mars", license: LICENSE_MARS },
  { title: "http-parser", license: LICENSE_HTTP_PARSER },
  { title: "mbedtls", license: LICENSE_MBEDTLS },
  { title: "sodium", license: LICENSE_SODIUM },
  { title: "maxminddb", license: LICENSE_MAXMINDDB },
  { title: "protobuf", license: LICENSE_PROTOBUF },

  { title: "KSCrash", license: LICENSE_KSCRASH },
  { title: "WCDB", license: LICENSE_WCDB },
  { title: "GCDWebServer", license: LICENSE_GCDWEBSERVER },

  { title: "react-native" },
  { title: "prop-types" },
  { title: "react-nativation" },
  { title: "react-native-router-flux" },
  { title: "redux" },
  { title: "react-redux" },
  { title: "redux-saga" },
  { title: "native-base" },
]

export default class Thanks extends React.Component {

  renderItem({item, index}) {
    return (
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.license}>{item.license ? item.license.trim() : ''}</Text>
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
  },
  title: {
    marginBottom: 3, 
    fontSize: 16, 
    fontWeight: 'bold',
  },
  license: {
    fontFamily: 'menlo',
    fontSize: 12,
    color: '#444444',
  }
});