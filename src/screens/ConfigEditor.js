import React from "react";
import { StyleSheet } from "react-native";
import { 
  Container,
  Content,
  View,
  Textarea,
} from "native-base";

class ConfigEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: this.props.content
    };
  }

  render() {
    return (
      <Container>
        <Textarea 
          style={styles.textArea}
          value={this.state.value}
          onChangeText={(value) => this.setState({content: value})}
        />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textArea: {
    flex: 1,
    backgroundColor: 'white',
    fontFamily: 'menlo',
    fontSize: 14,
  },
});

export default ConfigEditor;