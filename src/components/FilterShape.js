import React, { useState } from 'react';
import Swal from 'sweetalert2'


function FilterShape({ data, search }) {

    const [searchShape, setSearchShape] = useState('')
    const [newData, setNewData] = useState('')

    const handlerSubmit = (e) => {
        //this event search a shape if you insert any word
        e.preventDefault()
        if (newData.length > 0) {
            setNewData('')
        }
        if (searchShape !== '') {
            const dataSearch = data.filter(shape => (shape.name.toLowerCase().includes(searchShape.toLocaleLowerCase())))
            if (dataSearch.length > 0) {
                setNewData(dataSearch);
                search(newData)
            } else {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Do not exist this shape!',
                    showConfirmButton: false,
                    timer: 1500
                })
                search([])

            }
        } else search(data)
    }


    return (

        <div div className="card select">
            <div className='h5'>
                <h5>Search Shape</h5>
            </div>

            <form className="d-flex" onSubmit={(e) => handlerSubmit(e)} >


                <input
                    className="form-control me-2"
                    id="searchInput"
                    type="search"
                    value={searchShape}
                    onChange={e => setSearchShape(e.target.value)}
                    placeholder="Search" />
                {/* <button className="btn btn-outline-primary" type="submit">Search</button> */}
            </form>

        </div>
    )

}

export default FilterShape

