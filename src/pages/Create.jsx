import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
  width: 900px;
  height: auto;
  margin: auto;
  border-radius: 6px;
  padding: 20px;
  background-color: #900C3F;
`

const Button = styled.button`
  background-color: #FFC300;
  width: 180px;
  height: 40px;
  border: none;
  border-radius: 6px;
  margin-top: 20px;
  text-transform: uppercase;
`

const Create = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [temperaments, setTemperaments] = useState([]);

  const [formData, setFormData] = useState({
    name: '',
    minHeight: '',
    maxHeight: '',
    minWeight: '',
    maxWeight: '',
    years: '',
    temperaments: [],
    image: ''
  })


  useEffect(()=>{
    const temperamentData = async () => {
      const response = await axios.get('http://localhost:3001/temperaments');
      const temperamentsList = [...new Set(response.data.map((t) => t.name))]
      setTemperaments(temperamentsList)
    }
    temperamentData();
  },[])


  const handleInputChange = (event) => {
    const {name, value} = event.target
    setFormData({
      ...formData,
      [name] : value
      
    })
  }


 

  const handleSelectChange = (event) => {
    const newTemperament = event.target.value;
    setFormData((prevState) => ({
      ...prevState,
      temperaments: [...prevState.temperaments, newTemperament]
    }));

  };
  
  
  
  
  
  
 


  return (
    <>
      <Form>
          <h1 style={{color:'#FFC300'}}>Create a Dog</h1>
      
          <label>Name</label>
            <input
            name="name"
            onChange={handleInputChange}
            value={formData.name}
            style={{height:'30px', width:'500px', borderRadius:'3px', border:'none'}} type="text" />
            

            
              <label>min-height </label>
              <input
              name="minHeight"
              onChange={handleInputChange}
              value={formData.minHeight}
              style={{height:'30px', width:'500px', borderRadius:'3px', border:'none'}} type="number" />

              <label>max-height </label>
              <input
              name="maxHeight"
              onChange={handleInputChange}
              value={formData.maxHeight}
              style={{height:'30px', width:'500px', borderRadius:'3px', border:'none'}} type="number" />
              
  
              <label>min-weight </label>
              <input
              name="minWeight"
              onChange={handleInputChange}
              value={formData.minWeight}
              style={{height:'30px', width:'500px', borderRadius:'3px', border:'none'}} type="number" />

              <label>max-weight </label>
              <input
              name="maxWeight"
              onChange={handleInputChange}
              value={formData.maxWeight}
              style={{height:'30px', width:'500px', borderRadius:'3px', border:'none'}} type="number" />
           
            

          <label>years </label>
          <input
          name="years"
          onChange={handleInputChange}
          value={formData.years}
          style={{height:'30px', width:'500px', borderRadius:'3px', border:'none'}} type="number" />
        

        <div style={{display:'flex', flexDirection:'column'}}>
          <label>Temperaments</label>
          <select style={{height:'30px', width:'500px', borderRadius:'3px'}} onChange={handleSelectChange} >
            {temperaments.map(temp => (
              <option key={temp} value={temp}>
                {temp}
              </option>
            ))}
          </select>
        </div>

        <input type="file" id="image" name="image" />

        

        <Button>
          create
        </Button>
      </Form>
    </>
  )
}

export default Create