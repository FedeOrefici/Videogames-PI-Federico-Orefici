import axios from 'axios';
import { GET_DOGS, GET_TEMPERAMENTS, ORDER, GET_DOG_BY_TEMPERAMENT} from "./types";

    export const getDogs = () => {
        return async function(dispatch){
            try {
                const response = (await axios.get("http://localhost:3001/dogs"))
                return dispatch({
                    type: GET_DOGS,
                    payload: response.data,
                })     

            } catch (error) {
                return dispatch({type: "Error", payload: error})
            }
        }
    };


    export const getAllTemperaments = () => {
        return async function(dispatch){
                const response = await axios.get('http://localhost:3001/temperaments')
                const temperaments = Array.from(new Set(response.data))
                return dispatch({
                    type: GET_TEMPERAMENTS,
                    payload: temperaments
                })
            } 
        }

        export const orderDogs = (order) => {
            return {
                type: ORDER,
                payload: order
            }
        };

        export const getDogsByTemperament = (payload) => {
            return async function (dispatch) {
              const response = await axios.get(`http://localhost:3001/temperament/${payload}`);
              const dogsByTemperament = response.data;
              dispatch({ type: GET_DOG_BY_TEMPERAMENT, payload: dogsByTemperament });
            }
          }
          