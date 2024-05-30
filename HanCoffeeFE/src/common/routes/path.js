function path(root, subLink) {
    return `${root}${subLink}`
}

const ROOT_AUTH = '/auth'
export const ROOT_DASHBOARD = '/dashboard'
export const ROOT_CUSTOMER = '/'

export const PATH_DASHBOARD = {
    root: ROOT_DASHBOARD,
    general: {
        product: {
            root: path(ROOT_DASHBOARD, '/product'),
            add: path(ROOT_DASHBOARD, '/product/add'),
            list: path(ROOT_DASHBOARD, '/product/list'),
            edit: path(ROOT_DASHBOARD, '/product/edit/:productId'),
        },
        // category:{
        //     root: "/category",
        //     add: "/category/add",
        //     list: "/category/list",
        //     edit: "/category/edit"

        // },
        report: {
            root: path(ROOT_DASHBOARD, '/report'),
            list: path(ROOT_DASHBOARD, '/report/list'),
        },
        order: {
            root: path(ROOT_DASHBOARD, '/order'),
            list: path(ROOT_DASHBOARD, '/order/list'),
        },
        user: {
            root: path(ROOT_DASHBOARD, '/user'),
            add: path(ROOT_DASHBOARD, '/user/add'),
            list: path(ROOT_DASHBOARD, '/user/list'),
        },
    },
}

export const PATH_CUSTOMER = {
    root: ROOT_CUSTOMER,
    general: {
        home: {
            root: path(ROOT_CUSTOMER, 'home'),
        },
        cart: {
            root: path(ROOT_CUSTOMER, 'cart'),
        },
        order: {
            order: path(ROOT_CUSTOMER, '/order'),
        },
    },
}
