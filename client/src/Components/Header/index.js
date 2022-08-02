import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import headerCheckout from '../../assets/header-checkout-icon.png'
import CartModal from '../CartModal'
import CategoryMenuList from './CategoryMenuList'
import CurrencyDropDown from '../CurrencyDropDown'

class Header extends React.Component {
  render() {
    return (
      <nav className={`nav ${this.props.isModalOpened ? 'cart-opened' : ''}`}>
        <div className="nav__container">
          <CategoryMenuList history={this.props.history} />
          <div className="nav__checkout">
            <Link to="/cart-page">
              <img src={headerCheckout} alt="" />
            </Link>
          </div>
          <div className="nav__control">
            <CurrencyDropDown />
            <CartModal isModalOpened={this.props.isModalOpened} />
          </div>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => ({
  isModalOpened: state.modal.isModalOpened,
})

export default connect(mapStateToProps, null)(Header)
