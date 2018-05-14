import React from "react";
import { 
  Container,
  Content,
  View,
  List,
  ListItem,
  Text,
  Separator,
  Left,
  Body,
  Right,
  Icon,
} from "native-base";
import { Actions } from "react-native-router-flux";

export default class Picker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: ["1", "2", "3", "4"],
      selected: "3"
    }

    this.renderRow = this.renderRow.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onPress(item) {
    Actions.pop();
  }

  renderRow(item, section, row) {
    return (
      <ListItem last={parseInt(row) == this.state.items.length - 1} onPress={() => this.onPress(item)}>
        <Body>
          <Text>{item}</Text>
        </Body>
        {item == this.props.selected && <Right><Icon name="checkmark" style={{color: 'green'}} /></Right>}
      </ListItem>
    );
  }

  render() {
    return (
      <Container>
        <Content>
          <Separator bordered noTopBorder />
          <List 
            style={{backgroundColor: 'white'}}
            dataArray={this.props.items}
            renderRow={this.renderRow}
            />
          <Separator bordered noBottomBorder />
        </Content>
      </Container>
    );
  }
}

PickerList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string,
  onPicker: PropTypes.func.isRequired,
}
