import React from "react";
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
          <View style={{backgroundColor: 'white'}}>
            <ListItem icon onPress={() => {}}>
              <Left>
                <Icon active name="plane" />
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
                <Icon active name="wifi" />
              </Left>
              <Body>
                <Text>tcping</Text>
              </Body>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon active name="wifi" />
              </Left>
              <Body>
                <Text>traceroute</Text>
              </Body>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon active name="wifi" />
              </Left>
              <Body>
                <Text>dig</Text>
              </Body>
              <Right>
                <Icon active name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon active name="bluetooth" />
              </Left>
              <Body>
                <Text>routing table</Text>
              </Body>
            </ListItem>
            <ListItem last icon>
              <Left>
                <Icon active name="bluetooth" />
              </Left>
              <Body>
                <Text>ifconfig</Text>
              </Body>
            </ListItem>
          </View>
          <Separator />
        </Content>
      </Container>
    );
  }
}