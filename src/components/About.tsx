export default function About() {
    return (
        <section className="py-20 bg-black text-timberwolf">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold mb-6">
                            Sobre el Proyecto
                        </h2>
                        <p className="text-lg mb-4">
                            Este proyecto para la asignatura "Bases del Entrenamiento" explora los fundamentos del CrossFit como
                            metodología de entrenamiento funcional de alta intensidad.
                        </p>
                        <p className="text-lg mb-4">
                            A través de una selección de 19 ejercicios fundamentales, analizamos la técnica correcta, los grupos
                            musculares involucrados y los beneficios de cada movimiento.
                        </p>
                        <p className="text-lg">
                            El CrossFit combina elementos de levantamiento olímpico, gimnasia y acondicionamiento metabólico para
                            desarrollar una condición física completa y equilibrada.
                        </p>
                    </div>
                    <div className="md:w-1/2 grid grid-cols-2 gap-4">
                        <div className="bg-imperial-red p-6 rounded-lg">
                            <h3 className="text-2xl font-bold mb-2">Fuerza</h3>
                            <p>Desarrollo de potencia y capacidad muscular a través de movimientos funcionales.</p>
                        </div>
                        <div className="bg-timberwolf p-6 rounded-lg">
                            <h3 className="text-2xl text-black font-bold mb-2">Resistencia</h3>
                            <p className="text-black">Mejora del sistema cardiovascular y capacidad aeróbica y anaeróbica.</p>
                        </div>
                        <div className="bg-timberwolf p-6 rounded-lg">
                            <h3 className="text-2xl text-black font-bold mb-2">Flexibilidad</h3>
                            <p className="text-black">Aumento del rango de movimiento y prevención de lesiones.</p>
                        </div>
                        <div className="bg-imperial-red p-6 rounded-lg">
                            <h3 className="text-2xl font-bold mb-2">Agilidad</h3>
                            <p>Mejora de la coordinación, equilibrio y precisión en los movimientos.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
