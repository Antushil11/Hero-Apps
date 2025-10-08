import React from 'react';
import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';
import MainLayout from '../layout/MainLayout';
import ErrorPage from '../Pages/ErrorPage';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: "/",
                element: <Home></Home>,

            },
            {
                path: '/apps',
                Component: Apps,
            },

        ]

    },

    
]);

export default router;



