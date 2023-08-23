import styled from "@emotion/styled";

const Resultados = styled.div`
    color: #330867; 
    display: flex;
    align-items: center;
    gap: 1rem;
`

const Texto = styled.p`
    font-family:"Lato",sans-serif;
    font-weight: 900px;
    font-size: 17px;
`

const Precio = styled.p`
    font-size: 30px;
    span{
        font-weight: 900;
    }
    
`

const Imagen = styled.img `
    display: block;
    width: 120px;
    margin-top: 18px;
`

const Resultado = ({ cotizacion }) => {
    const {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE} = cotizacion
  return (
    <Resultados>
        <Imagen src={`http://cryptocompare.com/${IMAGEURL}`} alt="Imagen de la criptomoneda"/>
        <div>
            <Precio>El precio es de : <span>{PRICE}</span></Precio>
            <Texto>El precio más alto del día es de : <span>{HIGHDAY}</span></Texto>
            <Texto>El precio más bajo del día es de : <span>{LOWDAY}</span></Texto>
            <Texto>El precio de las últimas 24 horas es de : <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>La última vez que se actualizó : <span>{LASTUPDATE}</span></Texto>
        </div>   
    </Resultados>
  );
};

export default Resultado;
