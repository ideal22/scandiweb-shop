import React, { Component } from 'react'

export default class ProductImage extends Component {
  render() {
    return (
      <div className="product__img">
        <img src={this.props.src} alt="" className="product__thumbs-img" />
      </div>
    )
  }
}
