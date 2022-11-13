import axios from 'axios'
import React from 'react'

function BinItem(props){
    const deleteBinHandler = (id) => {
        axios.delete(`http://localhost:8000/api/bin/${id}`).then(res =>
        console.log(res.data))}
        return(
            <div>
                <p>
                    <span style={{fontWeight:'bold, underline'}}>{props.bin.id} : </span>
                    {props.bin.level}<button onClick={()=>deleteBinHandler(props.bin.id)}
                    className="btn btn-outline-danger my-2 mx-2" style={
                        {'borderRadius':'50px',}}>X</button>
                    <hr></hr>
                </p>
            </div>
        )
}

export default BinItem;