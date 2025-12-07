export function Navbar() {
    const TEXT_RIGHT = "Explora la evolución del campo de juego";
    return (
        <header className="flex items-center justify-between sticky top-0 z-50 py-3 px-6 border-b-2 border-gray-500/50 bg-neutral-900/30 backdrop-blur-sm">
            <div className="flex flex-row gap-2">
                <img
                    className="object-contain w-45 h-auto"
                    src="./logo.webp"
                    alt="Logo de Tablero Yu-Gi-Oh!"
                />
                <div className="flex flex-col items-center my-auto">
                    <h1 className="text-2xl font-bold font-fredericka-the-great">Tablero Yu-Gi-Oh!</h1>
                    <p className="text-sm text-white/50">Visualizador Interactivo</p>
                </div>
            </div>
            <div>
                <span className="text-sm text-muted-foreground hidden md:block text-white/50">{TEXT_RIGHT}</span>
            </div>
        </header>
    )
}