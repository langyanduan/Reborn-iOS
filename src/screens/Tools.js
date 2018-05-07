import React from "react";
import { StyleSheet } from "react-native";
import { 
  Container, 
  Content, 
  ListItem, 
  Icon, 
  Left,
  Body,
  Right,
  View, 
  Text, 
  Switch, 
  Separator, 
  Button 
} from "native-base";

export default class Tools extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Content>
          <Separator bordered noTopBorder />
          <View style={styles.section}>
            <ListItem icon>
              <Left>
                <Icon name="bluetooth" />
              </Left>
              <Body>
                <Text>routing table</Text>
              </Body>
            </ListItem>
            <ListItem last icon>
              <Left>
                <Icon name="bluetooth" />
              </Left>
              <Body>
                <Text>ifconfig</Text>
              </Body>
            </ListItem>
          </View>
          <Separator bordered noTopBorder />
          <View style={styles.section}>
            <ListItem icon onPress={() => {}}>
              <Left>
                <Icon name="plane" />
              </Left>
              <Body>
                <Text>ping</Text>
              </Body>
              <Right>
                <Switch value={false} onTintColor="#50B948" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="wifi" />
              </Left>
              <Body>
                <Text>tcping</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="wifi" />
              </Left>
              <Body>
                <Text>traceroute</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon last>
              <Left>
                <Icon name="wifi" />
              </Left>
              <Body>
                <Text>dig</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
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
  }
});