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
            <ListItem>
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
      // <ScrollView>
      //   <Image style={{height: 100}} />
      //   <View style={styles.section}>
      //     <ListItem title="版本" subtitle="1.0.2(412)" />
      //   </View>

      //   <View style={[styles.section, {marginTop: 30}]}>
      //     <ListItem iconName="ios-add" title="在 App Store 评分" hasArrow hasSeparator />
      //     <ListItem iconName="ios-add" title="在 Twitter 关注我" hasArrow hasSeparator />
      //     <ListItem iconName="ios-add" title="Telegram" hasArrow hasSeparator />
      //     <ListItem iconName="ios-add" title="Reborn for macOS" hasArrow />
      //   </View>

      //   <Text style={{marginTop: 30, height: 30, lineHeight: 30}}>致谢</Text>
      //   <View style={[styles.section, {marginTop: 10}]}>
      //     <ListItem iconName="ios-add" title="Reborn" hasArrow hasSeparator />
      //     <ListItem iconName="ios-add" title="RebornTunnel" hasArrow hasSeparator />
      //     <ListItem iconName="ios-add" title="RebornToday" hasArrow />
      //   </View>
      // </ScrollView>
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