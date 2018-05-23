import React from "react";
import { StyleSheet } from "react-native";
import { 
  Container,
  Content,
  View,
  Textarea,
} from "native-base";
import ConfigEditorView from "../components/ConfigEditorView";

class ConfigEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialValue: this.props.content,
      value: '',
    };

    this.onChangeText = this.onChangeText.bind(this);
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