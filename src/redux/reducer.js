import { GET_DOGS, GET_TEMPERAMENTS, ORDER, GET_DOG_BY_TEMPERAMENT} from "./types";

const initialState = {
    allDogs: [],
    allTemperaments: [],
    dogsByTemperament: [],
    orderedDogs: []
}

export const reducer = (state = initialState, action) => {
    switch(action.type){    
        case GET_DOGS:
            return {
                ...state,
                allDogs: action.payload,
                allTemperaments: []
            }
        
        case GET_TEMPERAMENTS:
            return {
                ...state,
                allTemperaments: action.payload
            }

        case ORDER:
            const sortedDogs = state.orderedDogs.length > 0 ? [...state.orderedDogs] : [];
            if (action.payload === "increase") {
                sortedDogs.sort((a, b) => a.name.localeCompare(b.name));
            } else if (action.payload === "decrease") {
                sortedDogs.sort((a, b) => b.name.localeCompare(a.name));
            }
            return {
                ...state,
                orderedDogs: sortedDogs
            };


            case GET_DOG_BY_TEMPERAMENT:
                return {
                    ...state,
                    dogsByTemperament: action.payload
                }


        default:
            return state;
    }


}