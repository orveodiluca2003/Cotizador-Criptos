import { useState,useEffect } from 'react'
import styled from "@emotion/styled"
import ImageCripto from "./img/imagen-criptos.png"
import Form from './components/Form'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'

const Contenedor = styled.div`
  max-width: 900px; 
  margin: 0 auto; 
  width: 90%;
  @media(min-width: 992px){
    display: grid; 
    grid-template-columns: repeat(2,1fr);
    column-gap:2rem;
  }
`
const Imagen = styled.img`
  max-width : 400px; 
  width: 80%; 
  margin: 100px auto 0 auto;
  display: block

`

const Heading = styled.h1`
  font-family: "Lato", sans-serif; 
  color: #FFF;
  text-align: center;
  font-weight: 700;
  margin: 80px 0 50px;
  font-size: 34px;

  &::after{
    content: "";
    width: 100px;
    height: 6px;
    background-image: linear-gradient(to top, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%);
    display: block;
    margin: 10px auto 0 auto;
  }
`

function App() {
  //aqui está guardando todas las monedas y criptomonedas que se estamos seleccionando. 
  const[monedas,setMonedas] = useState({})

  //es donde se encuentra toda la información de la cotización
  const[cotizacion,setCotizacion] = useState({})

  const[cargando,setCargando] = useState(false)

  //este hook, lo que hace es mostrar el arreglo de las monedas. 
  useEffect(() => {
    if(Object.keys(monedas).length > 0){
      const CotizarCriptos = async () => {
        setCargando(true)
        setCotizacion({})
        const {moneda,criptomoneda} = monedas
        const link = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        const respuesta = await fetch(link)
        const resultado = await respuesta.json()
        setCotizacion(resultado.DISPLAY[criptomoneda][moneda])
        setCargando(false)
      }

      CotizarCriptos()
    }
  },[monedas])

  return (
    <Contenedor>
      <Imagen
        src={ImageCripto}
        alt='Imagenes criptomonedas'
      
      />
      <div>
        <Heading>Cotizador de criptomonedas al Instante</Heading>
        <Form 
          setMonedas = {setMonedas}
        />
        {cargando && <Spinner/>}
        {cotizacion.PRICE && <Resultado cotizacion = {cotizacion} />}
      </div>
    </Contenedor>
  )
}

export default App
