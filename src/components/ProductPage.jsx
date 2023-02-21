import  React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProductPage = () => {
    const { id } = useParams();
    console.log(id)
    
    const getURL = "http://127.0.0.1:8000/api/get-product/" 
    const [product, setProduct] = useState([]);
    const cover = "http://127.0.0.1:8000/uploads/products/"
    const small =  "http://127.0.0.1:8000/uploads/images/"

    useEffect(() => {
        axios.get( getURL + id )
        .then(response => {
            console.log(response.data.data);
            setProduct(response.data.data);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    useEffect(() => {
            console.log(product);
        }, [product]);

    if (!product) {
        return (
            <div className='text-center py-5 my-5 fs-2'>
                Loading product...
            </div>
        )
    }

    const [selectedImage, setSelectedImage] = useState(0);
    const coverImageRef = useRef(null);

    const getSmallImagePath = (imageName) => {
        return small + imageName;
    };
    
    const getCoverImagePath = (imageName) => {
        return cover + imageName;
    };

    const handleSmallImageClick = (index, src) => {
        setSelectedImage(index);

        coverImageRef.current.src = src;
    };


  return (
    <section className='container-xl py-5 my-5'>
        <div className="row">
            <div className="col-6">
                <div className="display-image-container">
                    <div className="cover-image-container">
                        <img
                            ref={coverImageRef}
                            src={getCoverImagePath(product.cover_image)}
                            alt={product.productName}
                            className="cover-image"
                        />
                    </div>
                    <div className='row small-images'>
                        { product.images && product.images.map((image, index)=> (
                            <div className="col-3" key={image.id}>
                                <img
                                src={getSmallImagePath(image.image)}
                                alt=""
                                className={`small-image ${index === selectedImage ? 'selected' : ''}`}
                                onClick={() => handleSmallImageClick(index, getSmallImagePath(image.image))}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="col-6 d-flex flex-column gap-5">
                <div className="product-title">
                    <h2 className='fs-1'>
                        { product.productName  }
                    </h2>
                    <small className='text-secondary'>
                        { product.sku  }
                    </small>
                </div>
                <div className='price d-flex gap-3'>
                    <p className='fs-2 m-0'>
                        ${ product.price  }
                    </p>
                    <input type="number" placeholder='1' min="1" className='quantity fs-4' />
                </div>
                <div className='products-page-buttons d-flex gap-4'>
                    <a href="" className='btn text-decoration-none add-cart'>
                        Add to Cart 
                    </a>
                    <a href="" className='btn text-decoration-none buy-now'>
                        Buy Now
                    </a>
                </div>
                <div className='product-description d-flex flex-column gap-3'>
                    <h4>Product Description</h4>
                    <p>
                        { product.description  }
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductPage
