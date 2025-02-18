function Footer() {
    return (
        <div className="bg-primary py-3 font-family-body">
            <div className="container mx-auto px-40 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <div className="w-25 h-25 flex items-center justify-center">
                        <img src="../../logo.png" alt="Logo" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-white text-sm">
                        <p className="leading-tight">Texto 1</p>
                        <p className="leading-tight">Texto 2</p>
                        <p className="leading-tight">Texto 3</p>
                    </div>
                </div>

                {/* Texto alineado a la derecha */}
                <div className="text-white text-sm text-right">
                    <p className="leading-tight">Texto 4</p>
                    <p className="leading-tight">Texto 5</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;

