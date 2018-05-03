import React from "react";
import { ScrollView, TouchableOpacity, StyleSheet, View, Text, Button } from "react-native";
// import { Button } from "native-base";
import ListItem from "../components/ListItem";
import ListInputItem from "../components/ListInputItem";

export default class ConfigDetail extends React.Component {

  static navigationOptions = ({navigation}) => {
    const { onPressShare } = navigation.state.params;
    return {
      headerRight: <Button title="share" onPress={() => onPressShare() } />,
    }
  }

  constructor(props) {
    super(props);

    this.onPressPreview = this.onPressPreview.bind(this);
    this.onPressEditTextMode = this.onPressEditTextMode.bind(this);
    this.onPressDuplicate = this.onPressDuplicate.bind(this);
    this.onPressShare = this.onPressShare.bind(this);
    this.onPressDelete = this.onPressDelete.bind(this);
  }

  componentDidMount() {
    this.props.navigation.setParams({onPressShare: this.onPressShare})
  }

  onPressPreview() {}
  onPressEditTextMode() {}
  onPressDuplicate() {}
  onPressShare() { }
  onPressDelete() {}

  render() {
    return (
      <ScrollView contentContainerStyle={{paddingVertical: 20}}>
        <View style={styles.section}>
          <ListInputItem title="Config Name" />
          <View>
            <Text>create time: 2017/03/14 12:02:34</Text>
            <Text>last modify time: 2017/04/14 14:42:16</Text>
            <Text>source: https://github.com/a/b/</Text>
            <Text>status: in used</Text>
          </View>
        </View>

        <View style={[styles.section, {marginTop: 30}]}>
          <ListItem title="Preview in Parser" onPress={this.onPressPreview} hasSeparator hasArrow />
          <ListItem title="Edit in Text Mode" onPress={this.onPressEditTextMode} hasSeparator hasArrow />
          <ListItem title="Duplicate Config" onPress={this.onPressDuplicate} hasArrow />
        </View>

        <TouchableOpacity style={[styles.section, {marginTop: 30}]} onPress={this.onPressDelete}>
          <Text style={styles.delete}>Delete</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  section: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  delete: {
    height: 40,
    lineHeight: 40,
    color: 'red',
    textAlign: 'center',
    backgroundColor: 'white'
  }
});