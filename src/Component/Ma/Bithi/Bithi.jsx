import { useContext } from "react";
import { AssetContect } from "../../Dad/Dad";


const Bithi = ({gift}) => { 
     const result=useContext(AssetContect)
    return (
        <div>
            <h4>Bithi</h4> 
            <p>{gift} </p> 
            <p> {result} </p>
        </div>
    );
};

export default Bithi;