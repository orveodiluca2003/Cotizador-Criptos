import styled from "@emotion/styled"
import {useState} from "react" 

const Labels = styled.label`
    color: white;
    display: block;
    font-family: "Lato",sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`
const Select = styled.select`
    border-radius: 5px;
    width: 100%;
    padding: 3px;
    font-size: 18px;
    margin-bottom: 30px;
`
const useSelectorMonedas = (label,opciones) => {

    const [state,setState] = useState("")

  const SelectMonedas = () => {
    return(
        <>
            <Labels>{label}</Labels>
            <Select
                value={state}
                onChange={e => setState(e.target.value)}
            >
                <option value="">-Seleccione-</option>
                {opciones.map(opcion => {
                    return(
                        <option
                            key={opcion.id}
                            value={opcion.id}>
                          {opcion.nombre}  
                        </option>
                    )
                })}
            </Select>
        </>
        
    )
  }

  return [state , SelectMonedas]
}

export default useSelectorMonedas