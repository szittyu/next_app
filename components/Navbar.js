import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="flex justify-end w-full items-end mx-auto p-2.5 mb-12 border-b-2 border-gray-500 border-solid">
            <Link href="/">
                <a className="mr-auto">
                    <Image src="/blog.png" width={128} height={110} alt={"blog"} />
                </a>
            </Link>
            <div className="flex justify-between ml-3 w-48 text-gray-600 font-medium">
                <Link href="/"><a className="hover:text-blue-600">Home</a></Link>
                <Link href="/about"><a className="hover:text-blue-600">About</a></Link>
                <Link href="/allposts"><a className="hover:text-blue-600">All post</a></Link>
            </div>
        </nav>
    );
}

export default Navbar;