import React, { Component } from 'react'
import { getPriceByAmount } from '../../shared/helper'

export default class ProductPrice extends Component {
  render() {
    const { prices, selectedCurrency } = this.props
    const amount = getPriceByAmount(prices, selectedCurrency.label)
    return (
      <div className="product__price">
        <p className="product__price-title">PRICE:</p>
        <span>
          {selectedCurrency.label + ' '}
          {amount}
        </span>
      </div>
    )
  }
}
