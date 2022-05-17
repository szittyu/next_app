import React, { useEffect } from "react"
import Head from "next/head";
import { useSelector, useDispatch } from "react-redux";
import { getCharacter } from "../redux/ducks/character";
import Characters from "@/components/reduxComponents/Characters";

const Redux = () => {
    const characters = useSelector((state) => state.character.character)
    console.log(characters)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCharacter())
    }, [dispatch])
    return (
        <div
            role="redux"

        >
            <Head>
                <title>Learning blog | Redux content</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div
                data-testid={"redux"}
            >
                <h1
                    className="text-center text-gray-600 text-4xl mb-10 font-medium"
                    role="header"
                >
                    Redux content
                </h1>
            </div>
            <div className="grid grid-cols-3 gap-4 w-full">
                {characters && characters.results.map(char => (
                    <Characters
                        key={char.id}
                        char={char}
                    />
                ))}
            </div>
        </div>
    );
}

export default Redux;