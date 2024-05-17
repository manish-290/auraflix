import React from 'react';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';

import RegisterUser from './register';
// import Login from './login';
import Browse from './browse';
const Body = () => {
    const appRouter= createBrowserRouter([
        {
          path:'/',
          element:<RegisterUser/>
        },
        // {
        //   path:'/login',
        //   element:<Login/>
        // },
        {
          path:'/browse',
          element:<Browse/>
        }
      ])
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
}

export default Body;