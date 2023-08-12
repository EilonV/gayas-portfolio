import { About } from "../components/about"
import { Hero } from "../components/slider-hero"

export const Home = () => {
    return <main className="main-layout home flex">
        <Hero />
        <About />
    </main>
}