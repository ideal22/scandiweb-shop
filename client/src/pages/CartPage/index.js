import React from 'react'
import { connect } from 'react-redux'
import AddedProductListItemDetails from '../../Components/AddedProductListItemDetails'
import { checkout } from '../../store/slices/addProductSlice'
import EmptyCart from './EmptyCart'
import ProductOrder from './ProductOrder'

class CartPage extends React.Component {
  render() {
    const {
      addedProducts,
      selectedCurrency,
      totalCount,
      totalAmount,
      checkout,
    } = this.props
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
          checkout={checkout}
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

const mapDispatchToProps = (dispatch) => ({
  checkout: () => dispatch(checkout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
