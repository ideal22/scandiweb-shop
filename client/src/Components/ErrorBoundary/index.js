import React from 'react'
import withRouter from '../../shared/withRouter'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    }
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    }
  }
  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    })
  }

  refreshPage = () => {
    const {
      history: { navigate },
    } = this.props
    navigate('/')
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong!</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            <pre>{this.state.error && this.state.error.toString()}</pre>
            <br />
            <pre>{this.state.errorInfo?.componentStack}</pre>
          </details>
          <button
            style={{ padding: 10, width: 100, marginTop: 10 }}
            className="btn primary"
            onClick={this.refreshPage}
          >
            Try Again
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

export default withRouter(ErrorBoundary)
