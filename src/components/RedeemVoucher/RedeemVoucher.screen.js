import React, { Component, Fragment } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import styles from './RedeemVoucher.style';
import SelectOptions from '../../modules/SelectOptions/SelectOptions.screen';
import CardVoucher from '../../modules/CardVoucher/CardVoucher.screen';
import suppliers from './voucherDummy';

const line = () => (
  <View
    style={{
      borderTopWidth: 1,
      borderColor: '#E0E0E0'
    }}
  />
)
export class RedeemVoucher extends Component {
  state = {
    categoryId: '',
    cart: {
      totalItems: 0,
      totalPoints: 0
    }
  }

  onCategoryChange = (value) => {
    this.setState({
      categoryId: value
    });
  }

  goToCheckoutPage = () => {
    const { cart } = this.state;
    this.props.navigation.navigate( 'CheckoutRedeemVoucher', { cart })
  }

  renderFooter = () => {
    const { cart } = this.state;
    if (cart.totalItems > 0) {
      return (
        <View style={styles.containerFooter}>
          <View style={styles.footer}>
            <Text style={styles.textCheckout}>{cart.totalItems} items | {cart.totalPoints} pts</Text>
            <TouchableOpacity onPress={this.goToCheckoutPage}>
              <Text style={styles.textButtonCheckout}>CHECKOUT</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }
  }

  findVouchers = () => {
    const { categoryId } = this.state;
    let vouchers = [];
    suppliers.forEach(supplier => {
      if (supplier.id === categoryId) {
        vouchers = supplier.vouchers
      }
    });
    return vouchers;
  }

  _keyExtractor = (item, index) => index.toString();

  addToCart = async (item) => {
    const { cart, categoryId } = this.state;
    if (cart[categoryId]) {
      if (cart[categoryId][item.id]) {
        await this.setState({
          cart: {
            ...cart,
            [categoryId]: {
              ...cart[categoryId],
              [item.id]: cart[categoryId][item.id] + 1
            },
            totalItems: cart.totalItems + 1,
            totalPoints: cart.totalPoints + item.voucherValue
          }
        })
      } else {
        await this.setState({
          cart: {
            ...cart,
            [categoryId]: {
              ...cart[categoryId],
              [item.id]: 1
            },
            totalItems: cart.totalItems + 1,
            totalPoints: cart.totalPoints + item.voucherValue
          }
        })
      }
    } else {
      await this.setState({
        cart: {
          ...cart,
          [categoryId]: {
            [item.id]: 1
          },
          totalItems: cart.totalItems + 1,
          totalPoints: cart.totalPoints + item.voucherValue
        }
      })
    }
    console.log(Object.values(this.state.cart))
  }

  removeToCart = async (item) => {
    const { cart, categoryId } = this.state;
    if (cart[categoryId][item.id] - 1 > 0) {
      await this.setState({
        cart: {
          ...cart,
          [categoryId]: {
            ...cart[categoryId],
            [item.id]: cart[categoryId][item.id] - 1
          },
          totalItems: cart.totalItems - 1,
          totalPoints: cart.totalPoints - item.voucherValue
        }
      });
    } else {
      if (Object.values(cart[categoryId]).length === 1) {
        delete cart[categoryId]
        await this.setState({
          cart: {
            ...cart,
            totalItems: cart.totalItems - 1,
            totalPoints: cart.totalPoints - item.voucherValue
          }
        })
      } else {
        delete cart[categoryId][item.id];
        await this.setState({
          cart: {
            ...cart,
            totalItems: cart.totalItems - 1,
            totalPoints: cart.totalPoints - item.voucherValue
          }
        });
      }
    }
    console.log(Object.values(this.state.cart))
  }

  _renderItem = ({ item }) => {
    const { cart, categoryId } = this.state;
    return (
      <Fragment>
        <CardVoucher addToCart={this.addToCart} item={item} cart={cart[categoryId]} removeToCart={this.removeToCart} />
        {line()}
      </Fragment>
    );
  }

  render() {
    const vouchers = this.findVouchers();
    return (
      <View  style={styles.superContainer}>
        <ScrollView>
          <View>
            <View style={styles.container}>
              <Text style={styles.title}>Select Item and Redeem with Points </Text>
              <Text style={styles.subTitle}>You can only redeem once on redemption period</Text>
              <SelectOptions
                data={suppliers}
                onValueChange={this.onCategoryChange}
                selectedValue={this.state.categoryId}
                label={'Supplier'}
              />
            </View>
            {line()}
            <FlatList
              data={vouchers}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
              extraData={this.state}
            />
          </View>
        </ScrollView>
        {this.renderFooter()}
      </View>
    );
  }
}

export default RedeemVoucher;
