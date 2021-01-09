import React, { useEffect, useState } from 'react'
import { shapes } from '../db/data'
import InsertShape from './InsertShape'
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import Swal from 'sweetalert2'
import FilterShape from './FilterShape'

function ListShapes() {
    const [data, setData] = useState(shapes)
    const [edit, setEdit] = useState(false)
    const [id, setId] = useState('')
    const [nameE, setNameE] = useState('')
    const [side, setSide] = useState('')
    const [ins, setIns] = useState(false)
    const [newArray, setNewArray]=useState('')
    const [flagSearch, setFlagSearch]=useState(false)
    
    useEffect(() => {
    
        setIns(false)
    }, [ins])


    const addShape = (shape) => {
        //this function add a new shape
        const newData = data
        newData.push(shape)
        setData(newData)
        setIns(true)
        setFlagSearch(false)
    }

    const removeItem = id => {
        //this function remove a shape selected
  
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, I am sure!'
        }).then((result) => {
            console.log(id)
            setData(data.filter(dat => dat.id !== id))
            setFlagSearch(false)
        

            if (result.isConfirmed) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your shape has been deleted',
                    showConfirmButton: false,
                    timer: 1500
                })
                
            }
        })
       

    }

    const selectItem = (shape) => {
        //this fuction capture information of the shape selected
        setEdit(true)
        setId(shape.id)
        setSide(shape.side)
        setNameE(shape.name)

    }

    const editShape = () => {
        //this function update to the shape selected
        const newData = data
        newData.map(shape => {
            if (shape.id === id) {
                shape.name = nameE;
                shape.side = side
            }
        })
        setFlagSearch(false)
        setData(newData)
    }

    const handlserSearch=(dataS)=>{
        
        if(dataS.length>0){
            setFlagSearch(true)
            setNewArray(dataS)

        }
    }

    //this variable show information in the screen
    const loadData =flagSearch && newArray.length>0 ? newArray.map((shape, i) => {
            return (
                <div className="col-md-4" key={i}>
                    <div className="card hover mt-4" key={shape.id}>
                        {/* <img className="card-img-top medium" src={shape.image} alt={shape.name}/> */}
                        <div className="card-body">
                            <h2>{shape.name}</h2>
                            <div className="lines">Side's Number: {shape.side}</div>
                            <div className="buttons">
                                <button className="btn btn-primary" onClick={() => selectItem(shape)}>Edit</button> {' '}
                                <button className="btn btn-danger" onClick={() => removeItem(shape.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        :
        data.map((shape, i) => {
            return (
                <div className="col-md-4" key={i}>
                    <div className="card hover mt-4" key={shape.id}>
                        {/* <img className="card-img-top medium" src={shape.image} alt={shape.name}/> */}
                        <div className="card-body">
                            <h2>{shape.name}</h2>
                            <div className="lines">Side's Number: {shape.side}</div>
                            <div className="buttons">
                                <button className="btn btn-primary" onClick={() => selectItem(shape)}>Edit</button> {' '}
                                <button className="btn btn-danger" onClick={() => removeItem(shape.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })


    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-3">
                    <FilterShape data={data} search={handlserSearch}/>
                    <InsertShape addShape={addShape} />

                </div>
                <div className="col-md-8">
                    <div className="row center">
                        {loadData}

                    </div>
                </div >
            </div >
            <Modal isOpen={edit}>
                <ModalHeader>
                    <div>
                        <h3>
                            Edit you Shape
                        </h3>
                    </div>
                </ModalHeader>
                <ModalBody>
                    <div className="form-group">
                        <input
                            placeholder="Insert Shape..."
                            type="text"
                            className="form-control"
                            onChange={e => setNameE(e.target.value)}
                            name="name"
                            value={nameE} />
                    </div>
                    <div className="form-group">
                        <label className="label"> The Sides are: {side} </label>
                        <select className="form-control"
                            onChange={e => setSide(e.target.value)}
                            name="side">
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

                </ModalBody>
                <ModalFooter>
                    <div className="button">
                        <button className="btn btn-primary " onClick={() => { setEdit(false); editShape() }}>
                            Save
                </button>
                    </div>

                </ModalFooter>

            </Modal>

        </div >
    )

}

export default ListShapes