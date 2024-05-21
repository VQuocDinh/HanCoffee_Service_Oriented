import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Order from './pages/Order/Order'
import Footer from './components/Footer/Footer'
import ProductDetail from './pages/ProductDetail/ProductDetail'

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
        </Routes>
      </div>
      <Footer />
    </>

  )
}

export default App
