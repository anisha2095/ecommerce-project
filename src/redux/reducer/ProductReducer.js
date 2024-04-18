import { GET_PRODUCT_SUCCESS, UPDATE_FILTER, FILTER_PRODUCT, ADD_TO_WISHLIST } from "../constant";

const initialState = {
    all_product: [],
    filters:{
        category:"all",
        price:0,
        sort_price: "select"
    },
    filter_product:[],
    wish_list:[],
}

const ProductReducer = (state=initialState, action) => {
    if(action.type === GET_PRODUCT_SUCCESS){
        return {
            ...state,
            all_product: action.payload,
            filter_product: action.payload
        }
    }
    if(action.type === UPDATE_FILTER){
        const {name, value} = action.payload
        return {
            ...state, filters:{...state.filters, [name]:value}
        }
    }
    if(action.type === ADD_TO_WISHLIST){
        const {wish_list} = state;
        return {...state, wish_list:[...wish_list, action.payload]}
    }
    if(action.type === FILTER_PRODUCT){
        const {all_product} = state
        const {category, sort_price} = state.filters;
        let tempProducts = [...all_product]
        if(category !== "all"){
            tempProducts = tempProducts.filter((product)=> product.category === category);
        }

        if(sort_price === "price_lowest"){
            tempProducts = tempProducts.sort((a,b) => a.price - b.price)
        }

        if(sort_price === "price_highest"){
            tempProducts = tempProducts.sort((a,b) => b.price - a.price)
        }
        return {...state, filter_product:tempProducts}
    }
    return state;
}

export default ProductReducer;