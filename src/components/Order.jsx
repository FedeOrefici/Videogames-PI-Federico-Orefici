import { useEffect, useState } from "react";
import { orderDogs } from "../redux/actions"
import { useDispatch, useSelector } from "react-redux"

const Order = () => {

    const dispatch = useDispatch();
    const [order, setOrder] = useState(null)

    const allDogs = useSelector(state => state.allDogs)

    const handleChargeOrder = (event) => {
        const newOrder = event.target.value
        if(newOrder !== order){
            setOrder(newOrder)
            dispatch(orderDogs(newOrder))
        }
    }

  return (
    <select
    name="order"
    onChange={handleChargeOrder}
    value={order || ""}
    >
        <option value='increase'>A to Z</option>
        <option value='decrease'>Z to A</option>
    </select>
  )
}

export default Order