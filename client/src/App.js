import React from 'react'
import AppRoutes from './AppRoutes'
import ErrorBoundary from './Components/ErrorBoundary'
import Notification from './UI/Notification'

class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <AppRoutes />
        <Notification />
      </ErrorBoundary>
    )
  }
}

export default App
