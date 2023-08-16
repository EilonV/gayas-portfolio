import img from '../../src/assets/images/spray.jpg'

export const About = () => {
    return <section id='about' className="about flex align-center">
        <div className="scope flex column ">
            <h2>ALL ABOUT</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, ut? Debitis sint nemo facilis quo placeat aliquid, voluptas, nulla error non ipsum omnis vitae consequatur recusandae. Enim nulla voluptas fugit!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus quam maiores possimus ab dicta neque velit. Cumque nobis soluta reiciendis neque nesciunt possimus autem laboriosam necessitatibus tenetur? Deserunt, sed quia?</p>
        </div>
        <div className="me flex column align-center">
            <h2>ME</h2>
            <img src={img} alt="gaya shayo pfp" />
        </div>
    </section>
}