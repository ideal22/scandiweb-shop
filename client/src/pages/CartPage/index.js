import React from 'react'
import { connect } from 'react-redux'
import AddedProductListItemDetails from '../../Components/AddedProductListItemDetails'
import EmptyCart from './EmptyCart'
import ProductOrder from './ProductOrder'

class CartPage extends React.Component {
  render() {
    const { addedProducts, selectedCurrency, totalCount, totalAmount } =
      this.props
    if (!totalCount) return <EmptyCart />
    return (
      <div className="cart">
        <h1>Cart</h1>
        {addedProducts.map((product) => {
          return (
            <AddedProductListItemDetails
              product={product}
              selectedCurrency={selectedCurrency}
              key={product.productId}
            />
          )
        })}
        <ProductOrder
          totalCount={totalCount}
          totalAmount={totalAmount}
          selectedCurrency={selectedCurrency}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  addedProducts: state.addedProducts.addedProducts,
  selectedCurrency: state.currencies.selectedCurrency,
  totalCount: state.addedProducts.totalCount,
  totalAmount: state.addedProducts.totalAmount,
})

export default connect(mapStateToProps, null)(CartPage)
