import React from "react";
import { StyleSheet } from "react-native";
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
  Image,
} from "native-base";
import { Actions } from "react-native-router-flux";


export default class About extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <View style={styles.logo}>
          </View>
          <Separator bordered noTopBorder />
          <View style={styles.section}>
            <ListItem last>
              <Body>
                <Text>Version</Text>
              </Body>
              <Right>
                <Text style={styles.version}>1.0.2(412)</Text>
              </Right>
            </ListItem>
          </View>
          <Separator bordered noTopBorder />
          <View style={styles.section}>
            <ListItem icon>
              <Left>
                <Icon name="heart" />
              </Left>
              <Body>
                <Text>Rate/review in App Store</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="add" />
              </Left>
              <Body>
                <Text>Follow me on Twitter</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon>
              <Left>
                <Icon name="add" />
              </Left>
              <Body>
                <Text>Telegram</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem icon last>
              <Left>
                <Icon name="add" />
              </Left>
              <Body>
                <Text>Reborn for macOS</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </View>
          <Separator />
          <Separator bordered noTopBorder>
            <Text>ACKNOWLEDGEMENTS</Text>
          </Separator>
          <View style={styles.section}>
            <ListItem onPress={() => Actions.thanks()}>
              <Body>
                <Text>Reborn</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Body>
                <Text>RebornTunnel</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem last>
              <Body>
                <Text>RebornToday</Text>
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
  version: {
    color: 'gray'
  },
  logo: {
    height: 100
  },
  section: {
    backgroundColor: 'white'
  },

});