import React from 'react'
import Product from '../component/Product';
import { useLocation } from "react-router-dom";


const Wishlist = () => {
  const location = useLocation();
  console.log(location.state.whishListData, "ansiha")
  const data = location.state.whishListData;
  const final = [data.flat]
  console.log(final, "final")

  return (
    <div className='container mb-5 mt-5'>
      <div className='row'>
        {
          data.map((product) => {
            return (
              <Product product={product} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Wishlist
