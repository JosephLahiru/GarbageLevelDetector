import BinItem from "./Bin";
import 'bootstrap/dist/css/bootstrap.min.css';

function BinView(props){
    return (
        <div>
            <div className="container">
                <div className="row">
                    {props.binList.map(bin => <BinItem bin={bin}/>)}
                </div>
            </div>
        </div>
    )
}

export default BinView