import React, { useState } from 'react'
import { useCart } from 'react-use-cart'
import { Link, useLocation } from "react-router-dom";
import { logout } from "../Admin/Auth/auth";

// import "./css/responsive.css";
// import "./css/bootstrap.css";
// import "./css/font-awesome.min.css";
// import "./css/style.css";
// import "./assets/css/style.css";
// import "./assets/css/responsive.css";






function Header() {
    const [isSignedIn, setIsSignedIn] = useState(() => {
        const userLogged = localStorage.getItem("access_token");
        return userLogged || false;
    });

    const signout = () => {
        setIsSignedIn(false);
        logout();
    }

    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    /* to use cart */
    const { totalUniqueItems } = useCart();

    const menuItems = [
        { text: "Home", path: "/" },
        { text: "Blog", path: "/blog" },
        { text: "Furniture", path: "/furniture" },
        {
            text: "Pages",
            path: "#",
            submenu: [
                { text: "Product Details", path: "/productDetails" },
                { text: "Blog Details", path: "/blogDetails" },
            ],
        },
        { text: "Offers", path: "/offer" },
        { text: "Checkout", path: "/checkout" },
        { text: "Contact", path: "/contact" },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <header className="header_section long_section px-0">
                <nav className="navbar navbar-expand-lg custom_nav-container ">
                    <a className="navbar-brand" href="index.html">
                        <span>
                            Edgecut
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className=""> </span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="d-flex mx-auto flex-column flex-lg-row align-items-center">
                            <ul className="navbar-nav  ">
                                <li className="nav-item active">
                                    <a className="nav-link" href="./">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./about"> About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./furniture">Furnitures</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./blog">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="./contact">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="quote_btn-container">
                            {isSignedIn ? (
                                <div className="header__right__auth">
                                    <a className="mx-2 p-2 mb-2 bg-danger text-white" href="javascript:void(0)" onClick={signout}>
                                        Sign out
                                    </a>
                                    <a className='p-2 mb-2 bg-success text-white' href="./dashboard">Dashboard</a>
                                </div>

                            ) : (
                                <div className="header__right__auth">
                                    <a className="mx-2 p-2 mb-2 bg-info text-white" href="./signin">
                                        Sign in
                                    </a>
                                    <a className="p-2 mb-2 bg-secondary text-white" href="./register">
                                        Register
                                    </a>
                                </div>
                            )}
                            <form className="form-inline">
                                <a href="cart"> <i className="fa-solid fa-cart-shopping" ></i></a>
                                <div className="tip">{totalUniqueItems}</div>
                            </form>


                        </div>

                    </div>
                </nav>
            </header>
        </div>
    )
}


export default Header
