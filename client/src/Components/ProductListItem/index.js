import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CartIcon from '../../assets/CartIcon'
import {
  getTotalCount,
  setAddedProducts,
} from '../../store/slices/addProductSlice'

class ProductListItem extends Component {
  render() {
    const { product, selectedCurrency } = this.props
    const { amount } = product.prices.find(
      (pr) => pr.currency.label === selectedCurrency.label,
    )
    return (
      <div className={`productBlock ${product.inStock ? 'out-of-stock' : ''}`}>
        <Link to={`/product-page/${product.id}`}>
          <div className="productBlock__img">
            <img src={product.gallery[0]} alt="" />
            {product.inStock && (
              <div className="productBlock__stock">OUT OF STOCK</div>
            )}
          </div>
        </Link>
        <button
          className="productBlock__btn"
          onClick={() => this.props.addProduct(product)}
        >
          <CartIcon />
        </button>
        <h3 className="productBlock__brand">{product.brand}</h3>
        <h4 className="productBlock__title">{product.name}</h4>
        <p className="productBlock__price">
          {selectedCurrency.label + ' '}
          {amount}
        </p>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => {
    dispatch(setAddedProducts(product))
    dispatch(getTotalCount())
  },
})

export default connect(null, mapDispatchToProps)(ProductListItem)
