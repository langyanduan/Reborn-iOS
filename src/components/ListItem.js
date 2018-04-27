import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Icon } from "native-base";

const marginLeft = 16;
const marginRight = 10;

export default class ListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, style, subtitle, iconName, hasSeparator, hasArrow, onPress, rightView} = this.props;

    if (rightView) {
      var rightElement = React.cloneElement(rightView, {style: {marginRight: marginRight}});
    } else if (subtitle && hasArrow) {
      var rightElement = (
        <View style={{flexDirection: 'row', alignItems: 'center', marginRight: marginRight}}>
          <Text style={{margin: 8}}>{subtitle}</Text>
          <Icon name="ios-arrow-dropright" />
        </View>
      );
    } else if (subtitle) {
      var rightElement = <Text style={{marginRight: marginRight}}>{subtitle}</Text>;
    } else if (hasArrow) {
      var rightElement = <Icon style={{marginRight: marginRight}} name="ios-arrow-dropright" />;
    }

    const Wrapper = onPress ? TouchableOpacity : View;
    return (
      <Wrapper style={[styles.container, style]} onPress={onPress}>
        {iconName && <Icon style={styles.icon} name={iconName} />}
        <View style={[styles.content, hasSeparator ? styles.separator : {}]}>
          <Text>{title}</Text>
          {rightElement}
        </View>
      </Wrapper>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: marginLeft,
    fontSize: 14,
  },
  content: {
    marginLeft: marginLeft,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
  },
  separator: {
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  }
});

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  iconName: PropTypes.string,
  hasArrow: PropTypes.bool,
  hasSeparator: PropTypes.bool,
  onPress: PropTypes.func,
  rightComponent: PropTypes.element,
}
