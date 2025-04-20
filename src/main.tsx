import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import LoginPage from './pages/LoginPage.tsx'
import { NotFound } from './components/NotFound.tsx'
import RegisterPage from './pages/RegisterPage.tsx'

const router = createBrowserRouter([
  { path: "/login", element: <LoginPage/>},
  { path: "/register", element: <RegisterPage/>},
  { path: "/*", element: <NotFound/>}
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
