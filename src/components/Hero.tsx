"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
    "/images/hero1.jpg?height=800&width=1600",
    "/images/hero2.webp?height=800&width=1600",
    "/images/hero3.jpeg?height=800&width=1600",
]

export default function Hero() {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
        }, 5000)
        return () => clearInterval(interval)
    }, [])

    const next = (e: React.MouseEvent) => {
        e.stopPropagation() 
        setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
    }

    const prev = (e: React.MouseEvent) => {
        e.stopPropagation() 
        setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
    }

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Image carousel */}
            <div className="relative h-full w-full">
                {images.map((src, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <div className="absolute inset-0 bg-black/50 z-10" aria-hidden="true" />
                        <img
                            src={src || "/placeholder.svg"}
                            alt={`CrossFit imagen ${index + 1}`}
                            className="h-full w-full object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Navigation arrows - Increased z-index and size */}
            <button
                onClick={prev}
                className="absolute left-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/70 p-3 text-timberwolf transition-colors hover:bg-teal cursor-pointer"
                aria-label="Imagen anterior"
                type="button"
            >
                <ChevronLeft className="h-10 w-10" />
            </button>
            <button
                onClick={next}
                className="absolute right-4 top-1/2 z-30 -translate-y-1/2 rounded-full bg-black/70 p-3 text-timberwolf transition-colors hover:bg-teal cursor-pointer"
                aria-label="Imagen siguiente"
                type="button"
            >
                <ChevronRight className="h-10 w-10" />
            </button>

            {/* Hero content */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center pointer-events-none">
                <h1 className="mb-4 text-5xl font-bold hero-text md:text-7xl">
                    BASES DEL <span className="text-imperial-red">ENTRENAMIENTO</span>
                </h1>
                <p className="mb-8 max-w-2xl text-xl hero-text">
                    Descubre los fundamentos del CrossFit y cómo pueden transformar tu condición física
                </p>
                <a
                    href="#exercises"
                    className="rounded bg-imperial-red px-6 py-3 font-bold hero-text transition-transform hover:scale-105 pointer-events-auto"
                >
                    VER EJERCICIOS
                </a>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 animate-bounce">
                <div className="h-14 w-8 rounded-full border-2 border-timberwolf">
                    <div className="mt-2 h-3 w-3 mx-auto rounded-full bg-timberwolf animate-pulse"></div>
                </div>
            </div>
        </section>
    )
}
