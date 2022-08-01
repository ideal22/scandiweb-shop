import React, { Component } from 'react'
import ProductDetails from './ProductDetails'
import {
  decreaseProductCount,
  deleteProduct,
  getTotalAmount,
  getTotalCount,
  increaseProductCount,
} from '../../store/slices/addProductSlice'
import { connect } from 'react-redux'

class AddedProductListItemDetails extends Component {
  componentDidMount() {
    const { getTotalAmount, getTotalCount, selectedCurrency } = this.props
    getTotalCount()
    getTotalAmount(selectedCurrency.label)
  }

  componentDidUpdate(prevProps) {
    const { getTotalAmount, getTotalCount, selectedCurrency, product } =
      this.props
    if (prevProps.product.productCount !== product.productCount) {
      getTotalCount()
      getTotalAmount(selectedCurrency.label)
    }
  }
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
            deleteProduct(product.productId)
          }}
        >
          remove
        </button>

        <ProductDetails product={product} selectedCurrency={selectedCurrency} />
        <div className="cart__item-img">
          <div className="item__amount">
            <button
              className="btn"
              onClick={() => {
                increaseProduct(product.productId)
              }}
            >
              +
            </button>
            <span>{product.productCount}</span>
            <button
              className="btn"
              onClick={() => {
                decreaseProduct(product.productId)
              }}
              disabled={product.productCount === 1}
            >
              -
            </button>
          </div>
          <div className="item__img">
            <img src={product.productGallery[0]} alt="" />
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch, { selectedCurrency: { label } }) => ({
  deleteProduct: (id) => {
    dispatch(deleteProduct(id))
    dispatch(getTotalCount())
    dispatch(getTotalAmount(label))
  },
  increaseProduct: (id) => dispatch(increaseProductCount(id)),
  decreaseProduct: (id) => dispatch(decreaseProductCount(id)),
  getTotalCount: () => dispatch(getTotalCount()),
  getTotalAmount: (currency) => dispatch(getTotalAmount(currency)),
})

export default connect(null, mapDispatchToProps)(AddedProductListItemDetails)
