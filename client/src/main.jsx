import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './components/admin/Login.jsx';
import AdminPage from './components/admin/AdminPage.jsx';
import store from './store/store.js';
import PrivateRoutes from './protected routes/PrivateRoutes.jsx'

const router =  createBrowserRouter([
  {path: "/", element: <App />},
  {path: "/login", element: <Login/>},
  { path: "/", element: <PrivateRoutes />, 
    children: [{ path: "admin", element: <AdminPage /> } ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
