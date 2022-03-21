import React from 'react'
import { useSelector } from 'react-redux';

const Body = (props) => {
    const user = useSelector((state) => state.user);
    // redux => state the price depends on the room price and how many guests / state.amount
    return (
        <>
            <div>
                <h1>Order Summary</h1>
                <div>
                    Hotel: {props.title}
                    Rooms: {props.rooms}
                    Guests: {props.guests}
                </div>
                <p>Total Price: {props.price} </p> {/* Change later with redux */}
                <button>Submit</button>
            </div>
        </>
    )
}

export default Body