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
import RoomDetails from './components/RoomDetails/RoomDetails.jsx';
import PrivateRoute from './route/PrivateRoute.jsx';
import Reviews from './components/Reviews/Reviews.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
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
        path: '/room/:id',
        element: <PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://royella-server.vercel.app/rooms/${params.id}`)
      },
      {
        path: '/booking',
        element: <PrivateRoute><MyBooking></MyBooking></PrivateRoute>
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
        path: "/reviews/:id",
        element: <Reviews></Reviews>,
        loader: ({ params }) => fetch(`https://royella-server.vercel.app/rooms/${params.id}`)
      },
      {
        path: '/user',
        element: <PrivateRoute><UserProfile></UserProfile></PrivateRoute>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
)
