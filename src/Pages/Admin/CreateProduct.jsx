import React, { useState, useEffect } from 'react'
import Layout from '../../Components/Layout/Layout'
import AdminMenu from '../../Components/Layout/AdminMenu';
import toast from 'react-hot-toast';
import axios from 'axios';
import { Select } from 'antd'
import { useNavigate } from 'react-router-dom';
import Footer from '../../Components/Layout/Footer';
const { Option } = Select;
export default function CreateProduct() {
    const [categories, setCategories] = useState([]);
    const [photo, setPhoto] = useState("");
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [quantitiy, setQuantity] = useState("");
    const [shipping, setShipping] = useState("");

    const navigate = useNavigate();
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get(`${process.env.REACT_APP_API}/api/v1/category/all-category`);

            if (data?.success) {
                setCategories(data?.category);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong in getting category");
        }
    }

    useEffect(() => {
        getAllCategory();
    }, [])


    const handleCreate = async (e) => {
        e.preventDefault();
        try {
            const productData = new FormData();
            productData.append("name", name);
            productData.append("description", description);
            productData.append("price", price);
            productData.append("quantity", quantitiy);
            productData.append("photo", photo);
            productData.append("category", category);
            const { data } = axios.post(`${process.env.REACT_APP_API}/api/v1/product/create-product`, productData)
            if (data?.success) {
                toast.error(data?.message)

            } else {

                toast.success("product Created Succesfully");
                navigate('/dashboard/admin/products');
            }
        } catch (error) {
            console.log(error)
            toast.error("Something went Wrong While Creting the Product");

        }
    }
    return (
        <div>

            <div className="row">
                <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                    <AdminMenu />
                </div>
                <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                    <div className="row">
                        <h1 className="text-center fw-bold  my-5">Create Product</h1>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="m-1 w-75">
                                <Select
                                    bordered={false}
                                    placeholder="Select Category"
                                    size='large'
                                    showSearch
                                    className='form-select mb-3 col-10'
                                    onChange={(value) => { setCategory(value) }}
                                >
                                    {
                                        categories?.map(c => (
                                            <Option key={c._id} className='px-2' value={c._id}>{c.name}</Option>
                                        ))
                                    }
                                </Select>
                                <div className="mb-3">
                                    <label className='btn btn-outline-secondary  w-100'>
                                        {photo ? photo.name : "Upload Photo"}
                                        <input
                                            type="file"
                                            name="photo"
                                            accept='image/*'
                                            onChange={(e) => { setPhoto(e.target.files[0]) }}
                                            hidden
                                        />
                                    </label>

                                </div>

                                <div className="mb-3">
                                    {photo && (
                                        <div className="text-center">
                                            <img src={URL.createObjectURL(photo)} alt="Product Photo" height={'200px'} className='img img-responsive' />
                                        </div>
                                    )}
                                </div>

                                <div className="mb-3">
                                    <input
                                        type="text"
                                        value={name}
                                        placeholder='Write a name of product'
                                        className='form-control'
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <textarea
                                        type="text"
                                        value={description}
                                        placeholder="write a description"
                                        className="form-control"
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        value={price}
                                        placeholder='Price of Product'
                                        className='form-control'
                                        onChange={(e) => setPrice(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        value={quantitiy}
                                        placeholder='Quantity of product'
                                        className='form-control'
                                        onChange={(e) => setQuantity(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <Select
                                        bordered={false}
                                        placeholder="Select Shipping "
                                        size="large"
                                        showSearch
                                        className="form-select mb-3"
                                        onChange={(value) => {
                                            setShipping(value);
                                        }}
                                    >
                                        <Option value="0">No</Option>
                                        <Option value="1">Yes</Option>
                                    </Select>
                                </div>

                                <div className="mb-3">
                                    <button className='btn btn-primary' onClick={handleCreate}>Create Product</button>
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
