import React from "react";
import { StyleSheet } from "react-native";
import { 
  Container,
  Content,
  View,
  Text,
  Button, 
  Icon,
  ListItem,
  Left,
  Body,
  Right,
  Separator,
} from "native-base";

export default class ConfigDetail extends React.Component {
  static navigationOptions = ({navigation}) => {
    const { onPressShare } = navigation.state.params;
    return {
      headerRight: <Button transparent><Icon name="share" /></Button>,
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <Separator bordered noTopBorder />
          <View style={styles.section}>
            <ListItem>
              <Left>
                <Text>Name</Text>
              </Left>
            </ListItem>
            <ListItem>
              <Body>
                <Text>source: https://github.com/a/b/</Text>
              </Body>
              <Right>
                <Button small bordered>
                  <Text>Update</Text>
                </Button>
              </Right>
            </ListItem>
            <ListItem last>
              <View>
                <Text>create time: 2017/03/14 12:02:34</Text>
                <Text>last modify time: 2017/04/14 14:42:16</Text>
                <Text>status: in used</Text> 
              </View>
            </ListItem>
          </View>
          <Separator bordered noTopBorder />
          <View style={styles.section}>
            <ListItem>
              <Body>
                <Text>Preview</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Body>
                <Text>Edit in Text Mode</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem last>
              <Body>
                <Text>Duplicate Config</Text>
              </Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </View>
          <Separator />
          <Button block danger style={{marginHorizontal: 15}}>
            <Text>Delete</Text>
          </Button>
          <Separator />
        </Content>
      </Container>
    );
  }
  // constructor(props) {
  //   super(props);

  //   this.onPressPreview = this.onPressPreview.bind(this);
  //   this.onPressEditTextMode = this.onPressEditTextMode.bind(this);
  //   this.onPressDuplicate = this.onPressDuplicate.bind(this);
  //   this.onPressShare = this.onPressShare.bind(this);
  //   this.onPressDelete = this.onPressDelete.bind(this);
  // }

  // componentDidMount() {
  //   this.props.navigation.setParams({onPressShare: this.onPressShare})
  // }

  // onPressPreview() {}
  // onPressEditTextMode() {}
  // onPressDuplicate() {}
  // onPressShare() { }
  // onPressDelete() {}

  // render() {
  //   return (
  //     <ScrollView contentContainerStyle={{paddingVertical: 20}}>
  //       <View style={styles.section}>
  //         <ListInputItem title="Config Name" />
  //         <View>
  //           <Text>create time: 2017/03/14 12:02:34</Text>
  //           <Text>last modify time: 2017/04/14 14:42:16</Text>
  //           <Text>source: https://github.com/a/b/</Text>
  //           <Text>status: in used</Text>
  //         </View>
  //       </View>

  //       <View style={[styles.section, {marginTop: 30}]}>
  //         <ListItem title="Preview in Parser" onPress={this.onPressPreview} hasSeparator hasArrow />
  //         <ListItem title="Edit in Text Mode" onPress={this.onPressEditTextMode} hasSeparator hasArrow />
  //         <ListItem title="Duplicate Config" onPress={this.onPressDuplicate} hasArrow />
  //       </View>

  //       <TouchableOpacity style={[styles.section, {marginTop: 30}]} onPress={this.onPressDelete}>
  //         <Text style={styles.delete}>Delete</Text>
  //       </TouchableOpacity>
  //     </ScrollView>
  //   );
  // }
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: 'white',
  },
});