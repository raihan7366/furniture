
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/header';
import Footer from '../Footer/footer';

function Contact() {


    // export default function CreateUser() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState([]);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost/React/create_user.php', inputs).then(function (response) {
            console.log(response.data);
            window.alert("Data saved successfully");
            event.target.reset();
            navigate('/contact');
        });
    }
    return (
        <div>
            <Header />
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
                                <form action="" onSubmit={handleSubmit}>
                                    <div>
                                        <input type="text" name='name' onChange={handleChange} placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <input type="text" name='phone' onChange={handleChange} placeholder="Phone Number" />
                                    </div>
                                    <div>
                                        <input type="email" name='email' onChange={handleChange} placeholder="Email" />
                                    </div>
                                    <div>
                                        <input type="text" name='message' onChange={handleChange} className="message-box" placeholder="Message" />
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

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Contact
