import React from 'react'
import { connect } from 'react-redux'
import ProductCategoryList from '../../Components/ProductCategoryList/ProductCategoryList'
import { CATEGORIES } from '../../shared/constants'
import { fetchProductsByCategory } from '../../store/slices/productsByCategorySlice'

class CategoryPage extends React.Component {
  componentDidMount() {
    this.props.fetchProducts(this.props.selectedCategory)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedCategory !== this.props.selectedCategory) {
      this.props.fetchProducts(this.props.selectedCategory)
    }
  }
  render() {
    return (
      <div className="home">
        <h1 className="home__category-name">
          {CATEGORIES[this.props.selectedCategory]}
        </h1>
        <ProductCategoryList />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedCategory: state.categories.selectedCategory,
})

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (category) => dispatch(fetchProductsByCategory(category)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage)
