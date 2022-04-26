import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => {
            router.push("/")
        }, 5000)
    }, [router])

    return (
        <>
            <Head>
                <title>Learning blog | 404</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="text-center text-gray-600">
                <h1 className="text-3xl font-medium">
                    Oooops...
                </h1>
                <h2 className="text-2xl my-4">
                    That page cannot be found.
                </h2>
                <p>You will be redirected to the Homepage in 5 seconds...</p>
                <p className="mb-4">
                    Go back to the&nbsp;
                    <Link href="/">
                        <a className="font-medium text-blue-600 underline">
                            Homepage
                        </a>
                    </Link>
                </p>
            </div>
        </>
    );
}

export default NotFound;