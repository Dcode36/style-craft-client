import React, { useState, useEffect } from 'react'
import AdminMenu from '../../Components/Layout/AdminMenu'
import toast from 'react-hot-toast';
import axios from 'axios';
import CategoryForm from '../../Components/Form/CategoryForm';
export default function CreateCategory() {
    const [categories, setCategories] = useState([]);
    const [name, setName] = useState("");
    const [selected, setSelected] = useState(null);
    const [updatedName, setUpdatedName] = useState("")
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_API}/api/v1/category/create-category`, { name })
            if (data?.success) {
                toast.success(`${name} is created`);
                getAllCategory();
            }
            else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong in input form")
        }
    }

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

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put(`${process.env.REACT_APP_API}/api/v1/category/update-category/${selected._id}`, { name: updatedName })
            if (data.success) {
                toast.success(`${updatedName} is Updated`);
                setSelected(null)
                setUpdatedName("")
                getAllCategory();
            }
            else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong in updating category");
        }



    }
    const handleDelete = async (pId) => {

        try {
            const { data } = await axios.delete(`${process.env.REACT_APP_API}/api/v1/category/delete-category/${pId}`)
            if (data.success) {
                toast.success(`${name} is deleted`);
                getAllCategory();
            }
            else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong in updating category");
        }



    }
    return (
        <>
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                        <AdminMenu />
                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12">
                        <div className="row">
                            <h1 className="text-center my-5">Manage Category</h1>
                        </div>
                        <div className="p-3">
                            <CategoryForm
                                handleSubmit={handleSubmit}
                                value={name}
                                setValue={setName}
                            />
                        </div>
                        <div className="d-flex justify-content-center align-items-center">

                            <table className="table cat-table ">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Actions</th>

                                    </tr>
                                </thead>
                                <tbody>

                                    {categories?.map((item) => (
                                        <>
                                            <tr className=''>
                                                <td key={item._id}>{item.name}</td>
                                                <td>
                                                    <button className='btn btn-primary mx-2' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { setUpdatedName(item.name); setSelected(item) }}>Edit</button>
                                                    <button className='btn btn-danger mx-2' onClick={() => { handleDelete(item._id) }}>delete</button>
                                                </td>
                                            </tr>
                                        </>

                                    ))}


                                </tbody>
                            </table>

                        </div>
                        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Edit Category</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className="modal-body">
                                        <CategoryForm value={updatedName} setValue={setUpdatedName} handleSubmit={handleUpdate} />
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
       
        </>
    )
}



