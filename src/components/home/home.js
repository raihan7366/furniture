import React, { useState, useEffect } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Furnitureapp } from '../../api/Furnitureapp';

function Home() {
    const [furnituresData, setFurnituresData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Furnitureapp();
                setFurnituresData(data);

            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <div className="hero_area">

                <Header />

                <section className="slider_section long_section">
                    <div id="customCarousel" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="detail-box">
                                                <h1>
                                                    For All Your <br />
                                                    Furniture Needs
                                                </h1>
                                                <p>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                                                </p>
                                                <div className="btn-box">
                                                    <a href="" className="btn1">
                                                        Contact Us
                                                    </a>
                                                    <a href="" className="btn2">
                                                        About Us
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="img-box">
                                                <img src="images/slider-bg.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="detail-box">
                                                <h1>
                                                    For All Your <br />
                                                    Furniture Needs
                                                </h1>
                                                <p>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                                                </p>
                                                <div className="btn-box">
                                                    <a href="" className="btn1">
                                                        Contact Us
                                                    </a>
                                                    <a href="" className="btn2">
                                                        About Us
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="img-box">
                                                <img src="images/slider-2.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-5">
                                            <div className="detail-box">
                                                <h1>
                                                    For All Your <br />
                                                    Furniture Needs
                                                </h1>
                                                <p>
                                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
                                                </p>
                                                <div className="btn-box">
                                                    <a href="" className="btn1">
                                                        Contact Us
                                                    </a>
                                                    <a href="" className="btn2">
                                                        About Us
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-7">
                                            <div className="img-box">
                                                <img src="images/slider-img.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ol className="carousel-indicators">
                            <li data-target="#customCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#customCarousel" data-slide-to="1"></li>
                            <li data-target="#customCarousel" data-slide-to="2"></li>
                        </ol>
                    </div>
                </section>

            </div>



            <section className="furniture_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Our Furniture
                        </h2>
                        <p>
                            which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't an
                        </p>
                    </div>
                    <div className="row">
                        {furnituresData.map((furniture, index) => (
                            <div className="col-md-6 col-lg-4" key={index}>
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
                                            <a href="">
                                                Buy Now
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
                    </div>
                </div>
            </section>



            <section className="about_section layout_padding long_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="img-box">
                                <img src="images/about-img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="detail-box">
                                <div className="heading_container">
                                    <h2>
                                        About Us
                                    </h2>
                                </div>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem eum consequuntur ipsam repellat dolor soluta aliquid laborum, eius odit consectetur vel quasi in quidem, eveniet ab est corporis tempore.
                                </p>
                                <a href="">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="blog_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Latest Blog
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4 mx-auto">
                            <div className="box">
                                <div className="img-box">
                                    <img src="images/b1.jpg" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Look even slightly believable. If you are
                                    </h5>
                                    <p>
                                        alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                    </p>
                                    <a href="">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mx-auto">
                            <div className="box">
                                <div className="img-box">
                                    <img src="images/b2.jpg" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Anything embarrassing hidden in the middle
                                    </h5>
                                    <p>
                                        alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                    </p>
                                    <a href="">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 mx-auto">
                            <div className="box">
                                <div className="img-box">
                                    <img src="images/b3.jpg" alt="" />
                                </div>
                                <div className="detail-box">
                                    <h5>
                                        Molestias magni natus dolores odio commodi. Quaerat!
                                    </h5>
                                    <p>
                                        alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                                    </p>
                                    <a href="">
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section className="client_section layout_padding-bottom">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Testimonial
                        </h2>
                    </div>
                    <div id="carouselExample2Controls" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                    <div className="col-md-11 col-lg-10 mx-auto">
                                        <div className="box">
                                            <div className="img-box">
                                                <img src="images/client.jpg" alt="" />
                                            </div>
                                            <div className="detail-box">
                                                <div className="name">
                                                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                                                    <h6>
                                                        Siaalya
                                                    </h6>
                                                </div>
                                                <p>
                                                    It is a long established fact that a reader will be
                                                    distracted by the readable cIt is a long established fact
                                                    that a reader will be distracted by the readable c
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-md-11 col-lg-10 mx-auto">
                                        <div className="box">
                                            <div className="img-box">
                                                <img src="images/client.jpg" alt="" />
                                            </div>
                                            <div className="detail-box">
                                                <div className="name">
                                                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                                                    <h6>
                                                        Siaalya
                                                    </h6>
                                                </div>
                                                <p>
                                                    It is a long established fact that a reader will be
                                                    distracted by the readable cIt is a long established fact
                                                    that a reader will be distracted by the readable c
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="row">
                                    <div className="col-md-11 col-lg-10 mx-auto">
                                        <div className="box">
                                            <div className="img-box">
                                                <img src="images/client.jpg" alt="" />
                                            </div>
                                            <div className="detail-box">
                                                <div className="name">
                                                    <i className="fa fa-quote-left" aria-hidden="true"></i>
                                                    <h6>
                                                        Siaalya
                                                    </h6>
                                                </div>
                                                <p>
                                                    It is a long established fact that a reader will be
                                                    distracted by the readable cIt is a long established fact
                                                    that a reader will be distracted by the readable c
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel_btn-container">
                            <a className="carousel-control-prev" href="#carouselExample2Controls" role="button" data-slide="prev">
                                <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExample2Controls" role="button" data-slide="next">
                                <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>


            <section className="contact_section  long_section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="form_container">
                                <div className="heading_container">
                                    <h2>
                                        Contact Us
                                    </h2>
                                </div>
                                <form action="">
                                    <div>
                                        <input type="text" placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Phone Number" />
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Email" />
                                    </div>
                                    <div>
                                        <input type="text" className="message-box" placeholder="Message" />
                                    </div>
                                    <div className="btn_box">
                                        <button>
                                            SEND
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="map_container">
                                <div className="map">
                                    <div id="googleMap">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>






            <Footer />



            <script src="js/jquery-3.4.1.min.js"></script>

            <script src="js/bootstrap.js"></script>

            <script src="js/custom.js"></script>

            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCh39n5U-4IoWpsVGUHWdqB6puEkhRLdmI&callback=myMap"></script>


        </div>
    )
}

export default Home
