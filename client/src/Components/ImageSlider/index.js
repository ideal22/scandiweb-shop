import React, { Component } from 'react'
import iconRight from '../../assets/right.png'
import iconLeft from '../../assets/left.png'

export default class ImageSlider extends Component {
  render() {
    return (
      <span className="img-slider">
        <img src={iconLeft} alt="slider" onClick={this.props.prev} />
        <img src={iconRight} alt="slider" onClick={this.props.next} />
      </span>
    )
  }
}
