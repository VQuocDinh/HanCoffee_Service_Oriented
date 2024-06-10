import React from 'react';
import { router } from './common/routes/router.jsx'
import { RouterProvider, useLocation } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
