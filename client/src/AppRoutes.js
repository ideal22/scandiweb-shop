import { Routes as Swith, Route, Navigate } from 'react-router-dom'
import Layout from './Components/Layout'
import NotFoundPage from './Components/NotFoundPage'
import { routes } from './routes'

const AppRoutes = () => {
  return (
    <Swith>
      <Route path="/" element={<Layout />}>
        {routes.map(({ path, Element, isIndex }) => (
          <Route key={path} path={path} element={<Element />} index={isIndex} />
        ))}
      </Route>
      <Route path="/404" element={<NotFoundPage />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Swith>
  )
}
export default AppRoutes
