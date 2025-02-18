function Header() {
  return (
    <header className="bg-primary text-white p-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-25 h-25 flex items-center justify-center">
          <img src="../../logo.png" alt="Logo" className="w-full h-full object-cover" />
        </div>

        <nav >
          <ul className="flex space-x-6 font-bold">
            <li>
              <a href="#" className="hover:text-gray-300 ">
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
