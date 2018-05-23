import React from "react";
import { StyleSheet } from "react-native";
import { 
  Container,
  Content,
  View,
  Textarea,
  Button,
  Icon,
  Text,
} from "native-base";
import ConfigEditorView from "../components/ConfigEditorView";
import { Actions } from "react-native-router-flux";

class ConfigEditor extends React.Component {
  static navigationOptions = ({navigation}) => {
    const { onPressSave } = navigation.state.params;
    return {
      headerRight: <Button transparent onPress={onPressSave}><Text>Done</Text></Button>,
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      initialValue: this.props.content,
      value: this.props.content,
    };

    this.onChangeText = this.onChangeText.bind(this);
    this.onPressSave = this.onPressSave.bind(this);
  }

  componentDidMount() {
    this.props.navigation.setParams({
      onPressSave: this.onPressSave
    });
  }

  onPressSave() {
    this.props.modifyContent(this.state.value);
    Actions.pop();
  }

  onChangeText(event) {
    this.setState({
      value: event.nativeEvent.value,
    });
  }

  render() {
    return (
      <Container>
        <ConfigEditorView 
          style={styles.textArea}
          value={this.state.initialValue}
          onChangeText={this.onChangeText}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textArea: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default ConfigEditor;