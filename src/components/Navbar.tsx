import { NavLink } from "react-router"
function Navbar() {
    return (
        <nav className="flex items-center px-8 py-7 gap-6">
            <div className="text-3xl font-bold">
                <h2>My Website</h2>
            </div>
            <div className="flex items-center gap-6 mx-auto">
                <NavLink to="/" className={({ isActive }) =>
                    isActive ? "text-red-500 font-bold" : "text-gray-700"
                }>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-gray-700"}>About</NavLink>
                <NavLink to="/services" className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-gray-700"}>Services</NavLink>
                <NavLink to="/contact" className={({ isActive }) => isActive ? "text-red-500 font-bold" : "text-gray-700"}>Contact Us</NavLink>
            </div>
        </nav>
    )
}
export default Navbar