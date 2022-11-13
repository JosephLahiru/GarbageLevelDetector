import BinItem from "./Bin";

function BinView(props){
    return (
        <div>
            <ul>
                {props.binList.map(bin => <BinItem bin={bin}/>)}
            </ul>
        </div>
    )
}

export default BinView