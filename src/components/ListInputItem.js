import React from "react";
import PropTypes from "prop-types";
import { View, TextInput, Text, StyleSheet } from "react-native";

export default class ListInputItem extends React.Component {
  render() {
    const { title, placeholder, value, onChangeText } = this.props;
    return (
      <View style={styles.container}>
        <Text>{title}</Text>
        <TextInput style={{flex: 1}} placeholder={placeholder} value={value} onChangeText={onChangeText} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    height: 40
  }
});

ListInputItem.propTypes = {
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
}