import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-8 md:mb-0">
                        <span className="text-2xl font-bold text-primary-600 flex items-center gap-2">
                             ⚡ EngageHub
                        </span>
                        <p className="mt-4 text-gray-500 text-sm max-w-xs">
                            Manage your leads, track interactions, and grow your business with our intuitive CRM platform.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                         <div>
                            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h3>
                            <ul className="mt-4 space-y-4">
                                <li><Link to="#" className="text-base text-gray-500 hover:text-gray-900">Features</Link></li>
                                <li><Link to="#" className="text-base text-gray-500 hover:text-gray-900">Pricing</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                            <ul className="mt-4 space-y-4">
                                <li><Link to="/about" className="text-base text-gray-500 hover:text-gray-900">About</Link></li>
                                <li><Link to="/contact" className="text-base text-gray-500 hover:text-gray-900">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between">
                    <div className="flex space-x-6 md:order-2">
                        <a href="#" className="text-gray-400 hover:text-gray-500"><FaFacebook className="h-6 w-6" /></a>
                        <a href="#" className="text-gray-400 hover:text-gray-500"><FaTwitter className="h-6 w-6" /></a>
                        <a href="#" className="text-gray-400 hover:text-gray-500"><FaLinkedin className="h-6 w-6" /></a>
                        <a href="#" className="text-gray-400 hover:text-gray-500"><FaInstagram className="h-6 w-6" /></a>
                    </div>
                    <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                        &copy; 2026 LeadFlow CRM. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
