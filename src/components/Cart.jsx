import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Cart = () => {

    const { id } = useParams();
    console.log(id)

    const [product, setProduct] = useState([]);
    const getURL = "http://127.0.0.1:8000/api/get-product/" 
    const cover = "http://127.0.0.1:8000/uploads/products/"

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

    return (
        <section className='cart container-xl my-5 py-5'>
            <h2 className='py-3'>
                Your Cart 
            </h2>
            <div className="card border-5">
                <div className="border border-1">
                    <table className="table table-bordered table-striped mb-0">
                        <thead className="">
                            <tr>
                                <th className="text-center product-name">Name</th>
                                <th className="text-center ">Category</th>
                                <th className="text-center">Quantity</th>
                                <th className="text-center">Price</th>
                                <th className="text-center">Cover</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr className="product-rows">
                                    <td> { product.productName } </td>
                                    <td className="text-center"> { product.category }  </td>
                                    <td className="text-center"> Quantity </td>
                                    <td className="text-center">  { product.price }  </td>
                                    <td className="text-center"> 
                                        <img src={ cover + product.cover_image } alt="Product Image" width="80px" height="80px" /> 
                                    </td>
                                </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section >
    )
}

export default Cart
