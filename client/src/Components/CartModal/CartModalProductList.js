import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  decreaseProductCount,
  deleteProduct,
  getTotalAmount,
  getTotalCount,
  increaseProductCount,
} from '../../store/slices/addProductSlice'
import CartModalEmpty from './CartModalEmpty'
import CartModalProductListItem from './CartModalProductListItem'

class CartModalProductList extends Component {
  componentDidUpdate() {
    const { getTotalAmount, getTotalCount, selectedCurrency } = this.props
    getTotalCount()
    getTotalAmount(selectedCurrency.label)
  }
  render() {
    const {
      addedProducts,
      increaseProduct,
      decreaseProduct,
      deleteProduct,
      selectedCurrency,
    } = this.props
    return (
      <div className="cart__items">
        {addedProducts.length ? (
          addedProducts.map((product, idx) => {
            return (
              <CartModalProductListItem
                product={product}
                selectedCurrency={selectedCurrency}
                key={idx}
                increaseProduct={increaseProduct}
                decreaseProduct={decreaseProduct}
                deleteProduct={deleteProduct}
              />
            )
          })
        ) : (
          <CartModalEmpty />
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  addedProducts: state.addedProducts.addedProducts,
  selectedCurrency: state.currencies.selectedCurrency,
})

const mapDispatchToProps = (dispatch) => ({
  deleteProduct: (id) => dispatch(deleteProduct(id)),
  increaseProduct: (id) => dispatch(increaseProductCount(id)),
  decreaseProduct: (id) => dispatch(decreaseProductCount(id)),
  getTotalCount: () => dispatch(getTotalCount()),
  getTotalAmount: (currency) => dispatch(getTotalAmount(currency)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CartModalProductList)
