import React from "react";
import { Text } from "react-native";
import PickerList from "../components/PickerList";

export default class Language extends React.Component {
  render() {
    return (
      <Picker items={['a', 'b', 'c']} selectedIndex={2} onPicker={(index, item) => console.log('' + index + ', ' + item)} />
      // <Text>Language</Text>
    );
  }
}