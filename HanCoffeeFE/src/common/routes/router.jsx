import * as React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { PATH_CUSTOMER, PATH_DASHBOARD } from './path'
import List from '../../pages/product/list'
import App from '../../App'
import Report from '../../pages/Report/Report'
import Orders from '../../pages/Orders/Orders'
import Users from '../../pages/Users/Users'
import Add from '../../pages/product/add'
import EditProduct from '../../pages/product/edit'
import Home from '../../pages/Home/Home'
import Cart from '../../pages/Cart/Cart'
import GuessGuard from '../guard/GuessGuard'
import AuthGuard from '../guard/AuthGuard'
import AdminLayout from '../layout/AdminLayout'
import CustomerLayout from '../layout/CustomerLayout'

export const router = createBrowserRouter([
    {
        path: '',
        element: (
            <GuessGuard>
                <CustomerLayout />
            </GuessGuard>
        ),
        children: [
            {
                children: [
                    {
                        path: PATH_CUSTOMER.general.home.root,
                        element: <Home />,
                    },
                ],
            },
            {
                path: PATH_CUSTOMER.general.cart.root,
                children: [
                    {
                        path: PATH_CUSTOMER.general.cart.root,
                        element: <Cart />,
                    },
                ],
            },
        ],
    },
    {
        path: 'dashboard',
        element: (
            <AuthGuard>
                <AdminLayout />
            </AuthGuard>
        ),
        children: [
            {
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
                children: [
                    {
                        path: PATH_DASHBOARD.general.report.list,
                        element: <Report />,
                    },
                ],
            },

            {
                children: [
                    {
                        path: PATH_DASHBOARD.general.order.list,
                        element: <Orders />,
                    },
                ],
            },

            {
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
