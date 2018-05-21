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
} from "native-base";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

import * as StorePromise from "../storage";
import * as ConfigActions from "../redux/config/action";

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
      const defaultContent = '';
      this.state = {
        name: 'aaa',
        content: defaultContent,
        externalURL: ''
      };
    }
  }

  onPressPreview() {}
  onPressEditTextMode() {
    Actions.configEditor({
      content: this.state.content,
      uuid: this.props.uuid,
    });
  }
  onPressDuplicate() {}
  onPressShare() { }
  onPressSave() {
    if (this.props.uuid) {

    } else {
      this.props.addConfig({
        name: 'ahah',
        content: 'zzz',
        externalURL: 'https://github.com',
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
              <Left>
                <Text>Name</Text>
              </Left>
            </ListItem>
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
            <ListItem>
              <Body>
                <Text>Preview</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Body>
                <Text>Edit in Text Mode</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem last>
              <Body>
                <Text>Duplicate Config</Text>
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