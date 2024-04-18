import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Product from '../component/Product';
import ReactPaginate from "react-paginate";
import { fetchProducts } from '../fetchProduct';
import { getProductdata } from '../redux/action';
import { Link } from 'react-router-dom';
import Filter from '../component/Filter';

const ProductList = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product.filter_product)
    const whishListData = useSelector(state => state.product.wish_list);
    const [theme, setTheme] = useState("light-mode")
    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        try {
            const allProduct = await fetchProducts();
            dispatch(getProductdata(allProduct))
        } catch (err) {
            console.log(err)
        }
    }

    const [pageNumber, setPageNumber] = useState(0);
    const usersPerPage = 9;
    const pagesVisited = pageNumber * usersPerPage;

    const displayUsers = products
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((product) => {
            return (
                <Product product={product} />
            );
        });

    const pageCount = Math.ceil(products.length / usersPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    const colorToggle = (e) =>{
        e.preventDefault()
        if(theme === "light-mode"){
            setTheme("dark-mode")
        } else {
            setTheme("light-mode")
        }
        document.body.className=theme;
        const themeBtn = document.querySelector(".theme-btn").textContent;
        if(themeBtn === "Dark Theme"){
            document.querySelector(".theme-btn").textContent = "Light Theme"
        } else {
            document.querySelector(".theme-btn").textContent = "Dark Theme"
        }
    }

    return (
        <div className=' product-list'>
            <nav className='navabr'>
                <button type="button" className='theme-btn' onClick={colorToggle}>Dark Theme</button>
                <Link to="/wishlist" state={{ whishListData }} >WishList</Link>
            </nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-3'>
                        <Filter />
                    </div>
                    <div className='col-md-9'>
                        <div class="row">{displayUsers}</div>
                        
                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            pageCount={pageCount}
                            onPageChange={changePage}
                            containerClassName={"paginationBttns"}
                            previousLinkClassName={"previousBttn"}
                            nextLinkClassName={"nextBttn"}
                            disabledClassName={"paginationDisabled"}
                            activeClassName={"paginationActive"}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductList
