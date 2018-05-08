import React from "react";
import { StyleSheet } from "react-native";
import { 
  Container, 
  Content, 
  Separator,
  ListItem,
  View,
  Text,
  Left,
  Body,
  Right,
  Icon, 
  Button, 
} from "native-base";
import { Actions } from "react-native-router-flux";

export default class Config extends React.Component {
  static navigationOptions = ({navigation}) => {
    const { onPressScanQRCode, onPressAddServer } = navigation.state.params;
    return {
      headerRight: <Button transparent onPress={() => Actions.configDetail()}><Icon name="add" /></Button>,
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      items: ['default'],
      // sections: [
      //   { data: ['Default'], title: 'Local' },
      //   { data: ['Add'], title: 'Remote' }
      // ]
    };

    this.onPressRestoreDefault = this.onPressRestoreDefault.bind(this);
    this.onPressImportiCloud = this.onPressImportiCloud.bind(this);
    this.onPressWifiUpload = this.onPressWifiUpload.bind(this);
    this.onPressDownloadURL = this.onPressDownloadURL.bind(this);
  }

  onPressRestoreDefault() {}
  onPressImportiCloud() {}
  onPressWifiUpload() {}
  onPressDownloadURL() {}

  renderFiles() {
    const items = [ 1, 2, 3 ];
    if (items.length == 0) {
      return (
        <ListItem icon last onPress={() => Actions.configDetail()}>
          <Left>
            <Icon name="add" />
          </Left>
          <Body>
            <Text>Add Configuration</Text>
          </Body>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
      );
    }

    return items.map((value, index, values) => {
      return (
        <ListItem icon key={index} last={index == values.length - 1} onPress={() => {}}>
          <Left>
            {index == 0 ? <Icon name="checkmark" style={{color: 'green', fontSize: 25, textAlign: 'center'}} /> : <Icon />}
          </Left>
          <Body>
            <Text>config name</Text>
          </Body>
          <Right style={{paddingRight: 0}}>
            <Button transparent onPress={() => Actions.configDetail()}>
              <Icon name="information-circle" />
            </Button>
          </Right> 
        </ListItem>
      );
    });
  }

  render() {
    return (
      <Container>
        <Content>
          <Separator bordered noTopBorder />
          <View style={styles.section}>
            <ListItem icon onPress={this.onPressRestoreDefault}>
              <Left>
                <Icon name="undo" />
              </Left>
              <Body>
                <Text>Restore Default Config</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon onPress={this.onPressImportiCloud}>
              <Left>
                <Icon name="cloud" />
              </Left>
              <Body>
                <Text>Import From iCloud</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon onPress={this.onPressDownloadURL}>
              <Left>
                <Icon name="download" />
              </Left>
              <Body>
                <Text>Download From URL</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon last onPress={this.onPressWifiUpload}>
              <Left>
                <Icon name="wifi" />
              </Left>
              <Body>
                <Text>WiFi Upload</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </View>
          <Separator />
          <Separator bordered noTopBorder>
            <Text>LOCAL FILES</Text>
          </Separator>
          <View style={styles.section}>
            {this.renderFiles()}
          </View>
          <Separator />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: 'white'
  }
});
