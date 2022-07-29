import React, { Component } from 'react'

export default class CartModalProductListItem extends Component {
  render() {
    const {
      product,
      selectedCurrency,
      increaseProduct,
      decreaseProduct,
      deleteProduct,
    } = this.props
    return (
      <div className="cart__item">
        <button
          className="remove-btn"
          onClick={() => {
            deleteProduct(product.id)
          }}
        >
          remove
        </button>
        <div className="cart__item-desc">
          <p className="item__title">{product.branch}</p>
          <p className="item__name">{product.name}</p>
          <h3 className="item__price">
            {selectedCurrency.symbol}
            {
              product.prices.find(
                (price) => price.currency.label === selectedCurrency.label,
              ).amount
            }
          </h3>

          <ul className="item__params">
            {product.attributes.map((param, idx) => {
              return (
                <li key={idx}>
                  {param.name}:
                  {param.name !== 'Color' ? (
                    <span>{param.items[0].value}</span>
                  ) : (
                    <span
                      className="color"
                      style={{ backgroundColor: param.items[0].value }}
                    ></span>
                  )}
                </li>
              )
            })}
          </ul>
          {/* <span className="item__params">{product.items[0].param}</span> */}
        </div>
        <div className="cart__item-img">
          <div className="item__amount">
            <button
              className="btn"
              onClick={() => {
                increaseProduct(product.id)
              }}
            >
              +
            </button>
            <span>{product.count}</span>
            <button
              className="btn"
              onClick={() => {
                decreaseProduct(product.id)
              }}
              disabled={product.count === 1}
            >
              -
            </button>
          </div>
          <div className="item__img">
            <img src={product.gallery[0]} alt="" />
          </div>
        </div>
      </div>
    )
  }
}
