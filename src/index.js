import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './views/Home/Home'
import About from './views/About/About'
import Faq from './views/Faq/Faq'
import Support1 from './views/Support/Support1/support1'
import Awards from './views/Awards/Awards'
import News from './views/News/News'
import Event from './views/Event/Event';
import Contact from './views/Contact/Contact'
import Dealer from './views/Dealer/Dealer';



import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",

    element: <About />,
  },
  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/support1",
    element: <Support1 />,
  },
  {
    path: "/awards",
    element: <Awards />,
  },
  {
    path: "/news",
    element: <News />,
  },
  {
    path: "/event",
    element: <Event />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/dealer",
    element: <Dealer />,
  },
]);

root.render(<RouterProvider router={router} />);

 