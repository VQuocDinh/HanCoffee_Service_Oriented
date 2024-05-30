import * as React from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from 'react-router-dom'
import { PATH_DASHBOARD } from './path'
import List from '../../pages/product/list'
import App from '../../App'
import Report from '../../pages/Report/Report'
import Orders from '../../pages/Orders/Orders'
import Users from '../../pages/Users/Users'
import Add from '../../pages/product/add'
import EditProduct from '../../pages/product/edit'

export const router = createBrowserRouter([
    {
        path: '',
        element: <App />,
        children: [
            {
                path: PATH_DASHBOARD.general.product.root,
                children: [
                    {
                        path: PATH_DASHBOARD.general.product.list,
                        element: <List />,
                    },
                    {
                        path: PATH_DASHBOARD.general.product.add,
                        element: <Add />,
                    },
                    {
                        path: `${PATH_DASHBOARD.general.product.edit}/:productId`,
                        element: <EditProduct />,
                    },
                ],
            },
            
            {
                path: PATH_DASHBOARD.general.report.root,
                children: [
                    {
                        path: PATH_DASHBOARD.general.report.list,
                        element: <Report />,
                    },
                    
                ],
            },

            {
                path: PATH_DASHBOARD.general.order.root,
                children: [
                    {
                        path: PATH_DASHBOARD.general.order.list,
                        element: <Orders />,
                    },
                    
                ],
            },

            {
                path: PATH_DASHBOARD.general.user.root,
                children: [
                    {
                        path: PATH_DASHBOARD.general.user.list,
                        element: <Users />,
                    },
                    
                ],
            },
        ],
    },
])
