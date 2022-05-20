import Head from "next/head";
import { useSelector } from "react-redux";

const About = () => {
    const characters = useSelector((state) => state.character)
    console.log(characters)
    return (
        <>
            <Head>
                <title>Learning blog | About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <h1
                    className="text-center text-gray-600 text-4xl mb-10 font-medium"
                    role="about"
                >
                    About me
                </h1>
            </div>
        </>
    );
}

export default About;