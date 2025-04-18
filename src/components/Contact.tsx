import { Award, BookOpen, Dumbbell, GraduationCap, Mail, MapPin, Phone, Trophy, Users } from "lucide-react"

export default function Contact() {
    return (
        <section className="py-20 bg-black text-timberwolf">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold mb-6">Contacto</h2>
                        <p className="text-lg mb-8">
                            ¿Tienes preguntas sobre el proyecto o quieres saber más sobre los ejercicios de CrossFit? ¡Contáctame!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="bg-black/20 p-3 rounded-full">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Ubicación</h3>
                                    <p>
                                        Fundación Universitaria Juan de Castellanos, Facultad de Ciencias de la Educación, Humanidades y
                                        Arte
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-black/20 p-3 rounded-full">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Email</h3>
                                    <p>oveloza@jdc.edu.co</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-black/20 p-3 rounded-full">
                                    <Phone className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Teléfono</h3>
                                    <p>+57 311 232 5448</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="bg-black/20 p-3 rounded-full">
                                    <Dumbbell className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="font-semibold">Horario de entrenamiento</h3>
                                    <p>Lunes a Viernes: 8:00 - 17:00</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2 bg-timberwolf text-black p-8 rounded-lg">
                        <div className="flex flex-col items-center mb-8">
                            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-imperial_red mb-4">
                                <img
                                    src="/images/profile-pic.png?height=200&width=200"
                                    alt="Foto de perfil profesional"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-2xl font-bold text-black">Owen Veloza</h3>
                            <p className="text-lg font-medium text-imperial_red">
                                Estudiante en Ciencias del Deporte y de la Actividad Física
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-start gap-3">
                                <GraduationCap className="h-6 w-6 text-imperial-red mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-lg">Formación Académica</h4>
                                    <p>Ciencias del Deporte y de la Actividad Física (2022-Presente)</p>
                                    <p className="text-sm text-gray-600">Fundación Universitaria Juan de Castellanos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
