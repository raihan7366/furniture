import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Layout/sidebar";
import './order.css'


export default function Order() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
        axios
            .get(`${global.config.apiUrl}order`)
            .then(function (response) {
                if (response.data.status === 1 && Array.isArray(response.data.data)) {
                    setUsers(response.data.data);
                } else {
                    console.error("API response does not contain the expected data structure:", response.data);
                }
            })
            .catch(function (error) {
                console.error("Error fetching users:", error);
            });
    }


    const deleteUser = (id) => {
        axios
            .delete(`${global.config.apiUrl}order/delete/${id}`)
            .then(function (response) {
                console.log(response.data);
                getUsers();
            })
            .catch(function (error) {
                console.error("Error deleting user:", error);
            });
    }

    return (
        <div className="container">
            <div className="row">
                <Sidebar />
                <div className="col-10">

                    <h1><small>Order List</small></h1>

                    <div className="col">
                        <table className="table table-hover">
                            <thead >
                                <tr>
                                    <th scope="col" width="50">Order Id</th>
                                    <th scope="col">Name</th>
                                    {/* <th scope="col">Company Name</th> */}
                                    <th scope="col">Address</th>
                                    {/* <th scope="col">Country/State</th> */}
                                    {/* <th scope="col">Postal Code/ZIP</th> */}

                                    {/* <th scope="col">Email</th> */}
                                    <th scope="col">Phone</th>
                                    <th scope="col">Items</th>
                                    <th scope="col">Discount</th>
                                    <th scope="col">Subtotal</th>
                                    <th scope="col">Total</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user, key) => (
                                    <tr key={key}>
                                        <td>{user.order_id}</td>
                                        <td>{user.first_name}</td>
                                        {/* <td>{user.company_name}</td> */}
                                        <td>{user.address}</td>
                                        {/* <td>{user.country}</td> */}
                                        {/* <td>{user.postal}</td> */}
                                        {/* <td>{user.email}</td> */}
                                        <td>{user.phone}</td>
                                        <td>
                                            {Array.isArray(user.items) ? (
                                                <ul>
                                                    {user.items.map((item, index) => (
                                                        <li key={index}>{item.name} - {item.price}</li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                "No items available"
                                            )}
                                        </td>
                                        <td>{user.discount}</td>
                                        <td>{user.total}</td>
                                        <td>{user.sub_total}</td>



                                        <td>
                                            <Link
                                                to={`user/${user.id}/edit`}
                                                className="btn btn-primary mr-2 w-100"
                                            >
                                                Edit
                                            </Link>
                                            <button
                                                onClick={() => deleteUser(user.id)}
                                                className="btn btn-danger  w-100"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>


    );
}