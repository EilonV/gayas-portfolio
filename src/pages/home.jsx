import { About } from "../components/about"
import { Contact } from "../components/contact"
import { Portfolio } from "../components/portfolio"
import { Hero } from "../components/slider-hero"

export const Home = () => {
    return <main className="main-layout home flex">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
    </main>
}