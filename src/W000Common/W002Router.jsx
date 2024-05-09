import React from 'react';
import App from './W001App'
import Home from '../W020Home/W021Home'
const Router = [
    {
        path: '/',
        element: <App />,
        children: [
          { path: '/', element: <Home /> },
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