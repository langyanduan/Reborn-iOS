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
import { PropTypes } from "prop-types";

export default class Picker extends React.Component {
  constructor(props) {
    super(props);

    this.renderRow = this.renderRow.bind(this);
    this.onPress = this.onPress.bind(this);
  }

  onPress(item) {
    this.props.onPicker(item);
    Actions.pop();
  }

  renderRow(item, section, row) {
    return (
      <ListItem last={parseInt(row) == this.props.items.length - 1} onPress={() => this.onPress(item)}>
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

Picker.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string,
  onPicker: PropTypes.func.isRequired,
}
