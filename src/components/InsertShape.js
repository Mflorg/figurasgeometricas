import React, { useState, useEffect } from 'react'

function InsertShape({ addShape }) {

    const [shape, setShape] = useState({
        id: '',
        name: '',
        side: 0
    })
    useEffect(() => {
        obtId()
    }, [shape.name])

    const hadlerChange = e => {
        setShape(
            {
                ...shape,
                [e.target.name]: e.target.value
            }
        )
    }
    const obtId = () => {
        //this function generate a key for new shape
        const newId = Math.floor((Math.random() * (101 - 20)) + 1)
        setShape({
            ...shape,
            id: newId
        })
    }

    const handlerSubmit = (e) => {
        //this event add a new shape when you're clic 'Insert'
        e.preventDefault()
        addShape(shape)
        document.getElementById("createShape").reset();
    }
   
    return (
        <>
            <div className="card">
                <div className="card-title">
                    <br/>
                    <h2>New Shape</h2>
                </div>
                <form className="card-body" onSubmit={handlerSubmit} id="createShape">

                    <div className="form-group">
                        <input
                            placeholder="Insert Shape..."
                            type="text"
                            className="form-control"
                            onChange={e => hadlerChange(e)}
                            required
                            name="name" />
                    </div>
                    <div className="form-group">
                        <label className="form-label"> Number of Sides: </label>
                        <select className="form-control"
                            name="side"
                            onChange={e => hadlerChange(e)}>
                            <option value="">select</option>
                            <option value={1}>One</option>
                            <option value={2}>Two</option>
                            <option value={3}>Three</option>
                            <option value={4}>Four</option>
                            <option value={5}>Five</option>
                            <option value={6}>Six</option>
                            <option value={7}>Seven</option>
                            <option value={8}>Eight</option>
                            <option value={9}>Nine</option>
                        </select>
                    </div>
                    <button className="btn btn-primary">
                       Insert
                </button>
                </form>
            </div>
        </>
    )

}

export default InsertShape;