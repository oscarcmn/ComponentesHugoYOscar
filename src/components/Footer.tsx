function Footer() {
    return (
        <footer className="text-blanco flex justify-between items-center p-6 bg-primary">
            {/* Izquierda: Icono y texto */}
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-300 flex items-center justify-center">
                    {/* Aquí iría el ícono del sobre, reemplázalo con una imagen o SVG */}
                    <span className="text-negro"><img src="../../public/logo.png" alt="" /></span>
                </div>
                <div className="text-sm">
                    <p className="leading-tight">Texto 1</p>
                    <p className="leading-tight">Texto 2</p>
                    <p className="leading-tight">Texto 3</p>
                </div>
            </div>

            {/* Derecha: Texto */}
            <div className="text-sm text-right">
                <p className="leading-tight">Texto 4</p>
                <p className="leading-tight">Texto 5</p>
            </div>
        </footer>
    );
}


export default Footer
