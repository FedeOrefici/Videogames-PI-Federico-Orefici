import { useSelector, useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { getAllTemperaments, getDogs, getDogsByTemperament } from "../redux/actions";

const SelectTemp = () => {

    const [temperament, setTemperaments] = useState([])
    const dispatch = useDispatch();
    const allTemperaments = useSelector(state => state.allTemperaments)


    useEffect(() => {
        dispatch(getAllTemperaments())
    }, [dispatch])

    useEffect(() => {
        const temperaments = allTemperaments.map(temp => temp.name);
        const uniqueTemperaments = [...new Set(temperaments)];
        setTemperaments(uniqueTemperaments);
    }, [allTemperaments])
    
    const handleSelectChange = (event) => {
        const selectedTemp = event.target.value;
        if (selectedTemp === "Select all") {
          dispatch(getDogs());
        } else {
          dispatch(getDogsByTemperament(selectedTemp));
        }
      };

     

  return (

    <select onChange={handleSelectChange} >
        <option>Select all</option>
        {
            temperament.map((temp) => {
                return (
                    <option key={temp} value={temp}>
                        {temp}
                    </option>
                )
            })
        }
    </select>
  )
}

export default SelectTemp