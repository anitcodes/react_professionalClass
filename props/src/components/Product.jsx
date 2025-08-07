import React from 'react'

const Product = ({productName, price, inStock= true}) => {
  return (
    <>
    <h1>Product Details:</h1>
    <ul>
        <li>Product Name: {productName}</li>
        <li>Price: {price}</li>
        <li>Available: {inStock ? "In Stock" : "Out of Stock"}</li>
    </ul>
    </>
  )
}

export default Product