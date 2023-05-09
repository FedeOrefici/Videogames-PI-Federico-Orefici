import { useEffect, useState, Fragment } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import { getDogs } from "../redux/actions";
import {useDispatch, useSelector} from 'react-redux'
import SelectTemp from "./SelectTemp";
import Order from "./Order";
import SearchBar from "./SearchBar";


const Index = () => {

  
    const [pages, setPages] = useState(1);
    const [perPage, setPerPage] = useState(8);
    

    //traigo el estado de redux para manejar desde acá
    const dispatch = useDispatch();
    const dogs = useSelector(state => state.allDogs)
    

    useEffect(() => {
        dispatch(getDogs())
    }, [dispatch])

    return (
        <Fragment> 

            <div style={{display:'flex', margin:'auto', border:'1px solid red'}}>
                <SelectTemp />
                <Order />
                <SearchBar />
            </div>

            <Pagination
            pages={pages}
            setPages={setPages}
            />

            <div>
                {
                dogs
                .slice((pages - 1) * perPage, (pages - 1) * perPage + perPage)
                .map((dog) => (
                    <Card
                        key={dog.id}
                        id={dog.id}
                        name={dog.name}
                        minWeight={dog.minWeight}
                        maxWeight={dog.maxWeight}
                        image={dog.image}
                        temperaments={dog.Temperaments}

                    />
                ))}
            </div>
            
            

        </Fragment>
    );
}

export default Index;
