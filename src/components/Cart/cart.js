
import React, { useState } from "react";
import Header from '../Header/header'
import { useCart } from "react-use-cart";

const Cart = () => {
    const { isEmpty, cartTotal, items, updateItemQuantity, removeItem, } = useCart();
    const [couponCode, setCouponCode] = useState("");
    const { setCartMetadata } = useCart();
    const [discount, setDiscount] = useState(0);
    const applyCoupon = () => {
        if (couponCode === "rsa33") {
            const couponDiscount = cartTotal * 0.15; // 15% discount
            setDiscount(couponDiscount);
            setCartMetadata({ discount: couponDiscount });
        } else {
            setDiscount(0); // Reset discount if the coupon code is invalid.
        }
    };
    const discountedTotal = cartTotal - discount;
    if (isEmpty) return (
        <>
            <Header /> <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <a href="/"><i className="fa fa-home"></i> Home</a>
                                <span>Shopping cart</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container p-5 m-5 text-center"><h1 className="p-5 m-5">Your cart is empty</h1>
            </div>

        </>
    )

    return (
        <div className="">
            <Header />

            {/* Breadcrumb Begin */}
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <a href="/"><i className="fa fa-home"></i> Home/</a>
                                <span>Shopping cart</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Breadcrumb End */}

            {/* Shop Cart Section Begin */}
            <section className="shop-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shop__cart__table">
                                <table className="">
                                    <thead className="bg-danger">
                                        <tr >
                                            <th className="text-white">Product</th>
                                            <th className="text-white">Price</th>
                                            <th className="text-white">Quantity</th>
                                            <th className="text-white">Total</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {items.map((item) => (
                                            <tr>
                                                <td className="cart__product__item">
                                                    <img src={global.config.apiUrl + item.image} width="100px" alt="" />
                                                    <div className="cart__product__item__title">
                                                        <h6>{item.name}</h6>
                                                        {/* <div className="rating">
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                            <i className="fa fa-star"></i>
                                                        </div> */}
                                                    </div>
                                                </td>
                                                <td className="cart__price">{"$" + item.price}</td>
                                                <td className="cart__quantity">
                                                    <div className="pro-qty">
                                                        <button className="btn btn-link" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</button>
                                                        {item.quantity}
                                                        <button className="btn btn-link" onClick={() => updateItemQuantity(item.id, item.quantity + 1)} > + </button>
                                                    </div>
                                                </td>
                                                <td className="cart__total">{"$" + item.itemTotal.toFixed(2)}</td>
                                                <td className="cart__close"><span className="fa-solid fa-circle-xmark" onClick={() => removeItem(item.id)}></span></td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className=" ml-3 mr-auto align-center">
                            <div className="cart__btn ">
                                <a href="./furniture" className="bg-danger text-white ">Continue Shopping</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                            <div className="cart__btn update__btn">
                                <a href="#"><span className="icon_loading"></span> Update cart</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="discount__content">
                                <h6>Discount codes</h6>
                                <form onSubmit={(e) => { e.preventDefault(); applyCoupon(); }}>
                                    <input type="text" placeholder="Enter your coupon code" value={couponCode} onChange={(e) => setCouponCode(e.target.value)} />


                                    <div onSubmit={(e) => { e.preventDefault(); applyCoupon(); }}>
                                        <button type="submit" className="btn btn-outline-danger ">Apply</button>
                                    </div>
                                </form>
                            </div>
                            {discount > 0 && (
                                <div className="applied-discount ">
                                    Discount Applied: {"$" + discount.toFixed(2)}
                                </div>
                            )}
                        </div>
                        <div className="col-lg-4 offset-lg-8">
                            <div className="cart__total__procced">
                                <h6>Cart total</h6>
                                <ul>
                                    <li>Subtotal <span>{"$" + cartTotal.toFixed(2)}</span></li>
                                    <li>Discount <span>{"$" + discount.toFixed(2)}</span></li>
                                    <li>Total <span>{"$" + discountedTotal.toFixed(2)}</span></li>
                                </ul>
                                <a href="./checkout" onClick={() => (window.location.href = "./checkout")} className=" ">Proceed to checkout</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Shop Cart Section End */}


        </div>
    );



}

export default Cart
