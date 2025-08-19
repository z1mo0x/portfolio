import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.tsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store.ts'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
])

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
