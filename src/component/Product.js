import React from 'react'
import { useDispatch } from 'react-redux'
import { addItemIntoWishlist } from '../redux/action'
import { useLocation } from 'react-router-dom'
import { LazyLoadImage  } from 'react-lazy-load-image-component'

const Product = ({product}) => {
  const location = useLocation()
  console.log(location.pathname, "location")
  const dispatch = useDispatch()
  const addToWishlist=(product)=>{
    dispatch(addItemIntoWishlist(product))
  }
  return (
    <div className='col-12 col-md-6 col-lg-4'>
      <div className='product-item'>
        <LazyLoadImage src={product.thumbnail} />
        <div className='product-details'>
          <h5>{product.title}</h5>
          <span><strong>Price:</strong> $ {product.price}</span>
          <span><strong>Brand:</strong> {product.brand}</span>
          <p><strong>Desciption:</strong> {product.description.slice(0,50) + `...` }</p>
          {
            location.pathname === "/wishlist" ? <></> : <button type="button" onClick={()=> addToWishlist(product)}>Add to Your Wishlist</button>
          }
        </div>
      </div>
    </div>
  )
}

export default Product
