/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  View,
} = React;

var BookBrowser = React.createClass({
  render: function() {
    return (
      <View></View>
    );
  }
});


AppRegistry.registerComponent('BookBrowser', () => BookBrowser);
