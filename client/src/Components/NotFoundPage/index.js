import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NotFoundPage extends Component {
  render() {
    return (
      <div className="not__found-page">
        <h1 className="not__found-title">Page Not Found</h1>
        <h2 className="not_found-text">
          Oops, it looks like this page does not exist.
        </h2>
        <Link to="/">
          <button className="not__found-btn">Go Back</button>
        </Link>
      </div>
    )
  }
}
