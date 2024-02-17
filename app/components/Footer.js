import React from 'react';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex items-center justify-between">
                <p className="text-sm">&copy; 2024 Adiel Rum</p>
                <div className="flex space-x-4">
                    <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500">
                        <FaGithub size={20} />
                    </a>
                    <a href="https://twitter.com/your-twitter" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500">
                        <FaTwitter size={20} />
                    </a>
                    <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-500">
                        <FaLinkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
