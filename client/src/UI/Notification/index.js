import React, { Component } from 'react'

export default class Notification extends Component {
  render() {
    return (
      <div
        // className={`add-notification ${this.state.added ? 'active' : ''}`}
        ref={this.notificationRef}
      >
        Item Added to Cart!
      </div>
    )
  }
}
