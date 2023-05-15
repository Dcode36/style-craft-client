import React from 'react'

export default function CategoryForm({handleSubmit, value,setValue}) {
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='row d-flex justify-content-center '>
                    <div className="mb-3 col-lg-10 col-md-10 col-sm-12 col-xs-10">
                        <input type="text" className="form-control" placeholder='Enter new Category' value={value} onChange={(e)=>setValue(e.target.value)}/>
                        <button type="submit" className="btn btn-primary my-4">Submit</button>
                    </div>
                 
                    
                </div>
              
        </form>
        </div >
    )
}
