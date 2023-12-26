import React, { useState, useEffect } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Blogapp } from '../../api/Blogapp';

const Blog = props => {
    const [blogData, setBlogData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await Blogapp();
                setBlogData(data);

            } catch (error) {
                console.error(error.message);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <Header />
            <section className="blog_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Latest Blog
                        </h2>
                    </div>
                    <div className="row">
                        {blogData.map((blog, index) => (
                            <div className="col-md-6 col-lg-4 mx-auto" key={index}>
                                <div className="box">
                                    <div className="img-box">
                                        <img src={blog.image} alt={blog.title} />
                                    </div>
                                    <div className="detail-box">
                                        <h5>
                                            {blog.title}
                                        </h5>
                                        <p>
                                            {blog.description}
                                        </p>
                                        <a href="">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                        {/* <div className="col-md-6 col-lg-4 mx-auto">
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
                        </div> */}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Blog
