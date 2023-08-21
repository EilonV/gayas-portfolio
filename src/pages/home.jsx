import { useEffect } from "react";
import { About } from "../components/about"
import { Contact } from "../components/contact"
import { Portfolio } from "../components/portfolio"
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Home = () => {
    useEffect(() => {
        AOS.init();
    }, [])

    const style = 'background-color: #272727; color: #d2ecff; font-weight:700; border: 5px solid #8466EF; font-size: 4em; border-radius: 14px; padding:20px;'
    console.log("%cEilon Vana github.com/eilonv", style);

    return <main className="main-layout home flex">
        <Portfolio />
        <About />
        <Contact />
    </main>
}