import React, { Component } from 'react'
import parse from 'html-react-parser'
import ProductParams from './ProductParams'
import ProductPrice from './ProductPrice'

export default class ProductInfo extends Component {
  render() {
    const { product, selectedCurrency } = this.props
    const description =
      product.description !== undefined && parse(product.description)
    return (
      <div className="product__info">
        <h3 className="product__info-subtitle">{product.brand}</h3>
        <h2 className="product__info-title">{product.name}</h2>
        <ProductParams product={product} />
        <ProductPrice
          prices={product.prices}
          selectedCurrency={selectedCurrency}
        />
        <button
          className="btn primary add-btn"
          disabled={!product.inStock}
          // onClick={() => {
          //   addCartItem({
          //     id: product.id,
          //     itemName: product.name,
          //     itemBrand: product.brand,
          //     itemGallery: product.gallery,
          //     itemPrice: product.prices,
          //     params: [...this.props.activeParams],
          //   })
          // }}
        >
          {product.inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
        </button>
        <div className="product__desc">{description}</div>
      </div>
    )
  }
}
