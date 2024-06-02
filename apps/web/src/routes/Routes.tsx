import {
  createBrowserRouter,
  Route,
  createRoutesFromElements
} from 'react-router-dom'

import { Home } from '../pages/Home/Home'
import { Login } from '../pages/Login/Login'
import { Register } from '../pages/Register/Register'
import { Shelter } from '../pages/Shelter/shelter'
import { Splash } from '../pages/Splash/splash'
import { User } from '../pages/User/user'
import { Welcome } from '../pages/Welcome/Welcome'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Welcome />} />
      <Route path="/dashboard" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/user" element={<User />} />
      <Route path="/shelter" element={<Shelter />} />
      <Route path="/splash" element={<Splash />} />
    </>
  )
)
