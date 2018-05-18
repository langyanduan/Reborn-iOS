import React from "react";
import { StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import { 
  Container,
  Content,
  View,
  Text,
  Button,
  Icon,
  Separator,
  ListItem,
  Left,
  Body,
  Right,
  Switch,
  Input,
  Toast,
} from "native-base";
import { connect } from "react-redux";

import * as ServerActions from "../../redux/server/action";
import { isValidServer } from "./verify";
import { 
  METHOD_RC4_MD5, 
  ALL_SHADOWSOCKS_METHODS, 
  TYPE_HTTP, 
  TYPE_HTTPS, 
  TYPE_SOCKS5, 
  TYPE_SOCKS5_OVER_TLS, 
  TYPE_SHADOWSOCKS, 
  TYPE_SHADOWSOCKSR, 
  ALL_SERVER_TYPES 
} from "./constant";

class ServerEditor extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: "Add Server",
      headerRight: <Button transparent><Icon name="share" /></Button>,
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      serverType: TYPE_SHADOWSOCKS,
      server: '',
      port: '',
      method: METHOD_RC4_MD5,
      account: '',
      password: '',
      secureTextEntry: true,
    }

    this.onPressToggleSecureTextEntry = this.onPressToggleSecureTextEntry.bind(this);
    this.onPressDelete = this.onPressDelete.bind(this);
    this.onPressSave = this.onPressSave.bind(this);
    this.onPressServerType = this.onPressServerType.bind(this);
    this.onPressEncryptMethod = this.onPressEncryptMethod.bind(this);
  }

  onPressToggleSecureTextEntry() {
    this.setState((preState) => ({secureTextEntry: !preState.secureTextEntry}));
  }

  onPressSave() {
    const server = {
      serverType: this.state.serverType,
      server: this.state.server,
      port: this.state.port,
      method: this.state.method,
      account: this.state.account,
      password: this.state.password,
    };

    const error = isValidServer(server);
    if (error) {
      Toast.show({text: error, textStyle: { textAlign: 'center' }});
      return;
    }

    this.props.updateServer(this.props.uuid, server);
    Actions.pop();
  }

  onPressDelete() {
    this.props.deleteServer(this.props.uuid);
    Actions.pop();
  }

  onPressServerType() {
    Actions.picker({
      items: [ TYPE_SHADOWSOCKS, TYPE_SHADOWSOCKSR, TYPE_HTTP, TYPE_HTTPS, TYPE_SOCKS5, TYPE_SOCKS5_OVER_TLS ],
      selected: this.state.serverType,
      onPicker: (serverType) => this.setState({serverType})
    });
  }

  onPressEncryptMethod() {
    Actions.picker({
      items: ALL_SHADOWSOCKS_METHODS,
      selected: this.state.method,
      onPicker: (method) => this.setState({method})
    });
  }

  renderShadowsocks() {
    return [
      <ListItem key="method" onPress={this.onPressEncryptMethod}>
        <Left>
          <Text>Method</Text>
        </Left>
        <Right style={[styles.right, {flex: null}]}>
          <Text style={styles.subtitle}>{this.state.method}</Text>
          <Icon name="arrow-forward" />
        </Right>
      </ListItem>,
      <ListItem key="password" style={{paddingVertical: 0, height: 50, paddingRight: 0}}>
        <Left>
          <Text style={styles.label}>Password</Text>
          <Input 
            style={styles.input} 
            placeholder="required" 
            placeholderTextColor="#8F8E95" 
            secureTextEntry={this.state.secureTextEntry} 
            value={this.state.password}
            onChangeText={(password) => this.setState({password})}
          />
        </Left>
        <Right style={{paddingRight: 0, paddingLeft: 0, flex: null}}>
          <Button transparent onPress={this.onPressToggleSecureTextEntry}>
            <Icon active={!this.state.secureTextEntry} name="eye" />
          </Button>
        </Right>
      </ListItem>,
      <ListItem key="TFO" last>
        <Left>
          <Text>TCP Fast Open</Text>
        </Left>
        <Right>
          <Switch />
        </Right>
      </ListItem>,
    ];
  }

  renderSocksOrHTTP() {
    return [
      <ListItem key="account">
        <Text style={styles.label}>Account</Text>
        <Input 
          style={styles.input} 
          placeholder="Optional" 
          placeholderTextColor="#8F8E95" 
          value={this.state.account}
          onChangeText={(account) => this.setState({account})}
        />
      </ListItem>,
      <ListItem last key="password" style={{paddingVertical: 0, height: 50, paddingRight: 0}}>
        <Left>
          <Text style={styles.label}>Password</Text>
          <Input 
            style={styles.input} 
            placeholder="required" 
            placeholderTextColor="#8F8E95" 
            secureTextEntry={this.state.secureTextEntry} 
            value={this.state.password}
            onChangeText={(password) => this.setState({password})}
          />
        </Left>
        <Right style={{paddingRight: 0, paddingLeft: 0, flex: null}}>
          <Button transparent onPress={this.onPressToggleSecureTextEntry}>
            <Icon active={!this.state.secureTextEntry} name="eye" />
          </Button>
        </Right>
      </ListItem>,
    ];
  }

  render() {
    let formElement = null;
    switch (this.state.serverType) {
      case TYPE_HTTP:
      case TYPE_HTTPS:
      case TYPE_SOCKS5:
      case TYPE_SOCKS5_OVER_TLS: {
        formElement = this.renderSocksOrHTTP();
        break;
      }
      default: {
        formElement = this.renderShadowsocks();
        break;
      }
    }

    return (
      <Container>
        <Content>
          <Separator bordered noTopBorder />
          <View style={styles.section}>
            <ListItem last onPress={this.onPressServerType}>
              <Left>
                <Text>Type</Text>
              </Left>
              <Right style={[styles.right, {flex: null}]}>
                <Text style={styles.subtitle}>{this.state.serverType}</Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </View>
          <Separator bordered noTopBorder />
          <View style={styles.section}>
            <ListItem>
              <Text style={styles.label}>Server</Text>
              <Input 
                style={styles.input} 
                placeholder="Domain or IP Address" 
                placeholderTextColor="#8F8E95" 
                value={this.state.server}
                onChangeText={(server) => this.setState({server})} 
              />
            </ListItem>
            <ListItem>
              <Text style={styles.label}>Port</Text>
              <Input 
                style={styles.input} 
                keyboardType="numeric" 
                placeholder="1~65535" 
                placeholderTextColor="#8F8E95" 
                value={this.state.port}
                onChangeText={(port) => this.setState({port})} 
                />
            </ListItem>
            {formElement}
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
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  subtitle: {
    marginRight: 10,
    color: '#222222',
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

const updateServer = (uuid, values) => {
  if (uuid) {
    return ServerActions.modifyServer(uuid, values);
  } else {
    return ServerActions.addServer(values);
  }
}

const mapStateToProps = state => {
  return { }
}

const mapDispatchToProps = dispatch => {
  return { 
    updateServer: (uuid, values) => dispatch(updateServer(uuid, values)),
    deleteServer: (uuid) => dispatch(ServerActions.deleteServer(uuid)),
  }
}

export default ServerEditor = connect(mapStateToProps, mapDispatchToProps)(ServerEditor);