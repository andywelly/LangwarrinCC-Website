import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx'
import Childcare from './pages/Childcare.jsx'
import Forms from './pages/Forms.jsx'
import About from './pages/About.jsx'
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
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
