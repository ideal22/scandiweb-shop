import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
  fetchCategories,
  setSelectedCategory,
} from '../../store/slices/categoriesSlice'
import { CATEGORIES } from '../../shared/constants'

class CategoriesMenuList extends Component {
  componentDidMount() {
    this.props.fetchCategories()
  }

  render() {
    const { categories } = this.props
    return (
      <ul className="nav__categories">
        {categories.map((category) => {
          return (
            <li
              className={`nav__categories-item ${
                this.props.selectedCategory === category.name ? 'active' : ''
              }`}
              key={category.name}
            >
              <Link
                to="/"
                onClick={() => this.props.setSelectedCategory(category.name)}
              >
                {CATEGORIES[category.name]}
              </Link>
            </li>
          )
        })}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  selectedCategory: state.categories.selectedCategory,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCategories: () => dispatch(fetchCategories()),
  setSelectedCategory: (category) => dispatch(setSelectedCategory(category)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CategoriesMenuList)
