import React from "react";
import PropTypes from "prop-types";
import { FlatList, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "native-base";

export default class PickerList extends React.Component {
  constructor(props) {
    super(props);

    this.renderItem = this.renderItem.bind(this);
  }

  onPress(index) {
    const { onPicker, items, extraData } = this.props;
    onPicker(index, items[index], extraData ? extraData[index] : undefined)
  }

  renderItem({item, index}) {
    const { selectedIndex } = this.props;
    return (
      <TouchableOpacity style={styles.item} onPress={this.onPress.bind(this, index)}>
        <Text>{item}</Text>
        {selectedIndex == index && <Icon name="ios-add" />}
      </TouchableOpacity>
    );
  }

  render() {
    const { items } = this.props;
    return (
      <FlatList 
        ItemSeparatorComponent={() => <View style={{height: StyleSheet.hairlineWidth, backgroundColor: 'black', marginLeft: 16}} />}
        ListHeaderComponent={() => <View style={{height: StyleSheet.hairlineWidth, backgroundColor: 'black'}} />}
        ListFooterComponent={() => <View style={{height: StyleSheet.hairlineWidth, backgroundColor: 'black'}} />}
        contentContainerStyle={{paddingVertical: 20}}
        style={styles.container}
        data={items}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  item: {
    paddingHorizontal: 16,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 35,
  }
});

PickerList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedIndex: PropTypes.number,
  extraData: (props, propName, componentName) => {
    if (!props.hasOwnProperty(propName)) { return null; }
    if (!(props.extraData instanceof Array) || props.extraData.length != props.items.length) {
      return new Error('extraData must be array and some length with items');
    }
    return null;
  },
  onPicker: PropTypes.func.isRequired,
}