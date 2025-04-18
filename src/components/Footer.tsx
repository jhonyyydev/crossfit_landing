import Link from "next/link"
import { Instagram } from "lucide-react"

export default function Footer() {
    return (
        <footer className="bg-black text-timberwolf py-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-6 md:mb-0">
                        <h2 className="text-2xl font-bold">
                            BASES DEL <span className="text-imperial_red">ENTRENAMIENTO</span>
                        </h2>
                        <p className="mt-2 text-timberwolf/70">Proyecto universitario sobre fundamentos del CrossFit</p>
                    </div>

                    <div className="flex space-x-6">
                        <Link href="https://www.instagram.com/owenveloza?igsh=MWdzdmVqNDlhdGxh" className="hover:text-imperial_red transition-colors">
                            <Instagram className="h-6 w-6" />
                            <span className="sr-only">Instagram</span>
                        </Link>
                    </div>
                </div>

                <div className="border-t border-timberwolf/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm text-timberwolf/70">
                        &copy; {new Date().getFullYear()} Bases del Entrenamiento. Todos los derechos reservados.
                    </p>

                    <nav className="flex flex-wrap gap-4 mt-4 md:mt-0">
                        <Link href="#" className="text-sm hover:text-imperial_red transition-colors">
                            Política de Privacidad
                        </Link>
                        <Link href="#" className="text-sm hover:text-imperial_red transition-colors">
                            Términos de Uso
                        </Link>
                        <Link href="#" className="text-sm hover:text-imperial_red transition-colors">
                            Contacto
                        </Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}
