import React, {Component} from 'react';

import {Text, View, TouchableOpacity} from 'react-native';

export default class Perfil extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('TabNavigator')}>
          <Text>Perfil</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
