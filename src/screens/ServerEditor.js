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
} from "native-base";

export default class ServerEditor extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: "Add Server",
      headerRight: <Button transparent style={{}}><Text>Done</Text></Button>,
    }
  }

  render() {
    const FormShadowsocks = () => {
      return [
          <ListItem>
            <Text>Method</Text>
          </ListItem>,
          <ListItem>
            <Text>Password</Text>
          </ListItem>,
          <ListItem last>
            <Left>
              <Text>TCP Fast Open</Text>
            </Left>
            <Right>
              <Switch />
            </Right>
          </ListItem>,
      ];
    }

    const FormSocks = () => {
      return [
          <ListItem>
            <Text>Account</Text>
          </ListItem>,
          <ListItem last>
            <Text>Password</Text>
          </ListItem>,
      ];
    }
    const FormHTTP = FormSocks;
    const Form = () => FormShadowsocks().map((value, index) => React.cloneElement(value, {key: index}));

    return (
      <Container>
        <Content>
          <Separator bordered noTopBorder />
          <View style={styles.section}>
            <ListItem last onPress={() => {}}>
              <Left>
                <Text>Type</Text>
              </Left>
              <Right style={styles.right}>
                <Text style={styles.subtitle}>haha</Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </View>
          <Separator bordered noTopBorder />
          <View style={styles.section}>
            <ListItem>
              <Text>Server</Text>
            </ListItem>
            <ListItem>
              <Text>Port</Text>
            </ListItem>
            <Form />
          </View>
          <Separator />
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
    color: '#8F8E95',
  }
});