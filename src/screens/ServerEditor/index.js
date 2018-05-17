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
} from "native-base";
import { connect } from "react-redux";
import * as ServerAction from "../../redux/server/action";

const TYPE_SHADOWSOCKS      = 'Shadowsocks';
const TYPE_SHADOWSOCKSR     = 'ShadowsocksR';
const TYPE_SOCKS5           = 'Socks5';
const TYPE_SOCKS5_OVER_TLS  = 'Socks5 over TLS';
const TYPE_HTTP             = 'HTTP';
const TYPE_HTTPS            = 'HTTPS';

// Stream ciphers
const METHOD_AES_128_CTR = 'aes-128-ctr';
const METHOD_AES_192_CTR = 'aes-192-ctr';
const METHOD_AES_256_CTR = 'aes-256-ctr';
const METHOD_AES_128_CFB = 'aes-128-cfb';
const METHOD_AES_192_CFB = 'aes-192-cfb';
const METHOD_AES_256_CFB = 'aes-256-cfb';
const METHOD_CAMELLIA_128_CFB = 'camellia-128-cfb';
const METHOD_CAMELLIA_192_CFB = 'camellia-192-cfb';
const METHOD_CAMELLIA_256_CFB = 'camellia-256-cfb';
const METHOD_BF_CFB   = 'bf-cfb';
const METHOD_RC4_MD5  = 'rc4-md5';
const METHOD_SALSA20  = 'salsa20';
const METHOD_CHACHA20 = 'chacha20';
const METHOD_CHACHA20_IETF = 'chacha20-ietf';
// AEAD ciphers
const METHOD_AES_128_GCM = 'aes-128-gcm';
const METHOD_AES_192_GCM = 'aes-192-gcm';
const METHOD_AES_256_GCM = 'aes-256-gcm';
const METHOD_CHACHA20_IETF_POLY1305 = 'chacha20-ietf-poly1305';

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
      type: TYPE_SHADOWSOCKS,
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
    this.props.addServer('1234567', {
      type: this.state.type,
      server: this.state.server,
      port: this.state.port,
      method: this.state.method,
      account: this.state.account,
      password: this.state.password,
    })
    Actions.pop();
  }

  onPressDelete() {
    Actions.pop();
  }

  onPressServerType() {
    Actions.picker({
      items: [ TYPE_SHADOWSOCKS, TYPE_SHADOWSOCKSR, TYPE_HTTP, TYPE_HTTPS, TYPE_SOCKS5, TYPE_SOCKS5_OVER_TLS ],
      selected: this.state.type,
      onPicker: (type) => this.setState({type})
    });
  }

  onPressEncryptMethod() {
    Actions.picker({
      items: [ METHOD_AES_128_CTR, METHOD_AES_192_CTR, METHOD_AES_256_CTR, METHOD_AES_128_CFB, METHOD_AES_192_CFB, METHOD_AES_256_CFB, METHOD_CAMELLIA_128_CFB, METHOD_CAMELLIA_192_CFB, METHOD_CAMELLIA_256_CFB, METHOD_BF_CFB, METHOD_RC4_MD5, METHOD_SALSA20, METHOD_CHACHA20, METHOD_CHACHA20_IETF, METHOD_AES_128_GCM, METHOD_AES_192_GCM, METHOD_AES_256_GCM, METHOD_CHACHA20_IETF_POLY1305 ],
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
    switch (this.state.type) {
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
                <Text style={styles.subtitle}>{this.state.type}</Text>
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

const mapStateToProps = state => {
  return { }
}

const mapDispatchToProps = dispatch => {
  return { 
    addServer: (uuid, values) => dispatch(ServerAction.addServer(uuid, values))
  }
}

export default ServerEditor = connect(mapStateToProps, mapDispatchToProps)(ServerEditor);