import React from "react";
import { StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import { 
  Container,
  Content,
  View,
  Text,
  Icon,
  ListItem,
  Left,
  Body,
  Right,
  Separator,
 } from "native-base";

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container>
        <Content>
          <Separator bordered noTopBorder>
            <Text>GENERAL</Text>
          </Separator>
          <View style={styles.section}>
            <ListItem last onPress={() => Actions.language()}>
              <Body>
                <Text>Language</Text>
              </Body>
              <Right style={styles.right}>
                <Text style={styles.subtitle}>English</Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </View>

          <Separator />
          <Separator bordered noTopBorder>
            <Text>ADVANCED</Text>
          </Separator>
          <View style={styles.section}>
            <ListItem>
              <Body>
                <Text>Certificate</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Body>
                <Text>Ping</Text>
              </Body>
              <Right style={styles.right}>
                <Text style={styles.subtitle}>ICMP</Text>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem last>
              <Body>
                <Text>Widge</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </View>
          <Separator bordered noTopBorder />
          <View style={styles.section}>
            <ListItem last onPress={() => Actions.about()}>
              <Body>
                <Text>About</Text>
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