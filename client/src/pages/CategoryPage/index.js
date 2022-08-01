import React from 'react'
import { connect } from 'react-redux'
import ProductCategoryList from '../../Components/ProductCategoryList/ProductCategoryList'
import { CATEGORIES } from '../../shared/constants'
import withRouter from '../../shared/withRouter'
import { fetchProductsByCategory } from '../../store/slices/productsByCategorySlice'

class CategoryPage extends React.Component {
  componentDidMount() {
    const {
      fetchProducts,
      history: { params },
    } = this.props
    fetchProducts(params.category)
  }

  componentDidUpdate(prevProps) {
    const {
      fetchProducts,
      history: { params },
    } = this.props

    if (prevProps.history.params.category !== params.category) {
      fetchProducts(params.category)
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CategoryPage),
)
