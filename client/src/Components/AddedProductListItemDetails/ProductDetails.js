import React, { Component } from 'react'
import { getPriceByAmount } from '../../shared/helper'

export default class ProductDetails extends Component {
  render() {
    const { product, selectedCurrency } = this.props

    const amount = getPriceByAmount(
      product.productPrices,
      selectedCurrency.label,
    )
    return (
      <div className="cart__item-desc">
        <p className="item__title">{product.productBrand}</p>
        <p className="item__name">{product.productName}</p>
        <h3 className="item__price">
          {selectedCurrency.symbol}
          {amount}
        </h3>

        <ul className="item__params">
          {product.productAttrs.map(({ attributeName, attributeItemValue }) => {
            return (
              <li key={attributeName}>
                {attributeName}:
                {attributeName !== 'Color' ? (
                  <span>{attributeItemValue}</span>
                ) : (
                  <span
                    className="color"
                    style={{ backgroundColor: attributeItemValue }}
                  ></span>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
