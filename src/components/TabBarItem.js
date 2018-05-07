import React from "react";
import { StyleSheet } from "react-native";
import { View, Icon, Text } from "native-base";

export default class TabBarItem extends React.Component { 
  render () { 
    const color = this.props.focused ? 'blue' : 'gray' 
    return ( 
      <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', alignSelf: 'center', justifyContent: 'flex-end'}}>
        <Icon 
          style={[{color: color}, styles.icon]} 
          name={this.props.iconName} 
        />
        <Text style={[{color: color}, styles.label]}>
          {this.props.titleName}
        </Text>
      </View>
    ) 
  } 
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column', 
    alignItems: 'center', 
    alignSelf: 'center', 
    justifyContent: 'center',
  },
  icon: {
    width: 20, 
    height: 20, 
    fontSize: 20,
    textAlign: 'center',
  },
  label: {
    width: 80, 
    height: 20, 
    lineHeight: 20,
    fontSize: 10,
    textAlign: 'center',
  }
});