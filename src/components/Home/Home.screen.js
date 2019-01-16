import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export class Home extends Component {
  render() {
    return (
      <View>
        <Button 
          title="To Quest Info" 
          onPress={() => {
            this.props.navigation.navigate('QuestInfo')
          }} 
        />
        <Button
          title="To Electronic Voucher"
          onPress={() => {
            this.props.navigation.navigate('RedeemVoucher')
          }}
        />

      </View>
    )
  }
}

export default Home