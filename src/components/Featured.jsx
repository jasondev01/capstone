import React, { useState, useEffect } from 'react';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

SwiperCore.use([Navigation]);


const Featured = () => {

    const featURL = 'http://127.0.0.1:8000/api/featured-products/'
    const cover = 'http://127.0.0.1:8000/uploads/products/'

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(featURL)
            .then(response => {
                console.log(response.data);
                setProducts(response.data);
                console.log(products);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);



    return (
        <section className='featured container-xl'>
            <h2 className='text-center py-5'>
                Featured Products
            </h2>
            <div className="row d-flex">
            <Swiper
                slidesPerView={4}
                spaceBetween={5}
                navigation
            >
                { products.map(
                    product => (
                        <SwiperSlide key={product.id}>
                            
                            <div className="box bg-dark d-flex flex-column gap-2">
                            <Link to={`/product-details/${product.id}`} className="link">
                                <div className="image-container">
                                    <img src={ cover + product.cover_image } alt={ product.productName } width={'100%'}/>
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
                                        <a href="#" className='btn btn-cart'>Add to Cart</a>
                                        <a href="#" className='btn btn-buy'>Buy Now</a>
                                    </div>
                                </div>
                            </Link>
                            </div>
                        </SwiperSlide>
                    )
                )}
            </Swiper>                 
            </div>
            
        </section>
    )
}

export default Featured
