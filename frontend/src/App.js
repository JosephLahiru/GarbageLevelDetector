import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import BinView from './components/BinListView';

function App() {

  const [binList, setBinList] = useState([{}])
  const [id, setId] = useState('')
  const [level, setLevel] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8000/api/bin')
    .then(res =>{
      setBinList(res.data)
    })
  });

  const addBinHandler = () => {
    axios.post('http://localhost:8000/api/bin/', {'id':id,
  'level':level}).then(res => console.log(res))
  };

  return (
    <div className='App list-group-item justify-content-center
    aligh-items-center mx-auto' style={{"width":"400px",
    "backgroundColor":"white", "marginTop":"15px"}}>
      <h1 className="card text-white bg-info mb-1"
      styleName="max-width: 20rem;">GARBAGE LEVEL DETECTOR</h1>
      <h6 className="card text-white bg-info mb-3">
        USING FARM STACK</h6>
      <div className="card-body">
        <h5 className="card text-white bg-dark mb-3">Add A Garbage Bin</h5>
        <span className="card-text">
          <input className="mb-2 form-control idIn" onChange={event => setId(event.target.value)} placeholder="ID"/>
          <input className="mb-2 form-control levelIn" onChange={event => setLevel(event.target.value)} placeholder="LEVEL"/>

          <button className="btn btn-outline-primary mx-2 mb-3" style={
          {'borderRadius':"50px", "font-weight":"bold"}} onClick={addBinHandler}>Add Bin</button>
        </span>

        <h5 className="card text-white bg-dark mb-3">Your Bins</h5>
        <div>
          <BinView binList={binList}/>
        </div>
      </div>
      <h6 className="card text-dark bg-warning py-1 mb-0">Copyright 2022, All rights reserved &copy;</h6>
    </div>
  );
}

export default App;
