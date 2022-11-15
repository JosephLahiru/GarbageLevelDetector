import BinItem from "./Bin";
import 'bootstrap/dist/css/bootstrap.min.css';

function BinView(props){
    return (
        <div style={{margin:0}}>
            {/* <div className="container">
                <div className="row">
                    {props.binList.map(bin => <BinItem bin={bin}/>)}
                </div>
            </div> */}
            {props.binList.map(bin => <BinItem bin={bin}/>)}
        </div>
    )
}

export default BinView