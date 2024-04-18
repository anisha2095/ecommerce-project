import { GET_PRODUCT_SUCCESS, UPDATE_FILTER,FILTER_PRODUCT, ADD_TO_WISHLIST } from "./constant";

export const getProductdata = (data) => {
    console.log(data)
    return {
        type: GET_PRODUCT_SUCCESS,
        payload: data
    }
}

export const updateFilterData = (name, value) => {
    return {
        type: UPDATE_FILTER,
        payload:{name,value}
    }
}

export const addItemIntoWishlist = (id) => {
    return {
        type: ADD_TO_WISHLIST,
        payload: id
    }
}

export const filterProduct = ()=>{
    return{
        type: FILTER_PRODUCT
    }
}