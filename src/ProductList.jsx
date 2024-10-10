// src/ProductList.jsx
import React, { useEffect, useState } from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((response) => response.json())
            .then((data) => {
                console.log(data); // Log the response to check its structure
                setProducts(data.products); // Update state with fetched products
            })
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center">Product List</h1>
            <div className="row">
                {products.map((product) => (
                    <div className="col-md-4 mb-4" key={product.id}>
                        <div className="card">
                            <img src={product.image} className="card-img-top" alt={product.name} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5> {/* Display product name */}
                                <p className="card-text">${product.price}</p>
                                <a href="#" className="btn btn-primary">View Product</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
