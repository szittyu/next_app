import React from "react";
import Image from "next/image";
// import { useSelector, useDispatch } from "react-redux";
// import { decrement, increment } from "redux/ducks/counter";

const Characters = ({ char }) => {
    // const count = useSelector((state) => state.counter.count)
    // const dispatch = useDispatch()
    // const handleIncrement = () => {
    //     dispatch(increment())
    // };
    // const handleDecrement = () => {
    //     dispatch(decrement())
    // };
    const { gender, image, name, species, status } = char

    console.log(char)
    return (
        <div
            role={"characters"}
            className="m-3 border-l-8 bg-blue-600/10 border-solid py-4 px-4 bg-white hover:border-blue-600 rounded-lg drop-shadow-2xl">
            <div className="flex flex-row justify-between">
                <div>
                    <h1>Name: <p>{name}</p></h1>
                    <p>Status: {status}</p>
                    <p>Species: {species}</p>
                    <p>Gender: {gender}</p>
                </div>
                <div>
                    <Image src={image} alt={"icon"} width={100} height={100} />
                </div>
            </div>
        </div>
    );
}

export default Characters;