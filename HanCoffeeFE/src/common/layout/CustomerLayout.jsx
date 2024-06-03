import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarCustomer from '../../components/Navbar/customer/NavbarCustomer'

const CustomerLayout = () => {
  return (
    <div className='app'>
        <NavbarCustomer />
        <Outlet/>
    </div>
  )
}

export default CustomerLayout
