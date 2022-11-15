import axios from 'axios'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function BinItem(props){
    const deleteBinHandler = (id) => {
        axios.delete(`http://localhost:8000/api/bin/${id}`).then(res =>
        console.log(res.data))}
        return(

        // <div className="col-lg-4 col-md-6 mb-4">
        //     <div className="card h-100" style={{backgroundColor: "#696969", color: "white"}}>
        //         <div className="card-body">
        //             <h5 className="card-title">Bin {props.bin.id}</h5>
        //             <p className="card-text">Filled {props.bin.level}%</p>
        //         </div>
        //         <button onClick={()=>deleteBinHandler(props.bin.id)}
        //             className="btn btn-outline-danger my-2 mx-2" style={
        //                 {'borderRadius':'50px',}}>Delete</button>
        //     </div>
        // </div>
        <center>
            <div class="main-container">
                <div class="bin-top"></div>
                <div class="bin-body"></div>
                {props.bin.level>0 &&
                    <div class="full-status-1"></div>
                }{props.bin.level>25 &&
                    <div class="full-status-2"></div>
                }{props.bin.level>50 &&
                    <div class="full-status-3"></div>
                }{props.bin.level>75 &&
                    <div class="full-status-4"></div>
                }
            </div>
        </center>

        )
}

export default BinItem;