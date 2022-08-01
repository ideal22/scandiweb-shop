import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductCategoryListItem from './ProductCategoryListItem'

class ProductCategoryList extends Component {
  render() {
    const { products, selectedCurrency } = this.props
    return (
      <div className="home__products">
        {products.map((product) => (
          <ProductCategoryListItem
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

export default connect(mapStateToProps)(ProductCategoryList)
