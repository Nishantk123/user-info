import React, { useEffect, useState } from "react";
import axios from "axios";

const Product = () =>{
    const [productList, setProductList] = useState([]);

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(res =>{
            if(res.data){
                setProductList(res.data)
            }
        })

    },[])

    console.log("test",productList);
    return(
        <div>
                <h3 className="text-center my-3">Welcome to product page</h3>
                <div className="container">
                    <div className="row">
                        {
                           productList.map((d, n)=>{
                               console.log(d);
                               return(
                                   <div className="col-sm-3 my-3" key={n}>
                                       <div className="card">
                                            <div className="card-body">
                                                <div className="img-container">
                                                    <img src={d.image} className="product-image"/>
                                                </div>
                                                <div className="">
                                                    {d.title}
                                                </div>
                                            </div>
                                        </div>
                                   </div>
                               )
                           }) 
                        }
                    </div>
                </div>
        </div>
    )
}

export default Product;