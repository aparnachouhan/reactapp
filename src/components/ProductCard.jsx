import React from "react";


const ProductCard = (props) => {
    let product = props.product
    return (
        <>

            <div className="p-6 shadow flex-col">
                <div className="">
                    <img className="w-full h-60" src={product.images[0]} />
                </div>
                <div className="">
                    <h1 className="text-xl  font-bold  mt-4 mb-4">{product.title}</h1>
                    <p className="text-gray-700">{product.description}</p>
                    <div className="">
                        <p className="text-gray-700 text-xl">Price - Rs.{product.price} </p>
                    </div>
                </div>
                <div className="flex flex-row mt-4 items-center justify-between">
                    <button className="py-2 px-4 bg-green-500 text-white hover:bg-black">View</button>
                    <button className="py-2 px-4 bg-blue-500 text-white hover:bg-black">Add to Cart</button>
                </div>

            </div>
        </>
    )
}

export default ProductCard;
