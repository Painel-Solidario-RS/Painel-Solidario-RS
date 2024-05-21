import {
  createBrowserRouter,
  Route,
  createRoutesFromElements
} from 'react-router-dom'

import App from '../App'
import { Home } from '../pages/Home/Home'
import { Login } from '../pages/Login/login'
import { Shelter } from '../pages/Shelter/shelter'
import { Splash } from '../pages/Splash/splash'
import { User } from '../pages/User/user'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/user" element={<User />} />
      <Route path="/shelter" element={<Shelter />} />
      <Route path="/splash" element={<Splash />} />
    </>
  )
)
