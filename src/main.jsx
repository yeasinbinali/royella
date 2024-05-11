import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from './components/Home/Home/Home.jsx';
import Register from './components/Authentication/Register/Register.jsx';
import Login from './components/Authentication/Login/Login.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Rooms from './components/Rooms/Rooms.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import UserProfile from './components/UserProfile/UserProfile.jsx';
import MyBooking from './components/MyBooking/MyBooking.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: '/rooms',
        element: <Rooms></Rooms>
      },
      {
        path: '/booking',
        element: <MyBooking></MyBooking>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: '/user',
        element: <UserProfile></UserProfile>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)
