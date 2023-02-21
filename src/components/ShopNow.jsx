import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';


const ShopNow = () => {

    const allURL = 'http://127.0.0.1:8000/api/all-products/'
    const cover = 'http://127.0.0.1:8000/uploads/products/'
    const categoryURL = 'http://127.0.0.1:8000/api/category/'

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(allURL)
            .then(response => {
                console.log(response.data);
                setProducts(response.data.data);
                console.log(products);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const handleCategoryClick = (event) => {
        event.preventDefault();
        const category = event.target.dataset.category;
        console.log(category)
        axios.get(categoryURL + "?category=" + category)
            .then(response => {
                console.log(response.data);
                setProducts(response.data.data);
            })
            .catch(error => {
                console.error(error);
            });
      }

    const handleDisplayAll = (event) => {
        event.preventDefault();
        axios.get(allURL)
            .then(response => {
                console.log(response.data);
                setProducts(response.data.data);
                console.log(products.id);
            })
            .catch(error => {
                console.error(error);
            });
      }

    return (
        <section className='shopnow container-xxl py-5 '>
            <h2 className='text-center w-25 mx-auto mb-5'>
                Shop Now
            </h2>
            <ul className="category-list list-unstyled d-flex justify-content-center gap-5 p-0 mb-5">
                <li className="category">
                    <button href="" className='text-decoration-none bg-dark' onClick={(event) => handleDisplayAll(event)}>
                        All Products
                    </button>
                </li>
                <li className="category">
                    <button href="" className='text-decoration-none bg-dark' value={ 'pistols' } data-category={ 'pistols' } onClick={(event) => handleCategoryClick(event)}>
                        Airsoft Pistols
                    </button>
                </li>
                <li className="category">
                    <button href="" className='text-decoration-none bg-dark' value={ 'Shotguns' } data-category={ 'shotguns' } onClick={(event) => handleCategoryClick(event)}>
                        Airsoft Shotguns
                    </button>
                </li>
                <li className="category">
                    <button href="" className='text-decoration-none bg-dark' value={ 'Rifles' } data-category={ 'rifles' } onClick={(event) => handleCategoryClick(event)}>
                        Airsoft Rifles
                    </button>
                </li>
                <li className="category">
                    <button href="" className='text-decoration-none bg-dark' value={ 'Snipers' } data-category={ 'snipers' } onClick={(event) => handleCategoryClick(event)}>
                        Airsoft Snipers
                    </button>
                </li>
                <li className="category">
                    <button href="" className='text-decoration-none bg-dark' value={ 'Others' } data-category={ 'Others' } onClick={(event) => handleCategoryClick(event)}>
                        Others
                    </button>
                </li>
            </ul>
            <div className="row d-flex">

                { products.map( 
                    product => ( 
                        <div className="col-3" key={product.id}>
                            <Link to={`/product-details/${product.id}`} className="link">
                                <div className="box bg-dark d-flex flex-column gap-2">
                                    <div className="image-container">
                                        <img src={ cover + product.cover_image }  alt={ product.productName } width={'100%'}/>
                                    </div>
                                    <div className='details d-flex flex-column gap-2'>
                                        <h4 className='fs-5'>
                                            { product.productName }
                                        </h4>
                                        <p className='m-0 fs-5 price'>
                                            ${ product.price }
                                        </p>
                                        <small className='text-secondary'>
                                            { product.sku }
                                        </small>
                                        <div className="buttons d-flex gap-2 justify-content-center pt-3">
                                            <a href="" className='btn btn-cart'>Add to Cart</a>
                                            <a href="" className='btn btn-buy'>Buy Now</a>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    
                ) ) }

                    
                                     
            </div>
        </section>
    )
}

export default ShopNow
