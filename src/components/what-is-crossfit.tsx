import { Dumbbell, Zap, Users, Target, TrendingUp, Heart } from "lucide-react"

export default function WhatIsCrossfit() {
    return (
        <section className="py-16 bg-timberwolf text-black">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold mb-4">
                        ¿Qué es el <span className="text-imperial-red">CrossFit</span>?
                    </h2>
                    <div className="w-24 h-1 bg-imperial-red mx-auto mb-6"></div>
                    <p className="text-lg max-w-3xl mx-auto">
                        CrossFit es un programa de entrenamiento de fuerza y acondicionamiento físico que combina ejercicios
                        funcionales, constantemente variados, ejecutados a alta intensidad.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                        <div className="w-12 h-12 bg-imperial-red/10 rounded-full flex items-center justify-center mb-4">
                            <Dumbbell className="w-6 h-6 text-imperial-red" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Entrenamiento Funcional</h3>
                        <p>
                            Movimientos que reflejan patrones naturales del cuerpo humano, preparándote para los desafíos físicos de
                            la vida diaria y mejorando tu capacidad atlética general.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                        <div className="w-12 h-12 bg-imperial-red/10 rounded-full flex items-center justify-center mb-4">
                            <Zap className="w-6 h-6 text-imperial-red" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Alta Intensidad</h3>
                        <p>
                            Entrenamientos breves pero intensos que maximizan el gasto calórico y estimulan cambios hormonales
                            positivos, acelerando la quema de grasa y el desarrollo muscular.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                        <div className="w-12 h-12 bg-imperial-red/10 rounded-full flex items-center justify-center mb-4">
                            <Users className="w-6 h-6 text-imperial-red" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Comunidad</h3>
                        <p>
                            Un ambiente de apoyo y camaradería donde los atletas se motivan mutuamente para superar sus límites y
                            alcanzar objetivos que parecían imposibles.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                        <div className="w-12 h-12 bg-imperial-red/10 rounded-full flex items-center justify-center mb-4">
                            <Target className="w-6 h-6 text-imperial-red" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Medible y Escalable</h3>
                        <p>
                            Cada entrenamiento tiene métricas claras que permiten medir tu progreso. Además, todos los ejercicios
                            pueden adaptarse a cualquier nivel de condición física.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                        <div className="w-12 h-12 bg-imperial-red/10 rounded-full flex items-center justify-center mb-4">
                            <TrendingUp className="w-6 h-6 text-imperial-red" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Constante Variación</h3>
                        <p>
                            Entrenamientos diferentes cada día que desafían al cuerpo de distintas maneras, evitando el estancamiento
                            y manteniendo la motivación a largo plazo.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
                        <div className="w-12 h-12 bg-imperial-red/10 rounded-full flex items-center justify-center mb-4">
                            <Heart className="w-6 h-6 text-imperial-red" />
                        </div>
                        <h3 className="text-xl font-bold mb-2">Beneficios para la Salud</h3>
                        <p>
                            Mejora la composición corporal, aumenta la resistencia cardiovascular, incrementa la fuerza y potencia, y
                            desarrolla flexibilidad, equilibrio y agilidad.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
