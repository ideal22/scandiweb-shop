import { Routes as Swith, Route } from 'react-router-dom'
import Layout from './Components/Layout'
import { routes } from './routes'

const AppRoutes = () => {
  return (
    <Swith>
      <Route path="/" element={<Layout />}>
        {routes.map(({ path, Element, isIndex }) => (
          <Route key={path} path={path} element={<Element />} index={isIndex} />
        ))}
      </Route>
    </Swith>
  )
}
export default AppRoutes
