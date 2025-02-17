import React from "react";

function Header() {
  return (
    <header className="bg-purple-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-gray-300">VENDE + ONLINE</span>
        </div>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-gray-300">
                HOME
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                NOSOTROS
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                SERVICIOS
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                CONTACTO
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                NOTICIAS
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
