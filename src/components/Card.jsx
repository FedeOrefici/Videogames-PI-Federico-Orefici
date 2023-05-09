import {Link} from 'react-router-dom'
import { Fragment } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 700px;
    height: 350px;
    background-image: linear-gradient(to left, #900C3F 50%, #900C3F 50%);
    overflow: hidden;
    border-radius: 10px;
    padding: 30px;
    margin: auto;
    margin-top: 20px;
    color: white;
`
const ContData = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    width: 40%;
`

const ContainerAll = styled.div`
    display: flex;
    border-radius: 10px;
    height: 350px;
`

const DivButton = styled.button`
  background-color: #FFC300;
  width: 200px;
  height: 40px;
  border: none;
  border-radius: 6px;
  text-transform: uppercase;
  margin-top: 20px;
  cursor: pointer;
  :hover {
    background-color: #ffc250;
  }
`

const Card = ({name, image, minWeight, maxWeight, temperaments, id}) => {

    return (
      <Fragment>
          
    
          <Container>
            <ContainerAll>
                <ContData>
                      <h3 style={{textTransform: 'uppercase', color:'#FFC300'}}>{name}</h3>
                      <p>weight: {minWeight} - {maxWeight}</p>
                      <p>{temperaments}</p>
                      <DivButton>
                        <Link style={{textDecoration:'none', color:'#581845', fontWeight:'bold'}} to={`/dogs/${id}`}>
                          Detail
                        </Link>
                      </DivButton>
                </ContData>
                    <img  style={{width:'60%', marginLeft:'30px'}} src={image} alt={name} />
            </ContainerAll>
          </Container>
      </Fragment>

    )
  }
  
  export default Card