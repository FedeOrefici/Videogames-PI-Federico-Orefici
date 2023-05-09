import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"

const Container = styled.div`
    width: 750px;
    height: 350px;
    background-image: linear-gradient(to left, #900C3F 50%, #900C3F 50%);
    overflow: hidden;
    border-radius: 10px;
    padding: 30px;
    margin: auto;
    margin-top: 20px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
`

const ContImgId = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  flex-direction: column;
`

const ContData = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 21px;
`

const ContAllData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
`

const Detail = () => {

  const {id} = useParams();
  const [data, setData] = useState([]);
  
  useEffect(  () => {

    const axiosData = async () => {
      try {
        const apiUrl = `http://localhost:3001/dogs/${id}`;
        const response = await axios.get(apiUrl)
        const allData = await response.data;
        setData(allData)
      } catch (error) {
        console.log(error);
      }
    }
    axiosData();
  },[id]);
  
  
  
  return (
    <Container>
        {data.map(dog => (
            <ContAllData>
              <ContImgId>
                  <p style={{backgroundColor:'#FFC300', color:'#900C3F', 
                  fontWeight:'bold', width:'30px', 
                  textAlign:'center', borderRadius:'3px'}}>
                    {dog?.id}
                  </p>
                    <img src={dog?.image} alt={dog?.name} style={{width:'90%'}} />
              </ContImgId>

              <ContData>
                  <h2>Name: {dog?.name}</h2>
                  <p>Weight: {dog?.minWeight} - {dog?.maxWeight}</p>
                  <p>Height: {dog?.minHeight} - {dog?.maxHeight}</p>
                  <p>Years: {dog?.years}</p>
                  <p>Temperaments: {dog?.Temperaments}</p>
              </ContData>

            </ContAllData>
        ))}

    </Container>
  )
}

export default Detail