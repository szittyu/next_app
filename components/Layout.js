import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <div
            className="bg-gray-200 min-h-screen w-full"
            role="layout"
        >
            <div className="flex flex-col mx-auto items-center max-w-[960px]">
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>
    )
}