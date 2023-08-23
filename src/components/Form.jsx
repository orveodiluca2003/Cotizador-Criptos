//este es el componente del boton que envía el formulario. 
import styled from "@emotion/styled"
import useSelectorMonedas from "../hooks/useSelectorMonedas"
import {monedas} from "../data/moneda"
import { useEffect,useState } from "react"
import Error from "./Error"

//se está realizando con styled components. 
const InputSubmit = styled.input`
    background-color: #f4d03f;
    border: none;
    width: 100%;
    padding: 10px;
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 700;
    border-radius: 5px;

    &:hover{
        cursor: pointer;
        background-color: #f9f047;
    }
`

const Form = ({setMonedas}) => {

    const[criptos,setCriptos] = useState([])
    const[error,setError] = useState(false)
    //estoy creando mis propios hooks, como tienen return se coloca de esta manera. 
    const [moneda,SelectMonedas] = useSelectorMonedas("Elige tu moneda.",monedas)
    const [criptomoneda,SelectCriptomoneda] = useSelectorMonedas("Elige tu criptomoneda.",criptos)
    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()
            
            const arraycriptos = resultado.Data.map(cripto => {

                const objeto = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }

                return objeto
            })
            setCriptos(arraycriptos)
        }

        consultarAPI();
    },[])

    const handleCotizar = (e) => {
        e.preventDefault()

        if([moneda,criptomoneda].includes("")){
            setError(true)
            return
        }
        setError(false)
        setMonedas({
            moneda,
            criptomoneda
        })
    } 

  return (
    <>
        {error && <Error>Todos los campos son obligatorios</Error>}
        <form onSubmit={handleCotizar}>
            <SelectMonedas/>
            <SelectCriptomoneda/>

            <InputSubmit 
                type="submit" 
                value="cotizar"
            /> 
        </form>
    </>
  )
}

export default Form