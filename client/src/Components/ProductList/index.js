import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductListItem from '../ProductListItem'

class ProductList extends Component {
  render() {
    const { products, selectedCurrency } = this.props
    return (
      <div className="home__products">
        {products.map((product) => (
          <ProductListItem
            key={product.id}
            product={product}
            selectedCurrency={selectedCurrency}
          />
        ))}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  products: state.products.products,
  selectedCurrency: state.currencies.selectedCurrency,
})

export default connect(mapStateToProps)(ProductList)
