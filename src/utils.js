export const links=[
    {
        id: 1,
        name: "Home",
        url:"/"
    },
    {
        id: 2,
        name: "About",
        url:"/about"
    },
    {
        id: 3,
        name: "Contact",
        url:"/contact"
    }
]

export const price_filter=["select","price_lowest","price_highest"]

export const product_url='https://dummyjson.com/products';

export const getUniqueValue = (data, type)=>{
    let uniqueVal = data.map((item)=> item[type]);
    return ["all", ...new Set(uniqueVal)]
}