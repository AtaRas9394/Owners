import React from 'react';
import App from './W001App'
import Welcome from '../W010Welcome/W011Welcome'
import Home from '../W020Home/W021Home'
const Router = [
    {
        path: '/',
        element: <App />,
        children: [
          { path: '/', element: <Welcome /> },
          { path: '/home', element: <Home /> },
          // {
          //   path: "/blog",
          //   element: <Blog />,
          //   children: [
          //     { path: "image-modal", element: <ImageModal />},
          //     { path: "detail-modal", element: <DetailModal />},
          //   ]
          // }
        ],
      },


]

export default Router;