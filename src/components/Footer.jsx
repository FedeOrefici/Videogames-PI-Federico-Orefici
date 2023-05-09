import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
  width:90%;
  height: 250px;
  color: white;
  margin-top: 40px;
  margin: auto;
`


const Footer = () => {
  return (
    <Container>
      FOOTER
    </Container>
  )
}

export default Footer