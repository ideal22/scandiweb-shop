import React, { Suspense } from 'react'
import AppRoutes from './AppRoutes'
import ErrorBoundary from './Components/ErrorBoundary'
import Notification from './UI/Notification'

class App extends React.Component {
  render() {
    return (
      <>
        <ErrorBoundary>
          <Suspense fallback={<h2>Loading</h2>}>
            <AppRoutes />
          </Suspense>
        </ErrorBoundary>
        <Notification />
      </>
    )
  }
}

export default App
