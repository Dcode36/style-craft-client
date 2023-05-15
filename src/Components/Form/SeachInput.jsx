import React from 'react'
import { useSearch } from '../../context/Search'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function SeachInput() {
    const [values, setValues] = useSearch();
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const {data}= await axios.get(`${process.env.REACT_APP_API}/api/v1/product/search/${values.keyword}`)
            setValues({...values, results : data});
            navigate("/search")
        } catch (error) {
            console.log(error)
            
        }
    }
    return (
        <div>
            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">

                        <div className="modal-body">
                            <form className="d-flex mt-3" role="search" onSubmit={handleSubmit}>
                                <input
                                    className="form-control me-2 "
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    value={values.keyword}
                                    onChange={(e)=>setValues({...values, keyword : e.target.value})}
                                />
                                <button
                                    className="btn btn-outline-dark"
                                    type="submit"
                                data-bs-dismiss="modal" aria-label="Close"
                                ><i class="bi bi-search text-white-hover">
                                    </i>
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
