import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setIsProductAdded } from '../../store/slices/addProductSlice'

class Notification extends Component {
  componentWillUnmount() {
    clearTimeout(this.notification)
  }
  render() {
    clearTimeout(this.notification)
    this.notification = setTimeout(() => {
      this.props.setIsProductAdded(false)
    }, 2000)
    return (
      <div
        className={`notification-container ${
          this.props.isProductAdded ? 'active' : ''
        }`}
      >
        Product Added Successfully!
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isProductAdded: state.addedProducts.isProductAdded,
})

const mapDispatchToProps = (dispatch) => ({
  setIsProductAdded: (value) => dispatch(setIsProductAdded(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Notification)
