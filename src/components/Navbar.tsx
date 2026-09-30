function Navbar() {
    return (
        <nav className="flex items-center px-8 py-7 gap-6">
            <div className="text-3xl font-bold">
                <h2>My Website</h2>
            </div>
            <div className="flex items-center gap-6 mx-auto">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/services">Services</a>
                <a href="/contact">Contact Us</a>
            </div>
        </nav>
    )
}
export default Navbar