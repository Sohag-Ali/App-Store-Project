import { createBrowserRouter } from 'react-router'
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';
import MainLayout from '../Layout/MainLayout';
import Error from '../Pages/Error';
import LoadingSpinner from '../Loading/LoadingSpining';



const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <Error></Error>,
        hydrateFallbackElement:<LoadingSpinner></LoadingSpinner>,
        children: [
            {
                index: true,
                Component: Home,
                loader: () => fetch('./dataApps.json')
            },
            {
                path: '/apps',
                Component: Apps,
            },

            // {
            //     path: '*',
            //     element: <Error></Error>
            // }
        ]
    },
])
export default router;


