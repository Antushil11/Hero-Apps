import React from 'react';
import { createBrowserRouter } from "react-router";
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';
import MainLayout from '../layout/MainLayout';
import ErrorPage from '../Pages/ErrorPage';
import Installation from '../Pages/Installation';


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
                loader:() => fetch("/apps.json")

            },
            {
                path: '/apps',
                Component: Apps,
            },
            {
                path: '/installation',
                Component: Installation,
            },

        ]

    },

    
]);

export default router;



