import vid from '../assets/vids/gaya-test.mp4'

export const Hero = () => {
    return <section id='top' className="hero flex column justify-center align-center full">
        <div className="header-wrapper main-layout">
            <h1>GAYA SHAYO
                <br />
                GRAPHIC DESIGNER
            </h1>
        </div>
        <video src={vid} muted autoPlay loop></video>
    </section >
}