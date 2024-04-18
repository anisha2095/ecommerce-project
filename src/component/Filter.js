import React, { useEffect } from 'react'
import { getUniqueValue, price_filter } from '../utils'
import { updateFilterData, filterProduct } from '../redux/action';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.product.filters)
    const state = useSelector(state => state);
    console.log(state);
    const all_product = useSelector(state => state.product.all_product)
    const categories = getUniqueValue(all_product, "category");
    const updateFilter = (e) =>{
        dispatch(updateFilterData(e.target.name, e.target.value))
    }
    useEffect(()=>{
        dispatch(filterProduct())
    },[filter])

  return (
    <div className='filter-div'>
      <form>
        <div>
            <h4 className="mt-3">Categories</h4>
            <div className='category'>
              {
                  categories.map((category)=>{
                      return(
                          <button type="button" name="category" value={category} onClick={updateFilter}>{category}</button>
                      )
                  })
              }
            </div>
        </div>
        <div className='mb-4'>
          <h4 className="mt-3">Price</h4>
          <select onChange={updateFilter} name="sort_price">
            {
              price_filter.map((option)=>{
                return(
                  <option value={option}>{option}</option>
                )
              }) 
            }
          </select>
        </div>
      </form>
    </div>
  )
}

export default Filter
