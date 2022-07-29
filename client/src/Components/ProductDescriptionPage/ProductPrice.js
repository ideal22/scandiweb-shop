import React, { Component } from 'react'

export default class ProductPrice extends Component {
  render() {
    const { prices, selectedCurrency } = this.props
    const { amount } =
      prices !== undefined &&
      prices.find((pr) => pr.currency.label === selectedCurrency.label)
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
