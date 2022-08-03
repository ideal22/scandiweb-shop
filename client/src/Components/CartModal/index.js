import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import CartIcon from '../../assets/CartIcon'
import { CHECKOUT_MESSAGE } from '../../shared/constants'
import { checkout } from '../../store/slices/addProductSlice'
import { toggleModal } from '../../store/slices/modalSlice'
import CartModalProductList from './CartModalProductList'

class CartModal extends Component {
  constructor(props) {
    super(props)
    this.modaRef = React.createRef()
  }

  toggleModal = () => {
    if (!this.props.isModalOpened) {
      document.addEventListener('click', this.handleOutsideClick)
      document.body.style.overflow = 'hidden'
    } else {
      document.removeEventListener('click', this.handleOutsideClick)
      document.body.style.overflow = 'auto'
    }
    this.props.toggleModal()
  }
  handleOutsideClick = (e) => {
    if (!e.path.includes(this.modaRef.current)) this.toggleModal()
  }

  onCheckout = () => {
    this.props.checkout()
    alert(CHECKOUT_MESSAGE)
  }

  render() {
    const { totalAmount, totalCount, selectedCurrency } = this.props
    return (
      <div className="nav__cart" ref={this.modaRef}>
        <div onClick={this.toggleModal}>
          {this.props.totalCount > 0 && (
            <div className="nav__cart-badge">{totalCount}</div>
          )}
          <CartIcon />
        </div>
        <div
          className={`nav__cart-block ${
            this.props.isModalOpened ? 'active' : ''
          }`}
        >
          <h5>
            My Bag, <span style={{ marginLeft: 5 }}>{totalCount} items</span>
          </h5>
          <CartModalProductList />
          <div className="cart__total">
            <h3>
              Total
              <span>
                {selectedCurrency.symbol}
                {totalAmount.toFixed(2)}
              </span>
            </h3>
            <div className="cart__btns">
              <Link
                to="/cart-page"
                className="btn"
                onClick={() => {
                  this.toggleModal()
                }}
              >
                View Bag
              </Link>
              <button
                className="btn primary"
                onClick={this.onCheckout}
                disabled={totalCount ? false : true}
              >
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  totalCount: state.addedProducts.totalCount,
  totalAmount: state.addedProducts.totalAmount,
  selectedCurrency: state.currencies.selectedCurrency,
})

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleModal()),
  checkout: () => dispatch(checkout()),
})

export default connect(mapStateToProps, mapDispatchToProps)(CartModal)
