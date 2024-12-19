import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WatchList from "./components/WatchList.jsx"
import Layout from './components/Layout.jsx'

const router= createBrowserRouter([
  {
    path:"/",
    element: <Layout/>,  
    children:[
      {
        path:"",
        element:<App/>
      },
      {
        path:"watch",
        element: <WatchList/>
      }
    ]  
  },
  
]);
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
