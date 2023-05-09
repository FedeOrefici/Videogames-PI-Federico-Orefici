import { Link } from "react-router-dom"
import styled from "styled-components"

const Container = styled.div`
  background-color: white;
  text-align: center;
  width: 50%;
  margin: auto;
  margin-top: 300px;
  border-radius: 6px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`


const Welcome = () => {
  return (
    <Container>
      <Link style={{textDecoration:'none', color:'#581845', fontWeight:'bold'}} to="/dogs">CLICK TO START</Link>
    </Container>
  )
}

export default Welcome