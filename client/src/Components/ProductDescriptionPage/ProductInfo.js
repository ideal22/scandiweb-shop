import React, { Component } from 'react'
import parse from 'html-react-parser'
import { generateProductDataToAdd } from '../../shared/helper'

export default class ProductInfo extends Component {
  addProduct = () => {
    const data = generateProductDataToAdd(
      this.props.product,
      this.props.selectedAttrs,
    )
    this.props.setAddedProducts(data)
  }
  render() {
    const { product, children } = this.props
    const description =
      product.description !== undefined && parse(product.description)

    return (
      <div className="product__info">
        <h3 className="product__info-subtitle">{product.brand}</h3>
        <h2 className="product__info-title">{product.name}</h2>
        {/* To Avoid Props Drilling */}
        {children}
        <button
          className="btn primary add-btn"
          disabled={!product.inStock}
          onClick={() => this.addProduct()}
        >
          {product.inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
        </button>
        <div className="product__desc">{description}</div>
      </div>
    )
  }
}
