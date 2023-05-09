import { Link } from "react-router-dom"
import styled from "styled-components"

const Nav = styled.nav`
    display: flex;
    gap: 10px;
    text-decoration: none;
    list-style: none;
    margin-right: 20px;
    width: 300px;
    justify-content: space-around;
`

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    margin-left: 20px;
`

const ContainerNav = styled.div`
  padding: 20px;
  margin-top: 20px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`
 
const Navbar = () => {
  return (
       
    <ContainerNav>
    <Logo>
        <span className="material-symbols-outlined">sound_detection_dog_barking</span>
        <h2>PI DOGS</h2>
    </Logo>
    <Nav>
      <Link style={{textDecoration:'none', color:'white'}} to="/">Home</Link>
      <Link style={{textDecoration:'none', color:'white'}} to="/dogs">Dogs</Link>
      <Link style={{textDecoration:'none', color:'white'}} to="/dogs/create">Create</Link>
    </Nav>
  </ContainerNav>
  )
}

export default Navbar