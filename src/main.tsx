import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
])

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
