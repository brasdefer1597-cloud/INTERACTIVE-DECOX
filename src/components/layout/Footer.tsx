import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-black text-center py-20 border-t border-gray-900">
            <div className="max-w-6xl mx-auto px-6">
                <div className="mb-12">
                    <h2 className="text-3xl font-black text-white italic tracking-tighter uppercase mb-4">Chalamandra Magistral</h2>
                    <p className="text-gray-600 font-bold tracking-[0.3em] text-[0.6rem] uppercase">Reingeniería Cognitiva Táctica</p>
                </div>

                <div className="flex justify-center space-x-8 mb-16">
                    <a href="#" className="text-gray-600 hover:text-yellow-500 transition-all duration-300 text-2xl transform hover:scale-110"><i className="fa-brands fa-instagram"></i></a>
                    <a href="#" className="text-gray-600 hover:text-yellow-500 transition-all duration-300 text-2xl transform hover:scale-110"><i className="fa-brands fa-youtube"></i></a>
                    <a href="#" className="text-gray-600 hover:text-yellow-500 transition-all duration-300 text-2xl transform hover:scale-110"><i className="fa-brands fa-linkedin"></i></a>
                    <a href="#" className="text-gray-600 hover:text-yellow-500 transition-all duration-300 text-2xl transform hover:scale-110"><i className="fa-brands fa-whatsapp"></i></a>
                </div>

                <div className="w-12 h-px bg-gray-900 mx-auto mb-10"></div>

                <p className="text-gray-700 text-[0.6rem] font-black uppercase tracking-[0.2em]">
                    &copy; 2026 Chalamandra Magistral. Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
