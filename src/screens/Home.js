import React from "react";
import { Platform } from "react-native";
import { Left, Body, Right } from "native-base";
import { 
  Container, 
  Content, 
  ListItem, 
  Icon, 
  View, 
  Text, 
  Switch, 
  Separator, 
  Button
} from "native-base";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";

class Home extends React.Component {
  static navigationOptions = ({navigation}) => {
    const { onPressScanQRCode, onPressAddServer } = navigation.state.params;
    return {
      headerLeft: <Button transparent><Icon name="qr-scanner" /></Button>,
      headerRight: <Button transparent onPress={() => Actions.serverEditor()}><Icon name="add" /></Button>,
    }
  }

  constructor(props) {
    super(props);

    this.onPressGlobalRouting = this.onPressGlobalRouting.bind(this);
    this.onPressAddServer = this.onPressAddServer.bind(this);
    this.onPressScanQRCode = this.onPressScanQRCode.bind(this);
  }

  componentDidMount() {
    this.props.navigation.setParams({
      onPressAddServer: this.onPressAddServer,
      onPressScanQRCode: this.onPressScanQRCode,
    });
  }

  onPressGlobalRouting() { }
  onPressAddServer() {}
  onPressScanQRCode() {}

  renderServers() {
    if (this.props.serverList.length == 0) {
      return (
        <ListItem last icon onPress={() => Actions.serverEditor()}>
          <Left>
            <Icon name="add" />
          </Left>
          <Body>
            <Text>Add Server...</Text>
          </Body>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
      );
    }

    return this.props.serverList.map((value, index, values) => {
      const { server, port, uuid } = value;
      return (
        <ListItem key={uuid} last={index == values.length - 1} icon onPress={() => Actions.serverEditor({uuid: uuid})}>
          <Left>
            { uuid == this.props.current ?
              <Icon name="checkmark" style={{color: 'green', fontSize: 30}} /> :
              <Icon />
            }
          </Left>
          <Body>
            <Text>{server + ':' + port}</Text>
          </Body>
          <Right style={{paddingRight: 0}}>
            <Button transparent>
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
          <View style={{backgroundColor: 'white'}}>
            <ListItem icon>
              <Left>
                <Icon name="globe" />
              </Left>
              <Body>
                <Text>Not Connected</Text>
              </Body>
              <Right>
                <Switch value={false} onTintColor="#50B948" />
              </Right>
            </ListItem>
            <ListItem icon onPress={this.onPressGlobalRouting}>
              <Left>
                <Icon name="pulse" />
              </Left>
              <Body>
                <Text>Global Routing</Text>
              </Body>
              <Right>
                <Text>Config</Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem last icon onPress={() => {}}>
              <Left>
                <Icon name="speedometer" />
              </Left>
              <Body>
                <Text>Ping Test</Text>
              </Body>
            </ListItem>

          </View>
          <Separator />
          <Separator bordered noTopBorder>
            <Text>CHOOSE A SERVER</Text>
          </Separator>
          <View style={{backgroundColor: 'white'}}>
            {this.renderServers()}
          </View>
          <Separator />
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  ...state.server
})

const mapDispatchToProps = dispatch => {
  return { }
}

export default Home = connect(mapStateToProps, mapDispatchToProps)(Home);