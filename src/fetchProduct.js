import { product_url } from "./utils"

export const fetchProducts = async () => {
    const response = await fetch(product_url).then((res)=>res.json()).then((data)=> data).catch((error)=>console.log(error))
    return response.products
}