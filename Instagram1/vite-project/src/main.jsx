import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ViewStory from './ViewStory.jsx'
import Profile from './Profile.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'  //Router configration enabled for redirectories

const router = createBrowserRouter(
  [
    {
      path : '/',
      element : <App/>   //home page-instagram
    },
    {
      path : '/story/:id/:tot',
      element : <ViewStory/>   //redirected to viewstory page when we touch any story 
    },
    {
      path : '/profile',
      element : <Profile />   //redirect to profile page or account page
    }
  ]
)
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
