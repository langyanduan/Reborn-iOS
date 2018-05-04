import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";

export default class ItemSeparator extends React.Component {
  render() {
    const { stretch, lineColor, backgroundColor, marginLeft, marginRight } = this.props;
    if (stretch) {
      return <View style={{backgroundColor: lineColor, height: StyleSheet.hairlineWidth}} />
    }

    const styles = StyleSheet.create({
      container: {
        backgroundColor: backgroundColor,
        height: StyleSheet.hairlineWidth,
      },
      line: {
        flex: 1,
        alignSelf: 'stretch',
        marginLeft: marginLeft,
        marginRight: marginRight,
        backgroundColor: lineColor,
      }
    });

    return (
      <View style={styles.container}>
        <View style={styles.line} />
      </View>
    );
  }
}

ItemSeparator.propTypes = {
  lineColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  marginLeft: PropTypes.number,
  marginRight: PropTypes.number,
  stretch: PropTypes.bool,
}
ItemSeparator.defaultProps = {
  lineColor: 'black',
  backgroundColor: 'white',
  marginLeft: 16,
  marginRight: 0,
}
