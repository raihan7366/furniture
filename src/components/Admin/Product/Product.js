import axios from "axios"
import { useEffect, useState } from "react";
import Sidebar from "../Layout/sidebar";
import Footer from "../Layout/footer";
export default function Product() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [brands, setBrands] = useState([]);
    const [inputs, setInputs] = useState([]);
    useEffect(() => {
        getDatas();
    }, []);
    function getDatas() {
        axios.get(`${global.config.apiUrl}furniture`).then(function (response) {
            setProducts(response.data.data);
        });
    }

    const deleteUser = (id) => {
        axios.delete(`${global.config.apiUrl}furniture/delete/${id}`).then(function (response) {
            getDatas();
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    }
    const onFileChange = (e) => {
        let files = e.target.files;
        let fileReader = new FileReader();
        fileReader.readAsDataURL(files[0]);

        fileReader.onload = (event) => {
            const name = "image";
            const value = event.target.result
            setInputs(values => ({ ...values, [name]: value }));
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(`${global.config.apiUrl}furniture/create`, inputs).then(function (response) {
            console.log(response.data)
            getDatas();
            if (response.data.status == 1)
                document.getElementById('modelbutton').click();
        });
    }
    const clearData = () => {

        setInputs(values => ({ ...values, "id": "", "price": "", "name": "", "image": "", }))
    }


    /* for update */

    function getSingleProduct(d) {

        document.getElementById('modelbutton').click();
        setInputs(d);
        setInputs(values => ({ ...values, "image": "" }))
        // document.getElementById('modelbutton').click();
        // axios.get(`http://localhost/react_api/Products/single_product.php?id=${id}`).then(function (response) {
        //     setInputs(response.data);
        //     setInputs(values => ({ ...values, "image": "" }))
        // });
    }

    return (
        <div>

            <div className="container">
                <div className="row">
                    <Sidebar />
                    <div className="col-10">
                        <h1><small>Furniture List</small></h1>


                        <button onClick={clearData} id="modelbutton" type="button" className="btn btn-primary btn-sm float-end" data-toggle="modal" data-target="#myModal">
                            Add Product
                        </button>

 

                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Image</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.length > 0 ? (
                                    products.map((d, key) =>
                                        <tr key={key}>
                                            <td>{d.id}</td>
                                            <td>{d.name}</td>
                                            <td>{d.price}</td>
                                            <td><img src={global.config.apiUrl + d.image} alt="" width={50} /></td>
                                            <td>
                                                <a href="javascript:void(0)" className="btn btn-primary me-2" onClick={() => getSingleProduct(d)} >Edit</a>
                                                <a href="javascript:void(0)" className="btn btn-danger btn-xs" onClick={() => deleteUser(d.id)}>Delete</a>
                                            </td>
                                        </tr>
                                    )
                                ) : (
                                    <p>No Products available</p>
                                )}

                            </tbody>
                        </table>
                        <div className="modal" id="myModal">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title">Product Data</h4>
                                        {/* <button type="button" className="btn-close" data-dismiss="modal"></button> */}
                                    </div>


                                    <div className="modal-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">Name</label>
                                                        <input value={inputs.name} type="text" className="form-control" name="name" onChange={handleChange} />
                                                        <input value={inputs.id} type="hidden" name="id" />
                                                    </div>
                                                </div>

                                                <div className="col-sm-4">
                                                    <div className="mb-3">
                                                        <label className="form-label">Price</label>
                                                        <input type="text" className="form-control" name="price" value={inputs.price} onChange={handleChange} />
                                                    </div>
                                                </div>

                                                <div className="col-sm-4">
                                                    <div className="mb-3">
                                                        <label className="form-label">Image</label>
                                                        <input type="file" className="form-control" name="image" onChange={onFileChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-3 offset-sm-3">
                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                </div>
                                                <div className="col-sm-3">
                                                    <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                                                </div>
                                            </div>


                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}