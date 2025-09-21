import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Dashboard } from './Components/Dashboard/Dashboard.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import OrderList from './Components/OrderList/OrderList.jsx'
import { ModeContextProvider } from './Context/ModeContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [{
      path: '',
      element: <Dashboard />
    },
    {
      path: 'orderlist',
      element: <OrderList />
    }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModeContextProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ModeContextProvider>
  </StrictMode>,
)
