import React, { Component } from 'react'

export default class ProductThumbs extends Component {
  render() {
    const { gallery, setSelectedThumb } = this.props
    return (
      <div className="product__thumbs">
        {Array.isArray(gallery) &&
          gallery.map((thumb, idx) => {
            return (
              <img
                src={thumb}
                key={idx}
                alt=""
                className="product__thumbs-img"
                onClick={() => setSelectedThumb(thumb)}
              />
            )
          })}
      </div>
    )
  }
}
