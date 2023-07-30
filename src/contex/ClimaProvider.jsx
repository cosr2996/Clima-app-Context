import { useState, createContext } from "react"

//creamos el contex
const ClimaContex = createContext()

const ClimaProvider =({children}) =>{
    const [busqueda,setBusqueda] = useState({
        ciudad:'',
        pais:''
        })

        const datosBusqueda =e =>{
            setBusqueda({
                ...busqueda,
                [e.taget.name]:e.target.value
            })
        }
    return(
        <ClimaContex.Provider value={{ busqueda,datosBusqueda}}>
            {children}
        </ClimaContex.Provider>
    )
}

export{ClimaProvider}
export default ClimaContex