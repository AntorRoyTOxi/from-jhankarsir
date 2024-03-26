import { createContext } from "react";
import Brother from "../Brother/Brother";
import Ma from "../Ma/Ma";
 export const AssetContect=createContext()
const Dad = () => { 
      const gift='antor'
    return (
        <div style={{display:'flex'}}>
            <AssetContect.Provider value="gold">
            <Ma gift={gift} ></Ma> 
            <Brother></Brother>
            </AssetContect.Provider>
            
        </div>
    );
};

export default Dad;