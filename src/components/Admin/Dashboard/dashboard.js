import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Layout/sidebar";
import Footer from "../Layout/footer";
// import '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';



function Dashboard() {
    const userLogged = JSON.parse(localStorage.getItem("userdata"));
    return (
        <div className="container">
            <div className="row">
                <Sidebar />
                <div className="col-9">
                    <h1>Hi {userLogged.name},</h1>
                </div>

                <Footer />
            </div>


        </div>
    );
}

export default Dashboard;