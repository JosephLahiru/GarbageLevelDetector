import axios from 'axios'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function BinItem(props){
    const deleteBinHandler = (id) => {
        axios.delete(`http://localhost:8000/api/bin/${id}`).then(res =>
        console.log(res.data))}
        return(

        <center>
            <div className='main-container'>
                <p className="card-text">Filled {props.bin.level}%</p>
                <div className='bin-top'></div>
                <div className='bin-body'></div>
                {props.bin.level>0 && <div className='full-status-1'></div>}
                {props.bin.level>25 && <div className='full-status-2'></div>}
                {props.bin.level>50 && <div className='full-status-3'></div>}
                {props.bin.level>75 && <div className='full-status-4'></div>}
            </div>
            <div className='main-container-footer'>
            Bin Type : {props.bin.type}
            <br/><br/>
            <button onClick={()=>deleteBinHandler(props.bin.id)}
                    className="btn btn-outline-danger" style={
                        {'borderRadius':'50px'}}>Delete</button>
            </div>
        </center>
        )
}

export default BinItem;