import { useEffect } from "react";
import { About } from "../components/about"
import { Contact } from "../components/contact"
import { Portfolio } from "../components/portfolio"
// import { Hero } from "../components/slider-hero"
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Home = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return <main className="main-layout home flex">
        <Portfolio />
        {/* <Hero /> */}
        <About />
        <Contact />
    </main>
}