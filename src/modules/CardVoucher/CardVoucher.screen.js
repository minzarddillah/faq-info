import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

import styles from './CardVoucher.style';

export class CardVoucher extends Component {

  handleOnPressAdd = async () => {
    const { item, addToCart, cart } = this.props;
    let tmp = cart ? cart[item.id] : 0
    if ((tmp ? tmp : 0) + 1 <= item.totalVouchers) {
      addToCart(item);
    } else {
      alert('stock abis bro')
    }
  }

  handleOnPressRemove = () => {
    const { item, removeToCart } = this.props;
    removeToCart(item)
  }

  render() {
    const { item, cart } = this.props;
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: 'https://via.placeholder.com/50x50' }}
          style={styles.imageVoucher}
        />
        <View style={styles.content}>
          <View>
            <Text>{item.name}</Text>
            <Text>Sub Title</Text>
          </View>
          {
            !(cart ? cart[item.id] : 0 ) ?
            <TouchableOpacity style={styles.containerButton} onPress={this.handleOnPressAdd}>
              <Text style={styles.titleButton}>ADD</Text>
              <Icon name="add" style={styles.icon} />
            </TouchableOpacity> :
            <View style={[styles.containerButton, { backgroundColor: 'white', justifyContent: 'space-between' }]}>
              <TouchableOpacity onPress={this.handleOnPressRemove}>
                <Icon name="md-remove" style={styles.iconButton}/>
              </TouchableOpacity>
              <Text style={styles.textButton}>{cart && cart[item.id]}</Text>
              <TouchableOpacity onPress={this.handleOnPressAdd}>
                <Icon name="md-add" style={styles.iconButton}/>
              </TouchableOpacity>
            </View>
          }
          
        </View>
      </View>
    );
  }
}

export default CardVoucher;
