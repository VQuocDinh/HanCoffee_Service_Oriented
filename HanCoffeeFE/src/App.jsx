import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Order from './pages/Order/Order'
import Footer from './components/Footer/Footer'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import User from './pages/User/User'

const App = () => {
  return (
    <>
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<Order />} /> 
          <Route path='/productDetail' element={<ProductDetail />} /> 
          <Route path='/user' element={<User />} /> 
        </Routes>
      </div>
      <Footer />
    </>

  )
}

export default App
