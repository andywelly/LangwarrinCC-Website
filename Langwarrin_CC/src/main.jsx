import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Childcare from './pages/Childcare.jsx'
import Forms from './pages/Forms.jsx'
import About from './pages/About.jsx'
import Computer from './pages/Computer.jsx'
import Enrol from './pages/Enrol.jsx'
import Literacy from './pages/Literacy.jsx'
import Community from './pages/Community.jsx'
import Hobbies from './pages/Hobbies.jsx'
import BookingForms from './pages/BookingForms.jsx'
import ChildcareForms from './pages/ChildcareForms.jsx'
import ServiceForms from './pages/ServiceForms.jsx'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "services",
    element: <Services/>
  },
  {
    path: "childcare",
    element: <Childcare/>
  },
  {
    path: "forms",
    element: <Forms/>
  },
  {
    path: "about",
    element: <About/>
  },
  { 
    path: "enrol",
    element: <Enrol/>
  },
  { 
    path: "literacy",
    element: <Literacy/>
  },
  { 
    path: "computer",
    element: <Computer/>
  },
  { 
    path: "community",
    element: <Community/>
  },
  { 
    path: "hobbies",
    element: <Hobbies/>
  },
  {
    path: "bookingForms",
    element: <BookingForms/>
  },
  {
    path: "childcareForms",
    element: <ChildcareForms/>
  },
  {
    path: "serviceForms",
    element: <ServiceForms/>
  },

]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
