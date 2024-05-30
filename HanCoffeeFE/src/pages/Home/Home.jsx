import React from 'react'
import './Home.css'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'
import Product from '../../components/Product/Product'
const Home = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Product />
    </div>
  )
}

export default Home
