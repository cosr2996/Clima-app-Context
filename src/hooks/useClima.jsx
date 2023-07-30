import { useContext } from "react";
import ClimaContex from "../contex/ClimaProvider";

const useClima =()=>{
    return useContext(ClimaContex)
}

export default useClima