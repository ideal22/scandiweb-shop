import React, { Component } from 'react'
import { CHECKOUT_MESSAGE } from '../../shared/constants'

const taxPercentage = 0.21

export default class ProductOrder extends Component {
  onCheckout = () => {
    this.props.checkout()
    alert(CHECKOUT_MESSAGE)
  }
  render() {
    const { totalCount, selectedCurrency, totalAmount } = this.props
    const tax = totalAmount * taxPercentage
    return (
      <div className="product-order">
        <p className="order__details-title">
          Tax 21%:
          <span className="order__details-amount">
            {`${tax.toFixed(2)} ${selectedCurrency.symbol}`}
          </span>
        </p>
        <p className="order__details-title">
          Qunatity: <span className="order__details-amount">{totalCount}</span>
        </p>
        <p className="order__details-title">
          Total:
          <span className="order__details-amount">
            {`${totalAmount.toFixed(2)} ${selectedCurrency.symbol}`}
          </span>
        </p>
        <button className="order-btn" onClick={this.onCheckout}>
          Order
        </button>
      </div>
    )
  }
}
