/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  TextInput,
} = React;

var BookBrowser = React.createClass({
  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.headline}>BookBrowser</Text>
        <Text style={styles.label}>Find books containing</Text>
        <TextInput
          style={styles.textInput}
          placeholder="e.g. Javascript or Mobile"
          returnKeyType="search"
          enablesReturnKeyAutomatically="true"
          onEndEditing={ event => console.log(event.nativeEvent.text) }
        />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Math.random() > 0.5 ? '#5AC8FA' : '#4CD964'
  },
  headline: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 28
  },
  label: {
    fontSize: 24,
    fontWeight: 'normal',
    color: '#FFF',
    marginBottom: 8
  },
  textInput: {
    borderWidth: 0.5,
    borderColor: '#8E8E93',
    backgroundColor: '#FFF',
    height: 40,
    marginLeft: 60,
    marginRight: 60,
    padding: 8
  }
});
AppRegistry.registerComponent('BookBrowser', () => BookBrowser);
