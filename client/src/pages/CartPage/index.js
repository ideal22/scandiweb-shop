import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import AddedProductListItemDetails from '../../Components/AddedProductListItemDetails'

class CartPage extends React.Component {
  render() {
    const { addedProducts, selectedCurrency, totalCount } = this.props

    return (
      <div className="cart">
        <h1>Cart</h1>
        {totalCount > 0 ? (
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
          <div className="cart__empty">
            <div className="cart__empty-img">
              {/* <img src={emptyCartImg} alt="" /> */}
            </div>
            <p>Your Cart is Empty 😢</p>
            <Link
              to="/"
              // onClick={() => {
              //   this.props.dispatchActiveCategory('all')
              // }}
            >
              <button>GO BACK HOME</button>
            </Link>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  addedProducts: state.addedProducts.addedProducts,
  selectedCurrency: state.currencies.selectedCurrency,
  totalCount: state.addedProducts.totalCount,
})

export default connect(mapStateToProps, null)(CartPage)
