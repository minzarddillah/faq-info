import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { NavigationActions } from 'react-navigation';

import styles from './CheckoutRedeemVoucher.style';

const line = () => (
  <View
    style={{
      borderTopWidth: 1,
      borderColor: '#E0E0E0'
    }}
  />
)

export class CheckoutRedeemVoucher extends Component {
  state = {
    cart: this.props.navigation.state.params.cart
  }

  handleRedeem = () => {
    const { navigation } = this.props;
    Alert.alert(
      'Rdeem Successful',
      'You have succesfully redeem your points to Electronic Voucher',
      [
        {
          text: 'OK',
          onPress: () => {
            
          }
        }
      ],
      { cancelable: false }
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          <View style={[styles.container, styles.supplier]}>
            <Image
              source={{ uri: 'https://via.placeholder.com/100x100' }}
              style={{width: 90, height: 70, marginRight: 20}}
            />
            <Text>Supplier</Text>
          </View>
          {line()}
          <View style={[styles.container, styles.spaceBetween]}>
            <Text>Item</Text>
            <View style={{ alignItems: 'flex-end' }}>
              <Text>Voucher(s) Name</Text>
              <Text>x 7</Text>
              <Text>Voucher(s) Name</Text>
              <Text>x 7</Text>
            </View>
          </View>
          {line()}
          <View style={[styles.container, styles.spaceBetween]}>
            <Text>Total Redeemption</Text>
            <Text>2100 pts</Text>
          </View>
        </ScrollView>
        <View style={styles.containerFooter}>
          <TouchableOpacity onPress={this.handleRedeem}>
            <View style={styles.footer}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>REDDEM</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default CheckoutRedeemVoucher;
