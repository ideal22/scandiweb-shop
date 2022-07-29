import React, { Component } from 'react'
import emptyCart from '../../assets/emptyCard.png'

export default class CartModalEmpty extends Component {
  render() {
    return (
      <div className="cart__empty">
        <div className="cart__empty-img">
          <img src={emptyCart} alt="" />
        </div>
        <p>Your Cart is Empty!</p>
      </div>
    )
  }
}
