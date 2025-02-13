function Footer() {
    return (
        <div className="bg-primary">
            <footer className="text-blanco grid-container items-center p-6 ">
                <div className="">
                    <div className="w-40 h-12 flex items-center justify-center">
                        <span className="text-negro"><img src="../../logo.png" alt="" /></span>
                    </div>
                    <div className="text-sm">
                        <p className="leading-tight">Texto 1</p>
                        <p className="leading-tight">Texto 2</p>
                        <p className="leading-tight">Texto 3</p>
                    </div>
                </div>

                <div className="text-sm text-right">
                    <p className="leading-tight">Texto 4</p>
                    <p className="leading-tight">Texto 5</p>
                </div>
            </footer>
        </div>
    );
}


export default Footer
