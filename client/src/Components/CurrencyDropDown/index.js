import React, { Component } from 'react'
import { connect } from 'react-redux'
import arrowIcon from '../../assets/arrow.png'
import { getTotalAmount } from '../../store/slices/addProductSlice'
import {
  fetchCurrencies,
  setSelectedCurrency,
} from '../../store/slices/currenciesSlice'

class CurrencyDropDown extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDropDownOpened: false,
    }
    this.ref = React.createRef()
  }
  componentDidMount() {
    this.props.fetchCurrencies()
  }

  toggleDropDown = () => {
    if (!this.state.isDropDownOpened) {
      document.addEventListener('click', this.handleOutsideClick)
    } else {
      document.removeEventListener('click', this.handleOutsideClick)
    }
    this.setState({ isDropDownOpened: !this.state.isDropDownOpened })
  }

  handleOutsideClick = (e) => {
    if (!e.path.includes(this.ref.current)) this.toggleDropDown()
  }

  render() {
    const { currencies, selectedCurrency, setSelectedCurrency } = this.props
    return (
      <div
        className="nav__currency"
        ref={this.ref}
        onClick={this.toggleDropDown}
      >
        <div
          className={`nav__currency-label ${
            this.state.isDropDownOpened ? 'active' : ''
          }`}
        >
          {selectedCurrency.symbol} <img src={arrowIcon} alt="" />
        </div>
        <ul
          className={`nav__currency-items ${
            this.state.isDropDownOpened ? 'active' : ''
          }`}
        >
          {currencies.map((currency) => {
            return (
              <li
                key={currency.label}
                onClick={() => setSelectedCurrency(currency)}
                className={
                  selectedCurrency.label === currency.label ? 'active' : ''
                }
              >
                {currency.symbol} {currency.label}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  currencies: state.currencies.currencies,
  selectedCurrency: state.currencies.selectedCurrency,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCurrencies: () => dispatch(fetchCurrencies()),
  setSelectedCurrency: (curr) => {
    dispatch(setSelectedCurrency(curr))
    dispatch(getTotalAmount(curr.label))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyDropDown)
