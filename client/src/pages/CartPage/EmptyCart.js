import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class EmptyCart extends Component {
  render() {
    return (
      <div className="cart">
        <div className="cart__empty">
          <p>Your Cart is Empty!</p>
          <Link to="/all">
            <button>Home</button>
          </Link>
        </div>
      </div>
    )
  }
}
