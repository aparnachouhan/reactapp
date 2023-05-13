import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const Products = () => {

    const [products, setProducts] = useState([])

    const getData = async () => {
        //   const data = axios.get('https://api.escuelajs.co/api/v1/products').then((res) => {
        //         console.log(res)
        //     }).catch((err) => {
        //         console.log(err)
        //     })
        const data = await axios.get('https://api.escuelajs.co/api/v1/products')
        setProducts(data.data)
    }

    useEffect(() => {
        getData();
    }, [])

    return (

        <>
            <div className="grid md:grid-cols-5 grid-cols-2 P-20">
                {products.map((product) => {
                    return (
                        <ProductCard product={product}/>
                    )
                })}
            </div>
        </>
    )
}

export default Products;
