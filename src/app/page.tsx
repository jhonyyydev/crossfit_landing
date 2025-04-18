import About from "@/components/About";
import Contact from "@/components/Contact";
import Exercises from "@/components/Exercises";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WhatIsCrossfit from "@/components/what-is-crossfit";

export default function Home() {
  return (
    <main className="min-h-screen bg-timberwolf">
      <Hero />
      <WhatIsCrossfit/>
      <About/>
      <Exercises/>
      <Contact/>
      <Footer/>
    </main>
  )
}
