import Head from "next/head";

const About = () => {
    return (
        <>
            <Head>
                <title>Learning blog | About</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <h1 className="text-center text-gray-600 text-4xl mb-10 font-medium">
                    About me
                </h1>
            </div>
        </>
    );
}

export default About;