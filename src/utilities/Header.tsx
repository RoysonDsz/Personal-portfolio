import { useState } from 'react';
import { FaBars, FaTimes, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaGithub } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const Nav = [
        { id: 1, text: "Home", slug: "home" },
        { id: 2, text: "About", slug: "about" },
        { id: 3, text: "Portfolio", slug: "portfolio" },
        { id: 4, text: "Contact", slug: "contact" }
    ];

    return (
        <nav className="fixed left-0 w-full p-2 z-20 backdrop-blur-3xl bg-black/30">
            {/* Desktop View */}
            <div className="hidden md:flex justify-between items-center p-4">
                
                {/* Unique Logo Section */}
                <div className="text-3xl font-bold text-white cursor-pointer">
                    <span className="bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
                        Royson Dsouza
                    </span>
                </div>

                {/* Navigation Links */}
                <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-12">
                    {Nav.map((item) => (
                        <ul className="hidden md:block" key={item.id}>
                            <ScrollLink 
                                to={item.slug} 
                                smooth={true} 
                                duration={500} 
                                offset={-50}
                            >
                                <li className="py-1 px-5 text-[24px] rounded-md border text-white cursor-pointer transition duration-300 ease-in-out hover:shadow-xl hover:shadow-[rgba(9,184,220,0.8)] hover:rounded-full">
                                    {item.text}
                                </li>
                            </ScrollLink>
                        </ul>
                    ))}
                </div>
            </div>

            {/* Hamburger Menu for Mobile View - Positioned on Right Side */}
            <div className="md:hidden flex justify-between items-center p-4">
                {/* Logo in Mobile View */}
                <div className="text-2xl font-bold text-white">
                    <span className="bg-gradient-to-r from-blue-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
                        Royson Dsouza
                    </span>
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl z-10">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Social Media Icons (Laptop View - Right Side) */}
            <div className="hidden md:flex flex-col space-y-9 fixed mt-70 top-1/2 right-4 transform -translate-y-1/2">
                <a href="https://github.com/RoysonDsz" className="p-3 bg-black text-white rounded-full shadow-lg hover:scale-110 hover:bg-red-500 transition-transform">
                    <FaGithub size={20} />
                </a>
                <a href="https://www.instagram.com/Royson_Dsz/" className="p-3 bg-black text-white rounded-full shadow-lg hover:scale-110 hover:bg-gradient-to-bl hover:from-purple-500 hover:via-red-500 hover:to-yellow-500 transition-transform">
                    <FaInstagram size={20} />
                </a>
                <a href="https://www.linkedin.com/in/royson-dsouza17/" className="p-3 bg-black text-white rounded-full shadow-lg hover:scale-110 hover:bg-blue-500 transition-transform">
                    <FaLinkedinIn size={20} />
                </a>
            </div>

            {/* Mobile Menu Content with Social Icons */}
            {isOpen && (
                <div className="md:hidden flex flex-col items-center space-y-4 bg-black/90 text-white p-4 absolute top-0 left-0 w-full h-screen">
                    {Nav.map((item) => (
                        <ScrollLink 
                            key={item.id}
                            to={item.slug}
                            smooth={true}
                            duration={500}
                            offset={-50}
                            onClick={() => setIsOpen(false)}
                        >
                            <li className="py-2 text-xl cursor-pointer">{item.text}</li>
                        </ScrollLink>
                    ))}

                    {/* Social Media Icons for Mobile View */}
                    <div className="flex space-x-6 mt-6">
                        <a href="#" className="p-3 bg-black text-white rounded-full shadow-lg hover:scale-110 hover:bg-green-600 transition-transform">
                            <FaWhatsapp size={20} />
                        </a>
                        <a href="#" className="p-3 bg-black text-white rounded-full shadow-lg hover:scale-110 hover:bg-blue-600 transition-transform">
                            <FaFacebookF size={20} />
                        </a>
                        <a href="#" className="p-3 bg-black text-white rounded-full shadow-lg hover:scale-110 hover:bg-gradient-to-bl hover:from-purple-500 hover:via-red-500 hover:to-yellow-500 transition-transform">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className="p-3 bg-black text-white rounded-full shadow-lg hover:scale-110 hover:bg-blue-500 transition-transform">
                            <FaLinkedinIn size={20} />
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
