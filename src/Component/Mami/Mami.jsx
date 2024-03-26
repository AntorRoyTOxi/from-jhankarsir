import { useContext } from "react";
import { AssetText } from "../Nana/Nana";


const Mami = () => { 
     const result=useContext(AssetText)
    return (
        <div>
          <h4>Mami</h4>  
          { 
           result} 
        </div>
    );
};

export default Mami;