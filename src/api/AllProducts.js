import React, { useEffect, useState } from "react"
import { useCart } from "react-use-cart";

const AllProducts = () => {
    const [shopData, setProducts] = useState([])
    const { addItem } = useCart();
    const fetchProductsData = () => {
        fetch(`${global.config.apiUrl}furniture`).then(response => {
            return response.json()
        }).then(data => {
            setProducts(data.data)
        })
    }
    useEffect(() => {
        fetchProductsData()
    }, []);

    return (
        <>
            {shopData.length > 0 && (
                <div className="row">

                    {shopData.map((furniture, index) => (
                        <div className="col-md-6 col-lg-4" key={furniture.id}>
                            <div className="box">
                                <div className="img-box">
                                    <img src={global.config.apiUrl + furniture.image} alt={furniture.name} />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        {furniture.name}

                                    </h5>
                                    <div className="price_box">
                                        <h6 className="price_heading">
                                            <span>$</span> {furniture.price}
                                        </h6>
                                        {/* <a href="">
                                            Buy Now
                                        </a> */}

                                        <a href="" onClick={() => addItem(furniture)}>
                                            <i className="fa-solid fa-cart-plus" ></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* <div className="col-md-6 col-lg-4">
                    <div className="box">
                        <div className="img-box">
                            <img src="images/f2.png" alt="" />
                        </div>
                        <div className="detail-box">
                            <h5>
                                Double Bed Design
                            </h5>
                            <div className="price_box">
                                <h6 className="price_heading">
                                    <span>$</span> 200.00
                                </h6>
                                <a href="">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="box">
                        <div className="img-box">
                            <img src="images/f3.png" alt="" />
                        </div>
                        <div className="detail-box">
                            <h5>
                                House Chair Design
                            </h5>
                            <div className="price_box">
                                <h6 className="price_heading">
                                    <span>$</span> 200.00
                                </h6>
                                <a href="">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="box">
                        <div className="img-box">
                            <img src="images/f4.png" alt="" />
                        </div>
                        <div className="detail-box">
                            <h5>
                                brown Table Design
                            </h5>
                            <div className="price_box">
                                <h6 className="price_heading">
                                    <span>$</span> 100.00
                                </h6>
                                <a href="">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="box">
                        <div className="img-box">
                            <img src="images/f5.png" alt="" />
                        </div>
                        <div className="detail-box">
                            <h5>
                                Blue Chair Design
                            </h5>
                            <div className="price_box">
                                <h6 className="price_heading">
                                    <span>$</span> 200.00
                                </h6>
                                <a href="">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4">
                    <div className="box">
                        <div className="img-box">
                            <img src="images/f6.png" alt="" />
                        </div>
                        <div className="detail-box">
                            <h5>
                                Brown Table Design
                            </h5>
                            <div className="price_box">
                                <h6 className="price_heading">
                                    <span>$</span> 200.00
                                </h6>
                                <a href="">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div> */}
                </div >
            )}
        </>
    );
}

export default AllProducts;