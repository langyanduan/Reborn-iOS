import React from "react";
import { StyleSheet } from "react-native";
import { 
  Container,
  Content,
  View,
  Text,
  Button, 
  Icon,
  ListItem,
  Left,
  Body,
  Right,
  Separator,
  Input,
} from "native-base";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

import * as StorePromise from "../../storage";
import * as ConfigActions from "../../redux/config/action";
import { TemplateConfig } from "./template";

class ConfigDetail extends React.Component {
  static navigationOptions = ({navigation}) => {
    const { onPressShare } = navigation.state.params;
    return {
      headerRight: <Button transparent><Icon name="share" /></Button>,
    }
  }

  constructor(props) {
    super(props);

    this.onPressPreview = this.onPressPreview.bind(this);
    this.onPressEditTextMode = this.onPressEditTextMode.bind(this);
    this.onPressDuplicate = this.onPressDuplicate.bind(this);
    this.onPressShare = this.onPressShare.bind(this);
    this.onPressSave = this.onPressSave.bind(this);
    this.onPressDelete = this.onPressDelete.bind(this);

    this.state = {
      name: '',
      content: '',
      externalURL: '',
    };

    if (this.props.uuid) {
      StorePromise.fetchConfigDetial(this.props.uuid).then(values => {
        this.setState(values);
      });
    } else {
      const defaultContent = TemplateConfig;
      this.state = {
        name: Date.now().toString(),
        content: TemplateConfig,
        externalURL: ''
      };
    }
  }

  onPressPreview() {}
  onPressEditTextMode() {
    Actions.configEditor({
      content: this.state.content,
      modifyContent: (content) => this.setState({content})
    });
  }
  onPressDuplicate() {}
  onPressShare() { }
  onPressSave() {
    if (this.props.uuid) {
      this.props.modifyConfig(this.props.uuid, {
        name: this.state.name,
        content: this.state.content,
        externalURL: this.state.externalURL,
      })
    } else {
      this.props.addConfig({
        name: this.state.name,
        content: this.state.content,
        externalURL: this.state.externalURL,
      });
    }
    Actions.pop();
  }
  onPressDelete() {
    this.props.deleteConfig(this.props.uuid);
    Actions.pop();
  }

  render() {
    return (
      <Container>
        <Content>
          <Separator bordered noTopBorder />
          <View style={styles.section}>
            <ListItem>
              <Text style={styles.label}>Name</Text>
              <Input
                style={styles.input}
                placeholder="Required" 
                placeholderTextColor="#8F8E95" 
                value={this.state.name}
                onChangeText={(name) => this.setState({name})} 
              />
            </ListItem>
            {this.state.externalURL &&
            <ListItem style={{height: 50}}>
              <Left style={{flex: null}}>
                <Text>Source:</Text>
              </Left>
              <Body style={{flex: 1}}>
                <Text>https://github.com/a/b/asdfasflskajfklajsfjklsj</Text>
              </Body>
              <Right style={{flex: null}}>
                <Button small bordered>
                  <Text>Update</Text>
                </Button>
              </Right>
            </ListItem>
            }
            <ListItem last>
              <View>
                <Text>Create time: 2017/03/14 12:02:34</Text>
                <Text>Modify time: 2017/04/14 14:42:16</Text>
                <Text>Status: in used</Text> 
              </View>
            </ListItem>
          </View>
          <Separator bordered noTopBorder />
          <View style={styles.section}>
            <ListItem onPress={this.onPressPreview}>
              <Body>
                <Text>Preview</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem onPress={this.onPressEditTextMode}>
              <Body>
                <Text>Edit</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem last onPress={this.onPressDuplicate}>
              <Body>
                <Text>Duplicate</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </View>
          <Separator />
          <Button block primary style={styles.button} onPress={this.onPressSave}>
            <Text>Save</Text>
          </Button>
          {this.props.uuid &&
            <Button block danger style={styles.button} onPress={this.onPressDelete}>
              <Text>Delete</Text>
            </Button>
          }
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: 'white',
  },
  button: {
    marginHorizontal: 15,
    marginBottom: 20,
  },
  label: {
    width: 100,
  },
  input: {
    height: null,
    textAlign: 'right',
  },
});

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    addConfig: (values) => dispatch(ConfigActions.addConfig(values)),
    modifyConfig: (uuid, values) => dispatch(ConfigActions.modifyConfig(uuid, values)),
    deleteConfig: (uuid) => dispatch(ConfigActions.deleteConfig(uuid)),
  }
}

export default ConfigDetail = connect(mapStateToProps, mapDispatchToProps)(ConfigDetail);