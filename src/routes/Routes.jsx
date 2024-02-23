import { Route, Routes } from 'react-router-dom'
import Register from '../pages/register'
import Dasboard from '../pages/dasboard';
import RegisterForm from '../pages/registerForm';
import RouteTwo from '../pages/routeTwo'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Dasboard/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/registerForm" element={<RegisterForm/>}/>
      <Route path="/routeTwo/*" element={<RouteTwo/>}/>
    </Routes>
  )
}
