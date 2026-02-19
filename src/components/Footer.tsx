import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-center py-10 border-t border-gray-800">
            <div className="max-w-6xl mx-auto px-6">
                <p className="text-gray-400 mb-6">&copy; {new Date().getFullYear()} Chalamandra Magistral. Todos los derechos reservados.</p>
                <div className="flex justify-center space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl"><i className="fa-brands fa-youtube"></i></a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-2xl"><i className="fa-brands fa-linkedin"></i></a>
                </div>
            </div>
        </footer>
    );
};

export default React.memo(Footer);
