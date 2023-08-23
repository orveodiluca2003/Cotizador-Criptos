import styled from "@emotion/styled"

const Texto = styled.div`
    background-color: #e2ebf0;
    border-left: 8px solid red;
    padding: 10px;
    font-family: "Lato", sans-serif;
    font-weight:700;
    text-align: center;
`

const Error = ({children}) => {
  return (
    <Texto>
        {children}
    </Texto>
  )
}

export default Error