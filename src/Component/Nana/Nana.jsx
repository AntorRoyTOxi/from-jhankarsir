import { createContext } from "react";
import Nani from "../Nani/Nani";

 export const AssetText=createContext()
const Nana = () => {
    return (
        <div>
          <h1> Nana </h1>   
          <AssetText.Provider value='Nani'>
          <Nani></Nani>
          </AssetText.Provider>
        </div>
    );
};

export default Nana;