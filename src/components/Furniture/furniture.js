import React, { useState, useEffect } from 'react';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import { Furnitureapp } from '../../api/Furnitureapp';
import AllProducts from '../../api/AllProducts';

const Furniture = props => {
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
            <Header />
            <section className="furniture_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Our Furniture
                        </h2>
                        <p>
                            All your desired Furniture at one stop
                        </p>
                    </div>
                    <AllProducts />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Furniture
