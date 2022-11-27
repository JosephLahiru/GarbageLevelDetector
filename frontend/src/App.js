import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import BinView from './components/BinListView';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TYPES = ['General Waste', 'Recycling Paper and Cardboard', 'Cans and Bottles', 'Recyclable Food'];

const TYPES = ['General Waste', 'Recycling Paper and Cardboard', 'Cans and Bottles', 'Recyclable Food'];

function App() {

  const [binList, setBinList] = useState([{}])
  const [id, setId] = useState('')
  const [level, setLevel] = useState('')
  const [type, setType] = useState('')

  useEffect(() => {
    axios.get('http://localhost:8000/api/bin')
    .then(res =>{
      setBinList(res.data)
    })
  });

  const addBinHandler = () => {
    if (id.length === 0) {
      toast.error('Please enter a Valid ID!!!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });

    }else if(level.length === 0 || (level > 100 || level < 0)){
      toast.error('Please enter a Valid Percentage!!!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
    else{
      axios.post('http://localhost:8000/api/bin/', {'id':id,
    'level':level, 'type':type}).then(res => console.log(res))

      setId('');
      setLevel('');
      // setType('');
    }
  };
  return (
    <div className='App list-group-item justify-content-center
    aligh-items-center mx-auto' style={{"width":"600px",
    "backgroundColor":"white", "marginTop":"15px"}}>
      <h1 className="card text-white bg-info mb-1"
      styleName="max-width: 20rem;">GARBAGE LEVEL DETECTOR</h1>
      <h6 className="card text-white bg-info mb-3">
        USING FARM STACK</h6>
      <div className="card-body">
        <h5 className="card text-white bg-dark mb-3">Add A Garbage Bin</h5>
        <span className="card-text">
          <input value={id} className="mb-2 form-control idIn" onChange={event => setId(event.target.value)} placeholder="ID"/>
          <input value={level} className="mb-2 form-control levelIn" onChange={event => setLevel(event.target.value)} placeholder="LEVEL"/>
          {/* <input value={type} className="mb-2 form-control typeIn" onChange={event => setType(event.target.value)} placeholder="TYPE"/> */}

          <select value={type} className="mb-2 form-control form-select" onChange={event => setType(event.target.value)}>
      	{TYPES.map((type)=>(<option key={type}>{type}</option>))}</select>

          <button className="btn btn-outline-primary mx-2 mb-3" style={
          {'borderRadius':"50px", "font-weight":"bold"}} onClick={addBinHandler}>Add Bin</button>
        </span>
        <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
        <ToastContainer />
        <h5 className="card text-white bg-dark mb-3">Your Bins</h5>
        <div>
          <BinView binList={binList}/>
        </div>
      </div>
      <h6 className="card text-dark bg-warning py-1 mb-0" style={{margin:20}}>MIT License : Copyright (&copy;) 2022 theAlphaGuardian</h6>
    </div>
  );
}

export default App;
