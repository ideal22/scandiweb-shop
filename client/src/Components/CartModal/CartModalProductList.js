import React, { Component } from 'react'
import { connect } from 'react-redux'

import CartModalEmpty from './CartModalEmpty'
import AddedProductListItemDetails from '../AddedProductListItemDetails'

class CartModalProductList extends Component {
  render() {
    console.log('test')
    const { addedProducts, selectedCurrency } = this.props
    return (
      <div className="cart__items">
        {addedProducts.length ? (
          addedProducts.map((product) => {
            return (
              <AddedProductListItemDetails
                product={product}
                selectedCurrency={selectedCurrency}
                key={product.productId}
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

export default connect(mapStateToProps, null)(CartModalProductList)
