import React from 'react'
import { useParams } from 'react-router-dom'

const EditProduct = () => {
  const params = useParams();

  return (
    <div className=''>
      day la edit {params.productId} 
    </div>
  )
}

export default EditProduct
