import { useRef } from "react"

export const Header = () => {
    const headerRef = useRef()
    // const activeNav = (e, el) => {
    //     const els = headerRef.current.children
    //     for (var i = 0; i < els.length; i++) {
    //         els[i].classList.remove('active');
    //     }
    //     e.target.parentElement.classList.add('active')
    // }

    return <header className="header">
        <nav className="flex align-center justify-center">
            <ul className="flex align-center justify-center" ref={headerRef}>
                {/* <li>
                    <a href="#top" onClick={activeNav}>top</a>
                </li> */}
                <li>
                    <a href="#portfolio" >showcase</a>
                </li>
                <li>
                    <a href="#about" >about</a>
                </li>
                <li>
                    <a href="#contact" >contact</a>
                </li>
            </ul>
        </nav>
    </header>
}