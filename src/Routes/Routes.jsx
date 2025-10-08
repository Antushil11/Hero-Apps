import React from 'react';
import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';
import MainLayout from '../layout/MainLayout';
import ErrorPage from '../Pages/ErrorPage';
import Installation from '../Pages/Installation';
import AppsDetails from '../Pages/AppsDetails';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        hydrateFallbackElement: <p>Loading ............</p>,
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
            {
                path: '/installation',
                Component: Installation,
            },
            {
                path:'/app/:id',
                Component:AppsDetails

            },

        ]

    },

    
]);

export default router;



