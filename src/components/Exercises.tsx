"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Función para convertir URLs de YouTube a formato embed con parámetros personalizados
const getYouTubeEmbedUrl = (url: string) => {
    const regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)

    const videoId = match && match[1].length === 11 ? match[1] : null

    if (videoId) {
        return `https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0&showinfo=0&controls=1&autohide=1`
    }

    return url
}


const exercisesData = [
    {
        id: 1,
        name: "Sentadilla Squat",
        category: "fuerza",
        description:
            "Ejercicio fundamental que trabaja principalmente piernas y glúteos. Consiste en flexionar las rodillas manteniendo la espalda recta.",
        videoUrl: "https://youtu.be/XuOfTcr5sCo",
        muscles: "Cuádriceps, glúteos, isquiotibiales, core",
    },
    {
        id: 2,
        name: "Lunge",
        category: "fuerza",
        description:
            "Ejercicio de zancada hacia adelante que trabaja unilateralmente las piernas, mejorando el equilibrio y la fuerza.",
        videoUrl: "https://youtu.be/NnAbOy-DgS8",
        muscles: "Cuádriceps, glúteos, isquiotibiales, core",
    },
    {
        id: 3,
        name: "Reverse Lunge",
        category: "fuerza",
        description:
            "Variante de la zancada donde el movimiento se realiza hacia atrás, reduciendo el impacto en las rodillas.",
        videoUrl: "https://youtu.be/BCHQEksgcXc",
        muscles: "Cuádriceps, glúteos, isquiotibiales, core",
    },
    {
        id: 4,
        name: "Push Up",
        category: "gimnasia",
        description:
            "Ejercicio de empuje que fortalece la parte superior del cuerpo utilizando el peso corporal como resistencia.",
        videoUrl: "https://youtu.be/L9lo36PvHa0",
        muscles: "Pecho, hombros, tríceps, core",
    },
    {
        id: 5,
        name: "Sit Ups",
        category: "gimnasia",
        description: "Ejercicio abdominal que consiste en elevar el torso desde una posición tumbada hasta sentarse.",
        videoUrl: "https://youtu.be/dzH_kiSp3ow",
        muscles: "Abdominales, flexores de cadera",
    },
    {
        id: 6,
        name: "Mountain Climbers",
        category: "cardio",
        description:
            "Ejercicio dinámico que simula la acción de escalar, elevando las rodillas alternadamente hacia el pecho.",
        videoUrl: "https://youtu.be/uG54qhZcndI",
        muscles: "Core, hombros, brazos, cuádriceps",
    },
    {
        id: 7,
        name: "Burpees",
        category: "cardio",
        description:
            "Ejercicio de cuerpo completo que combina sentadilla, plancha, flexión y salto, ideal para aumentar la resistencia cardiovascular.",
        videoUrl: "https://youtu.be/WY7egH64hek",
        muscles: "Piernas, pecho, hombros, core, brazos",
    },
    {
        id: 8,
        name: "Box Jump",
        category: "cardio",
        description:
            "Salto explosivo a una caja o plataforma elevada con ambos pies, desarrolla potencia en el tren inferior.",
        videoUrl: "https://youtu.be/uwWGEb-Yjwg",
        muscles: "Cuádriceps, glúteos, pantorrillas",
    },
    {
        id: 9,
        name: "Front Squat",
        category: "fuerza",
        description:
            "Sentadilla con la barra sostenida en la parte frontal de los hombros, enfatiza el trabajo de cuádriceps.",
        videoUrl: "https://youtu.be/Jm6B2_zekDs",
        muscles: "Cuádriceps, glúteos, core, espalda alta",
    },
    {
        id: 10,
        name: "Back Squat",
        category: "fuerza",
        description:
            "Sentadilla con la barra apoyada en la parte posterior de los hombros, permite levantar más peso que la sentadilla frontal.",
        videoUrl: "https://youtu.be/55RMKfmRUFk",
        muscles: "Cuádriceps, glúteos, isquiotibiales, espalda baja",
    },
    {
        id: 11,
        name: "Thrusters",
        category: "fuerza",
        description:
            "Movimiento compuesto que combina una sentadilla frontal con un press de hombros, excelente para desarrollar fuerza y resistencia.",
        videoUrl: "https://youtu.be/pYh0QDO4XRo",
        muscles: "Cuádriceps, glúteos, hombros, tríceps, core",
    },
    {
        id: 12,
        name: "Single Unders",
        category: "cardio",
        description: "Saltos básicos con cuerda donde ésta pasa una vez por debajo de los pies en cada salto.",
        videoUrl: "https://youtu.be/e4uWLQDSR_o",
        muscles: "Pantorrillas, antebrazos, hombros, coordinación",
    },
    {
        id: 13,
        name: "Double Unders",
        category: "cardio",
        description: "Salto avanzado con cuerda donde ésta pasa dos veces por debajo de los pies en un solo salto.",
        videoUrl: "https://youtu.be/n7pH8BHZlbQ",
        muscles: "Pantorrillas, antebrazos, hombros, coordinación",
    },
    {
        id: 14,
        name: "The Clean",
        category: "fuerza",
        description:
            "Levantamiento olímpico que consiste en llevar la barra desde el suelo hasta los hombros en un movimiento explosivo.",
        videoUrl: "https://youtu.be/IctBD6cDtWo",
        muscles: "Piernas, glúteos, espalda, hombros, trapecios",
    },
    {
        id: 15,
        name: "Araña",
        category: "gimnasia",
        description:
            "Variante de la plancha donde se llevan alternadamente las rodillas hacia los codos, trabajando oblicuos y core.",
        videoUrl: "https://youtu.be/XreTT0Uo5JU",
        muscles: "Core, oblicuos, hombros, flexores de cadera",
    },
    {
        id: 16,
        name: "Russian Twist con Peso",
        category: "gimnasia",
        description: "Ejercicio de rotación del torso con peso adicional que fortalece los músculos oblicuos y el core.",
        videoUrl: "https://youtu.be/yMlZATN_jZ4",
        muscles: "Oblicuos, abdominales, espalda baja",
    },
    {
        id: 17,
        name: "Shuttle Run",
        category: "cardio",
        description:
            "Carrera de ida y vuelta entre dos puntos, excelente para mejorar la agilidad, velocidad y resistencia.",
        videoUrl: "https://youtu.be/jC-wdgQpIPk",
        muscles: "Piernas, sistema cardiovascular, coordinación",
    },
    {
        id: 18,
        name: "Burpee Over Dumbbell",
        category: "cardio",
        description: "Variante del burpee donde se salta lateralmente sobre una mancuerna después de cada repetición.",
        videoUrl: "https://youtu.be/3yHS6K_jFeM",
        muscles: "Piernas, pecho, hombros, core, brazos",
    },
    {
        id: 19,
        name: "Dumbbell Snatch",
        category: "fuerza",
        description:
            "Versión con mancuerna del arranque olímpico, llevando el peso desde el suelo hasta por encima de la cabeza en un solo movimiento.",
        videoUrl: "https://youtu.be/FDfLn1qiCqE",
        muscles: "Piernas, glúteos, espalda, hombros, tríceps",
    },
]

export default function Exercises() {
    const [activeCategory, setActiveCategory] = useState("todos")

    const filteredExercises =
        activeCategory === "todos"
            ? exercisesData
            : exercisesData.filter((exercise) => exercise.category === activeCategory)

    return (
        <section id="exercises" className="py-20 bg-antique_white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Ejercicios de <span className="text-imperial_red">CrossFit</span>
                </h2>

                <Tabs defaultValue="todos" className="w-full">
                    <TabsList className="grid w-full grid-cols-4 mb-8">
                        <TabsTrigger
                            value="todos"
                            onClick={() => setActiveCategory("todos")}
                            className="font-bold data-[state=active]:bg-imperial-red data-[state=active]:text-timberwolf"
                        >
                            Todos
                        </TabsTrigger>
                        <TabsTrigger
                            value="cardio"
                            onClick={() => setActiveCategory("cardio")}
                            className="font-bold data-[state=active]:bg-imperial-red data-[state=active]:text-timberwolf"
                        >
                            Cardio
                        </TabsTrigger>
                        <TabsTrigger
                            value="fuerza"
                            onClick={() => setActiveCategory("fuerza")}
                            className="font-bold data-[state=active]:bg-imperial-red data-[state=active]:text-timberwolf"
                        >
                            Fuerza
                        </TabsTrigger>
                        <TabsTrigger
                            value="gimnasia"
                            onClick={() => setActiveCategory("gimnasia")}
                            className="font-bold data-[state=active]:bg-imperial-red data-[state=active]:text-timberwolf"
                        >
                            Gimnasia
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="todos" className="mt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredExercises.map((exercise) => (
                                <div
                                    key={exercise.id}
                                    className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
                                >
                                    <div className="relative pb-[56.25%] h-0">
                                        <iframe
                                            src={`${getYouTubeEmbedUrl(exercise.videoUrl)}&autohide=1&fs=1&iv_load_policy=3&cc_load_policy=0&playsinline=1`}
                                            title={exercise.name}
                                            className="absolute top-0 left-0 w-full h-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-center mb-3">
                                            <h3 className="text-xl font-bold">{exercise.name}</h3>
                                            <span
                                                className={`px-3 py-1 rounded-full text-xs font-semibold ${exercise.category === "cardio"
                                                    ? "bg-imperial_red text-white"
                                                    : exercise.category === "fuerza"
                                                        ? "bg-teal text-white"
                                                        : "bg-black text-white"
                                                    }`}
                                            >
                                                {exercise.category.toUpperCase()}
                                            </span>
                                        </div>
                                        <p className="text-gray-700 mb-4">{exercise.description}</p>
                                        <div className="border-t pt-4">
                                            <p className="text-sm">
                                                <span className="font-semibold">Músculos:</span> {exercise.muscles}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="cardio" className="mt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredExercises.map((exercise) => (
                                <div
                                    key={exercise.id}
                                    className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
                                >
                                    <div className="relative pb-[56.25%] h-0">
                                        <iframe
                                            src={`${getYouTubeEmbedUrl(exercise.videoUrl)}&modestbranding=1&rel=0&controls=1&autohide=1&fs=1&iv_load_policy=3&cc_load_policy=0&playsinline=1`}
                                            title={exercise.name}
                                            className="absolute top-0 left-0 w-full h-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>

                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-center mb-3">
                                            <h3 className="text-xl font-bold">{exercise.name}</h3>
                                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-imperial_red text-white">
                                                CARDIO
                                            </span>
                                        </div>
                                        <p className="text-gray-700 mb-4">{exercise.description}</p>
                                        <div className="border-t pt-4">
                                            <p className="text-sm">
                                                <span className="font-semibold">Músculos:</span> {exercise.muscles}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="fuerza" className="mt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredExercises.map((exercise) => (
                                <div
                                    key={exercise.id}
                                    className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
                                >
                                    <div className="relative pb-[56.25%] h-0">
                                        <iframe
                                            src={`${getYouTubeEmbedUrl(exercise.videoUrl)}?autoplay=0&modestbranding=1&rel=0&controls=1&playsinline=1`}
                                            title={exercise.name}
                                            className="absolute top-0 left-0 w-full h-full"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-center mb-3">
                                            <h3 className="text-xl font-bold">{exercise.name}</h3>
                                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal text-white">FUERZA</span>
                                        </div>
                                        <p className="text-gray-700 mb-4">{exercise.description}</p>
                                        <div className="border-t pt-4">
                                            <p className="text-sm">
                                                <span className="font-semibold">Músculos:</span> {exercise.muscles}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabsContent>

                    <TabsContent value="gimnasia" className="mt-0">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredExercises.map((exercise) => (
                                <div
                                    key={exercise.id}
                                    className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
                                >
                                    <div className="relative pb-[56.25%] h-0">
                                        <div className="relative w-full h-0 pb-[56.25%] overflow-hidden rounded-lg shadow-md">
                                            <iframe
                                                src={`${getYouTubeEmbedUrl(exercise.videoUrl)}?autoplay=0&modestbranding=1&rel=0&controls=1&playsinline=1`}
                                                title={exercise.name}
                                                className="absolute top-0 left-0 w-full h-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            ></iframe>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <div className="flex justify-between items-center mb-3">
                                            <h3 className="text-xl font-bold">{exercise.name}</h3>
                                            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black text-white">GIMNASIA</span>
                                        </div>
                                        <p className="text-gray-700 mb-4">{exercise.description}</p>
                                        <div className="border-t pt-4">
                                            <p className="text-sm">
                                                <span className="font-semibold">Músculos:</span> {exercise.muscles}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    )
}
