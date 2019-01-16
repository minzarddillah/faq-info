import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './Header.style';

export class Header extends Component {
  state = {}
  
  render() {
    return (
      <View>
        <TouchableOpacity>
          <Icon name="md-menu" style={styles.iconLeftMenu} />
        </TouchableOpacity>
        <Image
          source={require('../../img/bg_boostinfo.png')}
          style={styles.headerImage}
          resizeMode="cover"
        />
      </View>
    );
  }
}

export default Header