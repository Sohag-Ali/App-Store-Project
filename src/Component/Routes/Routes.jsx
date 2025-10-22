import { createBrowserRouter } from 'react-router'
import Home from '../Pages/Home';
import Apps from '../Pages/Apps';
import MainLayout from '../Layout/MainLayout';


const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: '/apps',
                Component: Apps,
            }
        ]
    },
])
export default router;


